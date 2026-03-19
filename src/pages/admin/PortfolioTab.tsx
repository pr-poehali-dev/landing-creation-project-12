import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiCall, PORTFOLIO_URL, UPLOAD_URL, CATEGORIES, type Project, type ToastFn } from "./constants";

interface Props {
  headers: Record<string, string>;
  toast: ToastFn;
  onAuthFail: () => void;
}

export default function PortfolioTab({ headers, toast, onAuthFail }: Props) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", category: "", images: [] as string[], guests: 0, date: "" });
  const [uploading, setUploading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await apiCall(PORTFOLIO_URL + "?all=true", { headers }, onAuthFail);
    if (res) {
      setProjects(await res.json());
    } else {
      toast({ title: "Ошибка загрузки", variant: "destructive" });
    }
    setLoading(false);
  }, [headers, onAuthFail, toast]);

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm({ title: "", category: "", images: [], guests: 0, date: "" }); setEditingId(null); };

  const compressImage = (file: File, maxWidth = 1200, quality = 0.75): Promise<string> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        let result = canvas.toDataURL("image/jpeg", quality);
        // если всё ещё больше 1МБ в base64 — жмём сильнее
        if (result.length > 1_400_000) {
          result = canvas.toDataURL("image/jpeg", 0.55);
        }
        resolve(result);
      };
      img.onerror = reject;
      img.src = url;
    });

  const uploadFile = async (file: File): Promise<string | null> => {
    const compressed = await compressImage(file);
    const res = await fetch(UPLOAD_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ file: compressed, name: file.name, content_type: "image/jpeg" }),
    });
    if (res.status === 401) { onAuthFail(); return null; }
    if (!res.ok) return null;
    const data = await res.json();
    return data.url || null;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of files) {
        const url = await uploadFile(file);
        if (url) urls.push(url);
      }
      if (urls.length) {
        setForm((f) => ({ ...f, images: [...f.images, ...urls] }));
        toast({ title: `Загружено фото: ${urls.length}` });
      } else {
        toast({ title: "Ошибка загрузки фото", variant: "destructive" });
      }
    } catch {
      toast({ title: "Ошибка загрузки фото", variant: "destructive" });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const removeImage = (idx: number) => {
    setForm((f) => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));
  };

  const startEdit = (p: Project) => {
    setEditingId(p.id);
    setForm({ title: p.title, category: p.category, images: p.images || (p.image ? [p.image] : []), guests: p.guests, date: p.date });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async () => {
    if (!form.title.trim() || !form.category.trim()) { toast({ title: "Заполните название и категорию", variant: "destructive" }); return; }
    const payload = { ...form, image: form.images[0] || "" };
    const res = await apiCall(PORTFOLIO_URL, {
      method: editingId ? "PUT" : "POST",
      headers,
      body: JSON.stringify(editingId ? { id: editingId, ...payload } : payload),
    }, onAuthFail);
    if (res) {
      toast({ title: editingId ? "Проект обновлён" : "Проект добавлен" });
      resetForm();
      fetchData();
    }
  };

  const toggleVisibility = async (p: Project) => {
    const res = await apiCall(PORTFOLIO_URL, {
      method: "PUT", headers,
      body: JSON.stringify({ id: p.id, is_visible: !p.is_visible }),
    }, onAuthFail);
    if (res) fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить этот проект?")) return;
    const res = await apiCall(PORTFOLIO_URL + "?id=" + id, { method: "DELETE", headers }, onAuthFail);
    if (res) { toast({ title: "Проект удалён" }); fetchData(); }
  };

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingId ? "Редактирование проекта" : "Новый проект"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Название проекта *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <Select value={form.category} onValueChange={(value) => setForm({ ...form, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Категория *" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Фото проекта</span>
              <label className="cursor-pointer">
                <Button type="button" variant="outline" size="sm" disabled={uploading} asChild>
                  <span>
                    <Icon name={uploading ? "Loader" : "Upload"} size={15} className={`mr-1 ${uploading ? "animate-spin" : ""}`} />
                    {uploading ? "Загрузка..." : "Добавить фото"}
                  </span>
                </Button>
                <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
            {form.images.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {form.images.map((url, idx) => (
                  <div key={idx} className="relative group">
                    <img src={url} alt={`фото ${idx + 1}`} className="h-24 w-32 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >✕</button>
                    {idx === 0 && <span className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1 rounded">обложка</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Input placeholder="Дата (напр. Декабрь 2025)" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <div className="flex gap-3">
            <Button onClick={save}>
              <Icon name={editingId ? "Save" : "Plus"} size={16} className="mr-1" />
              {editingId ? "Сохранить" : "Добавить"}
            </Button>
            {editingId && <Button variant="outline" onClick={resetForm}>Отмена</Button>}
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">Загрузка...</div>
      ) : projects.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">Проектов пока нет</div>
      ) : (
        <div className="space-y-4">
          {projects.map((p) => (
            <Card key={p.id} className={!p.is_visible ? "opacity-50" : ""}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {(p.images?.[0] || p.image) && (
                      <img src={p.images?.[0] || p.image} alt={p.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-foreground truncate">{p.title}</div>
                      <div className="text-sm text-muted-foreground">{p.category}</div>
                      <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                        <span><Icon name="Calendar" size={12} className="inline mr-1" />{p.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Switch checked={p.is_visible} onCheckedChange={() => toggleVisibility(p)} />
                    <Button variant="ghost" size="icon" onClick={() => startEdit(p)}>
                      <Icon name="Pencil" size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => remove(p.id)} className="text-red-500 hover:text-red-600">
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { apiCall, TESTIMONIALS_URL, type Testimonial, type ToastFn } from "./constants";

interface Props {
  headers: Record<string, string>;
  toast: ToastFn;
  onAuthFail: () => void;
}

export default function TestimonialsTab({ headers, toast, onAuthFail }: Props) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", position: "", quote: "", rating: 5 });

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await apiCall(TESTIMONIALS_URL + "?all=true", { headers }, onAuthFail);
    if (res) {
      setTestimonials(await res.json());
    } else {
      toast({ title: "Ошибка загрузки", variant: "destructive" });
    }
    setLoading(false);
  }, [headers, onAuthFail, toast]);

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm({ name: "", position: "", quote: "", rating: 5 }); setEditingId(null); };

  const startEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setForm({ name: t.name, position: t.position, quote: t.quote, rating: t.rating });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async () => {
    if (!form.name.trim() || !form.quote.trim()) { toast({ title: "Заполните имя и текст отзыва", variant: "destructive" }); return; }
    const res = await apiCall(TESTIMONIALS_URL, {
      method: editingId ? "PUT" : "POST",
      headers,
      body: JSON.stringify(editingId ? { id: editingId, ...form } : form),
    }, onAuthFail);
    if (res) {
      toast({ title: editingId ? "Отзыв обновлён" : "Отзыв добавлен" });
      resetForm();
      fetchData();
    }
  };

  const toggleVisibility = async (t: Testimonial) => {
    const res = await apiCall(TESTIMONIALS_URL, {
      method: "PUT", headers,
      body: JSON.stringify({ id: t.id, is_visible: !t.is_visible }),
    }, onAuthFail);
    if (res) fetchData();
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить этот отзыв?")) return;
    const res = await apiCall(TESTIMONIALS_URL + "?id=" + id, { method: "DELETE", headers }, onAuthFail);
    if (res) { toast({ title: "Отзыв удалён" }); fetchData(); }
  };

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingId ? "Редактирование отзыва" : "Новый отзыв"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Имя клиента *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Должность / компания" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
          </div>
          <Textarea placeholder="Текст отзыва *" rows={4} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} />
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Рейтинг:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" onClick={() => setForm({ ...form, rating: star })} className="transition-transform hover:scale-110">
                <Icon name="Star" size={24} className={star <= form.rating ? "fill-accent text-accent" : "text-muted-foreground"} />
              </button>
            ))}
          </div>
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
      ) : testimonials.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">Отзывов пока нет</div>
      ) : (
        <div className="space-y-4">
          {testimonials.map((t) => (
            <Card key={t.id} className={!t.is_visible ? "opacity-50" : ""}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-foreground">{t.name}</span>
                      <div className="flex gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    {t.position && <div className="text-sm text-muted-foreground mb-2">{t.position}</div>}
                    <p className="text-sm text-foreground/80">"{t.quote}"</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Switch checked={t.is_visible} onCheckedChange={() => toggleVisibility(t)} />
                    <Button variant="ghost" size="icon" onClick={() => startEdit(t)}>
                      <Icon name="Pencil" size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => remove(t.id)} className="text-red-500 hover:text-red-600">
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

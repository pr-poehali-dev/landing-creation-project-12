import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TESTIMONIALS_URL = "https://functions.poehali.dev/ce15942a-c5f3-4e40-a6ce-0aca3ead1e01";
const PORTFOLIO_URL = "https://functions.poehali.dev/e7a04abf-c814-49ed-aeaa-9c3eab9257e7";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
  is_visible: boolean;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  guests: number;
  date: string;
  is_visible: boolean;
  sort_order: number;
}

type Tab = "testimonials" | "portfolio";

const CATEGORIES = ["Корпоративы", "Государственные мероприятия", "Фестивали", "Конференции", "Выездное обслуживание"];

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [isAuthed, setIsAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("testimonials");
  const { toast } = useToast();

  const headers = { "Content-Type": "application/json", "X-Admin-Token": token };

  const login = () => {
    localStorage.setItem("admin_token", token);
    setIsAuthed(true);
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthed(false);
    setToken("");
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Админ-панель</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
            />
            <Button className="w-full" onClick={login}>Войти</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Админ-панель</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.open("/", "_blank")}>
              <Icon name="ExternalLink" size={16} className="mr-1" /> Сайт
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <Icon name="LogOut" size={16} className="mr-1" /> Выход
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          <Button
            variant={activeTab === "testimonials" ? "default" : "outline"}
            onClick={() => setActiveTab("testimonials")}
          >
            <Icon name="MessageSquare" size={16} className="mr-1" /> Отзывы
          </Button>
          <Button
            variant={activeTab === "portfolio" ? "default" : "outline"}
            onClick={() => setActiveTab("portfolio")}
          >
            <Icon name="Image" size={16} className="mr-1" /> Портфолио
          </Button>
        </div>

        {activeTab === "testimonials" && (
          <TestimonialsTab headers={headers} toast={toast} onAuthFail={() => setIsAuthed(false)} />
        )}
        {activeTab === "portfolio" && (
          <PortfolioTab headers={headers} toast={toast} onAuthFail={() => setIsAuthed(false)} />
        )}
      </div>
    </div>
  );
};

function TestimonialsTab({ headers, toast, onAuthFail }: { headers: Record<string, string>; toast: ReturnType<typeof useToast>["toast"]; onAuthFail: () => void }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", position: "", quote: "", rating: 5 });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(TESTIMONIALS_URL + "?all=true", { headers });
      if (res.status === 401) { onAuthFail(); toast({ title: "Неверный токен", variant: "destructive" }); return; }
      setTestimonials(await res.json());
    } catch { toast({ title: "Ошибка загрузки", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm({ name: "", position: "", quote: "", rating: 5 }); setEditingId(null); };

  const startEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setForm({ name: t.name, position: t.position, quote: t.quote, rating: t.rating });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async () => {
    if (!form.name.trim() || !form.quote.trim()) { toast({ title: "Заполните имя и текст отзыва", variant: "destructive" }); return; }
    try {
      if (editingId) {
        await fetch(TESTIMONIALS_URL, { method: "PUT", headers, body: JSON.stringify({ id: editingId, ...form }) });
        toast({ title: "Отзыв обновлён" });
      } else {
        await fetch(TESTIMONIALS_URL, { method: "POST", headers, body: JSON.stringify(form) });
        toast({ title: "Отзыв добавлен" });
      }
      resetForm();
      fetchData();
    } catch { toast({ title: "Ошибка сохранения", variant: "destructive" }); }
  };

  const toggleVisibility = async (t: Testimonial) => {
    try {
      await fetch(TESTIMONIALS_URL, { method: "PUT", headers, body: JSON.stringify({ id: t.id, is_visible: !t.is_visible }) });
      fetchData();
    } catch { toast({ title: "Ошибка", variant: "destructive" }); }
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить этот отзыв?")) return;
    try {
      await fetch(TESTIMONIALS_URL + "?id=" + id, { method: "DELETE", headers });
      toast({ title: "Отзыв удалён" });
      fetchData();
    } catch { toast({ title: "Ошибка удаления", variant: "destructive" }); }
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

function PortfolioTab({ headers, toast, onAuthFail }: { headers: Record<string, string>; toast: ReturnType<typeof useToast>["toast"]; onAuthFail: () => void }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", category: "", image: "", guests: 0, date: "" });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(PORTFOLIO_URL + "?all=true", { headers });
      if (res.status === 401) { onAuthFail(); toast({ title: "Неверный токен", variant: "destructive" }); return; }
      setProjects(await res.json());
    } catch { toast({ title: "Ошибка загрузки", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm({ title: "", category: "", image: "", guests: 0, date: "" }); setEditingId(null); };

  const startEdit = (p: Project) => {
    setEditingId(p.id);
    setForm({ title: p.title, category: p.category, image: p.image, guests: p.guests, date: p.date });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async () => {
    if (!form.title.trim() || !form.category.trim()) { toast({ title: "Заполните название и категорию", variant: "destructive" }); return; }
    try {
      if (editingId) {
        await fetch(PORTFOLIO_URL, { method: "PUT", headers, body: JSON.stringify({ id: editingId, ...form }) });
        toast({ title: "Проект обновлён" });
      } else {
        await fetch(PORTFOLIO_URL, { method: "POST", headers, body: JSON.stringify(form) });
        toast({ title: "Проект добавлен" });
      }
      resetForm();
      fetchData();
    } catch { toast({ title: "Ошибка сохранения", variant: "destructive" }); }
  };

  const toggleVisibility = async (p: Project) => {
    try {
      await fetch(PORTFOLIO_URL, { method: "PUT", headers, body: JSON.stringify({ id: p.id, is_visible: !p.is_visible }) });
      fetchData();
    } catch { toast({ title: "Ошибка", variant: "destructive" }); }
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить этот проект?")) return;
    try {
      await fetch(PORTFOLIO_URL + "?id=" + id, { method: "DELETE", headers });
      toast({ title: "Проект удалён" });
      fetchData();
    } catch { toast({ title: "Ошибка удаления", variant: "destructive" }); }
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
          <Input placeholder="Ссылка на изображение" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          <div className="grid md:grid-cols-2 gap-4">
            <Input type="number" placeholder="Кол-во гостей" value={form.guests || ""} onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) || 0 })} />
            <Input placeholder="Дата (напр. Декабрь 2025)" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
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
      ) : projects.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">Проектов пока нет</div>
      ) : (
        <div className="space-y-4">
          {projects.map((p) => (
            <Card key={p.id} className={!p.is_visible ? "opacity-50" : ""}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {p.image && (
                      <img src={p.image} alt={p.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-foreground truncate">{p.title}</div>
                      <div className="text-sm text-muted-foreground">{p.category}</div>
                      <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                        <span><Icon name="Users" size={12} className="inline mr-1" />{p.guests} гостей</span>
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

export default Admin;

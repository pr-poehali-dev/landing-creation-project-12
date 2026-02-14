import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const API_URL = "https://functions.poehali.dev/ce15942a-c5f3-4e40-a6ce-0aca3ead1e01";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [isAuthed, setIsAuthed] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", position: "", quote: "", rating: 5 });
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

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL + "?all=true", { headers });
      if (res.status === 401) {
        setIsAuthed(false);
        toast({ title: "Неверный токен", variant: "destructive" });
        return;
      }
      const data = await res.json();
      setTestimonials(data);
    } catch {
      toast({ title: "Ошибка загрузки", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthed) fetchTestimonials();
  }, [isAuthed]);

  const resetForm = () => {
    setForm({ name: "", position: "", quote: "", rating: 5 });
    setEditingId(null);
  };

  const startEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setForm({ name: t.name, position: t.position, quote: t.quote, rating: t.rating });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async () => {
    if (!form.name.trim() || !form.quote.trim()) {
      toast({ title: "Заполните имя и текст отзыва", variant: "destructive" });
      return;
    }

    try {
      if (editingId) {
        await fetch(API_URL, {
          method: "PUT",
          headers,
          body: JSON.stringify({ id: editingId, ...form }),
        });
        toast({ title: "Отзыв обновлён" });
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers,
          body: JSON.stringify(form),
        });
        toast({ title: "Отзыв добавлен" });
      }
      resetForm();
      fetchTestimonials();
    } catch {
      toast({ title: "Ошибка сохранения", variant: "destructive" });
    }
  };

  const toggleVisibility = async (t: Testimonial) => {
    try {
      await fetch(API_URL, {
        method: "PUT",
        headers,
        body: JSON.stringify({ id: t.id, is_visible: !t.is_visible }),
      });
      fetchTestimonials();
    } catch {
      toast({ title: "Ошибка", variant: "destructive" });
    }
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить этот отзыв?")) return;
    try {
      await fetch(API_URL + "?id=" + id, { method: "DELETE", headers });
      toast({ title: "Отзыв удалён" });
      fetchTestimonials();
    } catch {
      toast({ title: "Ошибка удаления", variant: "destructive" });
    }
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
            <Button className="w-full" onClick={login}>
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Управление отзывами</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.open("/", "_blank")}>
              <Icon name="ExternalLink" size={16} className="mr-1" /> Сайт
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <Icon name="LogOut" size={16} className="mr-1" /> Выход
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingId ? "Редактирование отзыва" : "Новый отзыв"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Имя клиента *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                placeholder="Должность / компания"
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
              />
            </div>
            <Textarea
              placeholder="Текст отзыва *"
              rows={4}
              value={form.quote}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
            />
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Рейтинг:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setForm({ ...form, rating: star })}
                  className="transition-transform hover:scale-110"
                >
                  <Icon
                    name="Star"
                    size={24}
                    className={star <= form.rating ? "fill-accent text-accent" : "text-muted-foreground"}
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button onClick={save}>
                <Icon name={editingId ? "Save" : "Plus"} size={16} className="mr-1" />
                {editingId ? "Сохранить" : "Добавить"}
              </Button>
              {editingId && (
                <Button variant="outline" onClick={resetForm}>
                  Отмена
                </Button>
              )}
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
                      {t.position && (
                        <div className="text-sm text-muted-foreground mb-2">{t.position}</div>
                      )}
                      <p className="text-sm text-foreground/80">"{t.quote}"</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-2" title={t.is_visible ? "Виден на сайте" : "Скрыт"}>
                        <Switch checked={t.is_visible} onCheckedChange={() => toggleVisibility(t)} />
                      </div>
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
      </div>
    </div>
  );
};

export default Admin;

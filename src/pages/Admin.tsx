import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { AUTH_URL, type Tab } from "./admin/constants";
import TestimonialsTab from "./admin/TestimonialsTab";
import PortfolioTab from "./admin/PortfolioTab";

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [isAuthed, setIsAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("testimonials");
  const [loginLoading, setLoginLoading] = useState(false);
  const { toast } = useToast();

  const headers = { "Content-Type": "application/json", "X-Admin-Token": token };

  const handleAuthFail = useCallback(() => {
    localStorage.removeItem("admin_token");
    setIsAuthed(false);
    toast({ title: "Сессия истекла, войдите снова", variant: "destructive" });
  }, [toast]);

  const login = async () => {
    if (!token.trim()) { toast({ title: "Введите пароль", variant: "destructive" }); return; }
    setLoginLoading(true);
    try {
      const res = await fetch(AUTH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Admin-Token": token },
      });
      if (res.status === 401) {
        toast({ title: "Неверный пароль", variant: "destructive" });
        return;
      }
      localStorage.setItem("admin_token", token);
      setIsAuthed(true);
    } catch {
      toast({ title: "Ошибка подключения", variant: "destructive" });
    } finally {
      setLoginLoading(false);
    }
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
            <Button className="w-full" onClick={login} disabled={loginLoading}>
              {loginLoading ? "Проверка..." : "Войти"}
            </Button>
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
          <TestimonialsTab headers={headers} toast={toast} onAuthFail={handleAuthFail} />
        )}
        {activeTab === "portfolio" && (
          <PortfolioTab headers={headers} toast={toast} onAuthFail={handleAuthFail} />
        )}
      </div>
    </div>
  );
};

export default Admin;

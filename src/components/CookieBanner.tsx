import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Icon name="Cookie" size={24} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-foreground flex-1">
          Мы используем cookies для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с нашей{" "}
          <a href="#" className="text-primary underline underline-offset-2 hover:opacity-80">
            политикой конфиденциальности
          </a>
          .
        </p>
        <Button onClick={handleAccept} size="sm" className="shrink-0">
          Принять
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;

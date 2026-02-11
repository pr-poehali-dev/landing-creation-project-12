import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Готовы обсудить ваше мероприятие?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Оставьте заявку, и наш менеджер свяжется с вами в течение часа. Мы ответим на все вопросы, рассчитаем стоимость и предложим оптимальное решение.
            </p>
          </div>

          <Card className="backdrop-blur-sm bg-background/95">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base"
                />
                <Input
                  type="tel"
                  placeholder="Телефон*"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-base"
                />
                <Select onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder="Тип мероприятия" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate">Корпоратив</SelectItem>
                    <SelectItem value="concert">Концерт / Фестиваль</SelectItem>
                    <SelectItem value="wedding">Свадьба / Частное</SelectItem>
                    <SelectItem value="government">Государственное</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Комментарий / Вопрос"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-base"
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <p className="text-center mb-4 font-semibold">Или свяжитесь с нами удобным способом:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="tel:+79089925030" className="flex items-center gap-2 px-4 py-2 border-2 border-primary/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span className="text-sm">+7 (908) 992-50-30</span>
                  </a>
                  <a href="tel:+79147063497" className="flex items-center gap-2 px-4 py-2 border-2 border-primary/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all">
                    <Icon name="PhoneCall" size={18} className="text-primary" />
                    <span className="text-sm">+7 (914) 706-34-97</span>
                  </a>
                  <a href="mailto:ppt@pmvl.ru" className="flex items-center gap-2 px-4 py-2 border-2 border-primary/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all">
                    <Icon name="Mail" size={18} className="text-primary" />
                    <span className="text-sm">ppt@pmvl.ru</span>
                  </a>
                  <a href="https://t.me/protechvl" className="flex items-center gap-2 px-4 py-2 border-2 border-primary/30 rounded-lg hover:border-accent hover:bg-accent/10 transition-all">
                    <Icon name="Send" size={18} className="text-primary" />
                    <span className="text-sm">Telegram</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} className="inline mr-2" />
                г. Владивосток, пр-кт Океанский, 54, оф. 315
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Pacific Protec</div>
              <p className="text-secondary italic mb-4">«Создаем события своими руками»</p>
              <p className="text-sm text-muted-foreground">
                Профессиональное техническое обеспечение мероприятий во Владивостоке и на Дальнем Востоке.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Звуковое оборудование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Световое оборудование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LED-экраны</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сценические конструкции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Шатры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комплексное обеспечение</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="text-primary mt-1" />
                  <a href="tel:+79089925030" className="text-primary hover:text-accent transition-colors">+7 (908) 992-50-30</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="text-primary mt-1" />
                  <a href="tel:+79147063497" className="text-primary hover:text-accent transition-colors">+7 (914) 706-34-97</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={16} className="text-primary mt-1" />
                  <a href="mailto:ppt@pmvl.ru" className="text-primary hover:text-accent transition-colors">ppt@pmvl.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="text-primary mt-1" />
                  <span className="text-muted-foreground">г. Владивосток, пр-кт Океанский, 54, оф. 315</span>
                </li>
              </ul>

              <div className="mt-6">
                <p className="text-sm font-semibold mb-3">Мы в соцсетях:</p>
                <a href="https://t.me/protechvl" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                  <span className="text-sm">Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Pacific Protec. Все права защищены.</p>
            <p>ООО "Пасифик Протек" | ИНН 2543XXXXXX</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      name: "Передержка",
      icon: "🏠",
      price: "От ₽1200/день",
      features: ["Теплая комната", "2 выгула", "Фото в день", "Кормление 2x"]
    },
    {
      name: "Дрессировка",
      icon: "🎓",
      price: "От ₽2500",
      features: ["Занятия", "Коррекция", "Обучение"]
    },
    {
      name: "Груминг",
      icon: "✨",
      price: "От ₽800",
      features: ["Стрижка", "Спа", "Уход"]
    },
    {
      name: "Экзоты",
      icon: "🦎",
      price: "От ₽500",
      features: ["Птицы", "Рептилии", "Грызуны"]
    },
    {
      name: "Люкс",
      icon: "👑",
      price: "От ₽1800",
      features: ["24/7 доступ", "Видеосвязь", "Фотосессии"]
    },
    {
      name: "Консультации",
      icon: "💬",
      price: "От ₽300",
      features: ["WhatsApp", "Советы", "Поддержка"]
    }
  ];

  const pricing = [
    {
      name: "Стандарт",
      price: "₽1200",
      features: ["Комната", "Выгулы", "Фото", "Отчеты"],
      badge: null
    },
    {
      name: "Комфорт+",
      price: "₽1600",
      features: ["Стандарт+", "Занятия", "Видео-отчеты"],
      badge: "ПОПУЛЯРНО"
    },
    {
      name: "Люкс",
      price: "₽1800",
      features: ["24/7 видео", "Доступ кинолога", "Груминг", "Видео"],
      badge: null
    }
  ];

  const why = [
    {
      icon: "🏆",
      title: "Опыт",
      desc: "15+ лет, РКФ, 2000+ питомцев"
    },
    {
      icon: "🔒",
      title: "Безопасность",
      desc: "8 камер, приложение, мониторинг"
    },
    {
      icon: "🏡",
      title: "Комфорт",
      desc: "24°C, кондиционер, просторно"
    },
    {
      icon: "💕",
      title: "Подход",
      desc: "Личная диета, занятия, забота"
    }
  ];

  const stats = [
    { n: "15+", l: "Опыта" },
    { n: "2000+", l: "Питомцев" },
    { n: "98%", l: "Отзывов" },
    { n: "0", l: "Инцидентов" }
  ];

  const reviews = [
    {
      star: 5,
      text: "Лайка счастлива! Видео каждый день. Спасибо!",
      author: "Оксана М.",
      pet: "Ретривер"
    },
    {
      star: 5,
      text: "Мурзик доволен и спокоен. Прекрасно!",
      author: "Иван К.",
      pet: "Кот"
    },
    {
      star: 5,
      text: "Гриша здоров и весел. Лучшая!",
      author: "Елена",
      pet: "Какаду"
    },
    {
      star: 5,
      text: "Щенок слушается! Результат отличный!",
      author: "Денис П.",
      pet: "Боксер"
    },
    {
      star: 5,
      text: "Груминг идеален! Питомец счастлив!",
      author: "Алина Р.",
      pet: "Йорк"
    },
    {
      star: 5,
      text: "Месяц на передержке. Очень доволен!",
      author: "Сергей М.",
      pet: "Овчарка"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.08),transparent_50%)] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/freepik__-__23969.png" 
                alt="В гостях у Маши" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="inline-block">
            <Badge className="text-sm px-6 py-2.5 mb-6 bg-primary/90 hover:bg-primary border-0 shadow-lg">🌿 Натуральная забота</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            Второй дом<br/>для питомца
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
            В гостях у Маши
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {["Видеонаблюдение 24/7", "Кинолог и зоолог", "Теплые комнаты", "Все животные"].map((benefit) => (
              <Badge key={benefit} className="px-5 py-2.5 text-sm font-medium bg-secondary/80 text-secondary-foreground hover:bg-secondary hover:scale-105 transition-all border border-primary/20 shadow-sm">
                {benefit}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 902 052-61-45
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.06),transparent_70%)] -z-10"></div>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">Наши услуги</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Услуги</h2>
          <p className="text-xl text-muted-foreground">Все для вашего питомца</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Card 
              key={service.name} 
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/20 bg-card backdrop-blur-sm hover:border-primary/50 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-foreground">{service.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-secondary/20 -z-10"></div>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Тарифы</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Тарифы</h2>
          <p className="text-xl text-muted-foreground">Выберите подходящий план</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.badge ? 'border-primary/50 shadow-lg scale-105 bg-primary/5' : 'border-primary/20 hover:border-primary/40'}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-0 px-6 py-1.5 text-sm font-bold shadow-md">
                  ⭐ {plan.badge}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-4">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/день</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant={plan.badge ? "default" : "outline"}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему мы</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {why.map((item) => (
            <div key={item.title} className="text-center space-y-4">
              <div className="text-6xl">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.l} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.n}</div>
                <div className="text-lg opacity-90">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.06),transparent_70%)] -z-10"></div>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">Отзывы клиентов</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">Отзывы</h2>
          <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/20 hover:border-primary/40 bg-card backdrop-blur-sm">
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: review.star }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-foreground">
                  "{review.text}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.pet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Контакты</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Свяжитесь с нами</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="Phone" size={24} className="text-primary" />
              <a href="tel:+79020526145" className="hover:text-primary transition-colors">
                +7 902 052-61-45
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="Mail" size={24} className="text-primary" />
              <a href="mailto:mashazoohot@mail.ru" className="hover:text-primary transition-colors">
                mashazoohot@mail.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span>Владивосток</span>
            </div>
          </div>
          <Button size="lg" className="text-lg px-16 py-7 mt-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold">
            Забронировать место
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/95 text-background py-16 relative overflow-hidden border-t-4 border-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/files/freepik__-__23969.png" 
              alt="В гостях у Маши" 
              className="w-16 h-16 object-contain opacity-90"
            />
          </div>
          <p className="text-xl font-bold mb-3">В гостях у Маши</p>
          <p className="text-sm opacity-80 mb-4">Натуральная забота о ваших питомцах</p>
          <div className="h-px w-32 mx-auto bg-primary/40 mb-4"></div>
          <p className="text-xs opacity-70">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
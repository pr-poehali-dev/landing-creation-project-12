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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Второй дом для питомца
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            В гостях у Маши
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["Видеонаблюдение 24/7", "Кинолог и зоолог", "Теплые комнаты", "Все животные"].map((benefit) => (
              <Badge key={benefit} variant="secondary" className="px-4 py-2 text-sm">
                {benefit}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 902 052-61-45
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground">Все для вашего питомца</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Card 
              key={service.name} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.name}</CardTitle>
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
      <section className="container mx-auto px-4 py-20 bg-secondary/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
          <p className="text-xl text-muted-foreground">Выберите подходящий план</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.badge ? 'border-primary border-2 shadow-xl scale-105' : ''}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
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
      <section className="bg-primary text-primary-foreground py-20">
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
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы</h2>
          <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
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
      <section className="container mx-auto px-4 py-20 bg-secondary/20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
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
          <Button size="lg" className="text-lg px-12 mt-8">
            Забронировать место
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">В гостях у Маши</p>
          <p className="text-sm opacity-80">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

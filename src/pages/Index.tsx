import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
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

  const services = [
    {
      id: "sound",
      title: "Звуковое оборудование",
      description: "Кристально чистый звук для 30-5000 гостей. Профессиональные акустические системы, микшерные пульты, микрофоны.",
      icon: "Volume2",
      image: "https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/e78e667a-faba-436a-bfbc-b42c9233fd6d.jpg",
    },
    {
      id: "light",
      title: "Световое оборудование",
      description: "LED-головы, прожекторы, лазерные установки. Создаем атмосферу и wow-эффект световым дизайном любой сложности.",
      icon: "Lightbulb",
      image: "https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2807033e-3a4d-4ec5-8c43-2cc343740d1c.jpg",
    },
    {
      id: "led",
      title: "LED-экраны",
      description: "Светодиодные экраны высокого разрешения для indoor и outdoor. Яркая картинка в любых условиях.",
      icon: "Monitor",
      image: "https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/fd7fce9b-ed2e-4d90-bda0-1e9acdd60772.jpg",
    },
    {
      id: "stage",
      title: "Сценические конструкции",
      description: "Монтаж сцен, подиумов, конструкций на фермах. Проектирование с учетом специфики мероприятия. Безопасность и эстетика.",
      icon: "Boxes",
      image: "https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/fd7fce9b-ed2e-4d90-bda0-1e9acdd60772.jpg",
    },
    {
      id: "tents",
      title: "Шатры",
      description: "Установка шатров для выездных мероприятий. Защита от погоды и создание комфортного пространства.",
      icon: "Home",
      image: "https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/fd7fce9b-ed2e-4d90-bda0-1e9acdd60772.jpg",
    },
    {
      id: "turnkey",
      title: "Комплексное обеспечение",
      description: "Полный технический комплекс «под ключ»: от разработки концепции до постпродакшена. Один подрядчик — полная ответственность.",
      icon: "Sparkles",
      image: "https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/fd7fce9b-ed2e-4d90-bda0-1e9acdd60772.jpg",
      highlight: true,
    },
  ];

  const statistics = [
    { icon: "CalendarCheck", number: "200+", text: "мероприятий за 5 лет" },
    { icon: "Users", number: "10 000+", text: "участников на крупнейшем проекте" },
    { icon: "Headset", number: "24/7", text: "техподдержка на мероприятии" },
    { icon: "Star", number: "100%", text: "положительных отзывов" },
  ];

  const targetAudience = [
    {
      icon: "Briefcase",
      title: "Корпоративные клиенты",
      description: "Новогодние корпоративы, конференции, презентации, тимбилдинги, деловые форумы. Гарантируем техническую безупречность и современные решения.",
      example: "Примеры: Новогодний корпоратив «Роснефть», Бизнес-форум «Дальний Восток»",
    },
    {
      icon: "Landmark",
      title: "Государственные и муниципальные органы",
      description: "Парады, городские праздники, официальные церемонии, выставки. Опыт работы с высокими стандартами безопасности и надежности.",
      example: "Реализовано: Техническое обеспечение Парада Победы во Владивостоке",
      highlighted: true,
    },
    {
      icon: "Music",
      title: "Концерты и фестивали",
      description: "Музыкальные концерты, фестивали, шоу-программы, DJ-party. Мощные системы и профессиональные специалисты для зрелищных событий.",
      example: "Примеры: Летний фестиваль V-ROX, Концерт на набережной Спортивная Гавань",
    },
    {
      icon: "Heart",
      title: "Частные мероприятия",
      description: "Свадьбы, юбилеи, дни рождения, выпускные. Создаем праздничную атмосферу с профессиональным звуком и светом.",
      example: "",
    },
  ];

  const advantages = [
    { emoji: "🎯", title: "Индивидуальный подход", description: "Выезд специалиста на площадку, оценка акустики и освещения, разработка технического решения под ваши задачи — бесплатно." },
    { emoji: "🏆", title: "Опыт на сложных проектах", description: "Более 200 мероприятий за последние 5 лет. От камерных корпоративов на 50 человек до массовых городских праздников на 10 000+ участников." },
    { emoji: "🎬", title: "Команда профессионалов", description: "Звукорежиссеры, светорежиссеры, видеоинженеры с большим опытом. Круглосуточная техническая поддержка на мероприятии." },
    { emoji: "📦", title: "Собственный парк оборудования", description: "Только современная техника ведущих брендов. Регулярное обновление и обслуживание." },
    { emoji: "⚡", title: "Быстрая реакция", description: "Доставка по Владивостоку в день заказа. Экстренные выезды для срочных мероприятий." },
    { emoji: "💰", title: "Прозрачное ценообразование", description: "Детальная смета с указанием каждой позиции. Без скрытых доплат и сюрпризов." },
    { emoji: "🛡️", title: "Гарантии и надежность", description: "Дублирующее оборудование на критически важных мероприятиях. Договор с четкими обязательствами." },
    { emoji: "🌏", title: "Работаем по всему Дальнему Востоку", description: "Владивосток, Артём, Находка, Уссурийск, Партизанск. Выездные мероприятия в отдаленные районы края." },
  ];

  const processSteps = [
    { number: 1, icon: "Phone", title: "Заявка", description: "Вы оставляете заявку на сайте, звоните или пишете в мессенджеры. Мы отвечаем в течение часа в рабочее время." },
    { number: 2, icon: "UserCheck", title: "Консультация", description: "Наш менеджер уточняет детали: дата, место, формат, количество гостей, пожелания. Предлагаем оптимальное решение." },
    { number: 3, icon: "MapPin", title: "Выезд и расчет", description: "Технический специалист выезжает на площадку, оценивает условия, разрабатывает схему. Вы получаете детальную смету. Бесплатно." },
    { number: 4, icon: "FileText", title: "Договор и подготовка", description: "Заключаем договор, согласовываем ТЗ. Готовим и тестируем оборудование перед выездом." },
    { number: 5, icon: "CheckCircle", title: "Монтаж и проведение", description: "Привозим, монтируем, настраиваем оборудование. Наши специалисты работают на мероприятии от начала до конца." },
  ];

  const testimonials = [
    {
      rating: 5,
      quote: "Сотрудничаем с Pacific Protech уже второй год. Обеспечивали наш бизнес-форум на 500 участников — всё прошло безупречно. Профессиональная команда, современное оборудование, пунктуальность. Рекомендую!",
      name: "Алексей Морозов",
      position: "Организатор мероприятий, ООО \"Дальневосточные конференции\"",
    },
    {
      rating: 5,
      quote: "Заказывали технику для корпоратива. Особенно понравился индивидуальный подход: выехали заранее, всё спланировали, провели репетицию. На мероприятии работали два специалиста — звук и свет были на высоте. Спасибо за праздник!",
      name: "Екатерина Соколова",
      position: "Event-менеджер",
    },
    {
      rating: 5,
      quote: "Арендовали LED-экран и звуковую систему для летней вечеринки. Всё привезли вовремя, быстро установили, настроили. Цены адекватные, качество отличное. Будем обращаться ещё!",
      name: "Дмитрий Волков",
      position: "Директор кафе \"Маяк\"",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Pacific Protech</div>
            <div className="flex gap-6 items-center">
              <a href="tel:+79089925030" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <Icon name="Phone" size={18} />
                <span className="hidden md:inline">+7 (908) 992-50-30</span>
              </a>
              <a href="mailto:ppt@pmvl.ru" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <Icon name="Mail" size={18} />
                <span className="hidden md:inline">ppt@pmvl.ru</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-background via-background to-card relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/fd7fce9b-ed2e-4d90-bda0-1e9acdd60772.jpg')] bg-cover bg-center opacity-10"></div>
          
          <div className="container mx-auto text-center relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Техническое обеспечение мероприятий под ключ
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 animate-fade-in">
              Владивосток, Дальний Восток | Звук, свет, LED-экраны, сцены
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in">
              <Button size="lg" className="text-lg bg-accent hover:bg-accent/90">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить расчет
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Портфолио
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span>Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span>Владивосток и Дальний Восток</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, idx) => (
              <Card key={idx} className="stat-card text-center border-primary/20 hover:border-primary/50 transition-all hover:-translate-y-2">
                <CardContent className="pt-6">
                  <Icon name={stat.icon} size={48} className="mx-auto mb-4 text-primary" strokeWidth={2} />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Что мы предлагаем</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pacific Protech — ваш технический партнер для мероприятий любого масштаба. Мы предоставляем полный спектр услуг: от аренды современного оборудования до комплексного технического обеспечения с профессиональной командой специалистов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className={`service-card overflow-hidden hover:-translate-y-2 transition-all ${service.highlight ? 'border-accent' : ''}`}>
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">
              Мы обеспечиваем мероприятия любого формата
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, idx) => (
              <Card key={idx} className={`border-primary/20 ${audience.highlighted ? 'border-accent' : ''}`}>
                <CardHeader>
                  <Icon name={audience.icon} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                  <CardDescription className="text-base">{audience.description}</CardDescription>
                  {audience.example && (
                    <p className={`text-sm italic mt-4 ${audience.highlighted ? 'text-accent font-semibold' : 'text-secondary'}`}>
                      {audience.example}
                    </p>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Почему мы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="text-5xl mb-4">{adv.emoji}</div>
                  <CardTitle className="text-lg">{adv.title}</CardTitle>
                  <CardDescription className="text-sm">{adv.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">
              Процесс работы — просто и понятно
            </h2>
          </div>

          <div className="hidden md:flex justify-between items-start mb-8 relative">
            <div className="absolute top-12 left-0 right-0 h-1 bg-primary" style={{ width: '80%', margin: '0 auto' }}></div>
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center max-w-[200px] relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <Icon name={step.icon} size={40} className="text-primary mb-4" strokeWidth={2} />
                <h3 className="font-semibold text-lg mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-6">
            {processSteps.map((step) => (
              <Card key={step.number} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Начать работу <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Что говорят наши клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="testimonial-card border-primary/20">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.quote}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Ответы на частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ За какой срок нужно бронировать оборудование?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендуем бронировать за 2-4 недели до мероприятия, особенно в пиковые сезоны (июль-октябрь). Однако мы готовы принять срочный заказ — позвоните, и мы найдем решение.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ Входит ли доставка и монтаж в стоимость?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доставка рассчитывается индивидуально в зависимости от количества оборудования и удаленности площадки. Монтаж, настройка и демонтаж включены в стоимость аренды при заказе «под ключ».
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ Работают ли ваши специалисты на мероприятии?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, при заказе комплексного обеспечения на мероприятии работает наша команда: звукорежиссер, светорежиссер, техники. Они управляют оборудованием, оперативно реагируют на изменения программы и гарантируют бесперебойную работу.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ Что делать, если оборудование сломается во время мероприятия?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы регулярно тестируем и обслуживаем всю технику, поэтому сбои крайне редки. На критически важных мероприятиях мы привозим дублирующее оборудование. Если всё же произойдет форс-мажор, наши специалисты оперативно заменят технику.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ Можно ли отменить или перенести заказ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, возможно. Если отмена происходит за 7+ дней до мероприятия, мы возвращаем предоплату полностью. При отмене за 3-6 дней — 50% предоплаты. Менее чем за 3 дня — предоплата не возвращается (детали в договоре).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ Работаете ли вы за пределами Владивостока?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы выезжаем в любую точку Дальнего Востока: Артём, Находка, Уссурийск, Партизанск и отдаленные районы. Стоимость доставки рассчитывается индивидуально в зависимости от расстояния.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="border border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                ❓ Какие способы оплаты вы принимаете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Работаем по безналичному расчету. Для юридических лиц — перевод по счету с НДС 5%. Стандартная схема: 50% предоплата, 50% после мероприятия.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-xl mb-4">Не нашли ответа?</p>
            <Button className="bg-accent hover:bg-accent/90">
              Задать вопрос <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
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

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Pacific Protech</div>
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
            <p>© 2026 Pacific Protech. Все права защищены.</p>
            <p>ООО "Пасифик Протек" | ИНН 2543XXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
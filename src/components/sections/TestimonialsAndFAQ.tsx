import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TestimonialsAndFAQ = () => {
  const testimonials = [
    {
      rating: 5,
      quote: "Сотрудничаем с Пасифик Протэк уже второй год. Обеспечивали наш бизнес-форум на 500 участников — всё прошло безупречно. Профессиональная команда, современное оборудование, пунктуальность. Рекомендую!",
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
    <>
      <section id="testimonials" className="py-20 px-4">
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
                Доставка рассчитывается индивидуально в зависимости от количества оборудования и удаленности площадки. Монтаж, настройка и демонтаж включены в стоимость аренды.
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
    </>
  );
};

export default TestimonialsAndFAQ;
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroHeader = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/bucket/6da9127b-f4f0-49d3-aad8-4bb3c81734cb.jpg" 
              alt="Pacific Protech" 
              className="h-12 w-auto"
            />
          </div>
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

      <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-background via-background to-card relative overflow-hidden">
        
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
  );
};

export default HeroHeader;
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Корпоративы', 'Государственные мероприятия', 'Фестивали', 'Конференции'];

  const projects = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Корпоратив Росбанк',
      category: 'Корпоративы',
      guests: 150,
      date: 'Декабрь 2025'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'День города Владивостока',
      category: 'Государственные мероприятия',
      guests: 5000,
      date: 'Июль 2025'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Конференция IT-компании',
      category: 'Конференции',
      guests: 200,
      date: 'Октябрь 2025'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Юбилей компании ВостокСтрой',
      category: 'Корпоративы',
      guests: 120,
      date: 'Сентябрь 2025'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Музыкальный фестиваль V-ROX',
      category: 'Фестивали',
      guests: 15000,
      date: 'Июль 2025'
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Новогодний корпоратив Примгаз',
      category: 'Корпоративы',
      guests: 180,
      date: 'Декабрь 2024'
    },
    {
      id: 7,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Празднование Дня России',
      category: 'Государственные мероприятия',
      guests: 3000,
      date: 'Июнь 2025'
    },
    {
      id: 8,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Выездной фуршет Находка',
      category: 'Выездное обслуживание',
      guests: 70,
      date: 'Май 2025'
    },
    {
      id: 9,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Бизнес-завтрак для партнеров',
      category: 'Конференции',
      guests: 40,
      date: 'Март 2025'
    },
    {
      id: 10,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Презентация нового продукта',
      category: 'Корпоративы',
      guests: 90,
      date: 'Апрель 2025'
    },
    {
      id: 11,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Фестиваль уличной еды',
      category: 'Фестивали',
      guests: 8000,
      date: 'Июнь 2025'
    },
    {
      id: 12,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'День молодежи Приморского края',
      category: 'Государственные мероприятия',
      guests: 2500,
      date: 'Июнь 2025'
    },
    {
      id: 13,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Тимбилдинг на природе',
      category: 'Корпоративы',
      guests: 75,
      date: 'Июнь 2025'
    },
    {
      id: 14,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Выездной фуршет Артём',
      category: 'Выездное обслуживание',
      guests: 85,
      date: 'Сентябрь 2025'
    },
    {
      id: 15,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Конференция медиков',
      category: 'Конференции',
      guests: 250,
      date: 'Ноябрь 2024'
    },
    {
      id: 16,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Фестиваль красок Холи',
      category: 'Фестивали',
      guests: 5000,
      date: 'Май 2025'
    },
    {
      id: 17,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Джазовый фестиваль на набережной',
      category: 'Фестивали',
      guests: 3000,
      date: 'Август 2025'
    },
    {
      id: 18,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Корпоратив банка Приморье',
      category: 'Корпоративы',
      guests: 140,
      date: 'Декабрь 2024'
    },
    {
      id: 19,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Семинар для предпринимателей',
      category: 'Конференции',
      guests: 95,
      date: 'Октябрь 2025'
    },
    {
      id: 20,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Выездной банкет Уссурийск',
      category: 'Выездное обслуживание',
      guests: 65,
      date: 'Апрель 2025'
    },
    {
      id: 21,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'День края и ВЭФ',
      category: 'Государственные мероприятия',
      guests: 8000,
      date: 'Сентябрь 2025'
    },
    {
      id: 22,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Юбилей компании ДальТранс',
      category: 'Корпоративы',
      guests: 160,
      date: 'Июль 2025'
    },
    {
      id: 23,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Фестиваль света и огня',
      category: 'Фестивали',
      guests: 12000,
      date: 'Декабрь 2024'
    },
    {
      id: 24,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Форум застройщиков',
      category: 'Конференции',
      guests: 220,
      date: 'Ноябрь 2025'
    },
    {
      id: 25,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Выездное обслуживание Партизанск',
      category: 'Выездное обслуживание',
      guests: 55,
      date: 'Июнь 2025'
    },
    {
      id: 26,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'День Победы в центре города',
      category: 'Государственные мероприятия',
      guests: 10000,
      date: 'Май 2025'
    },
    {
      id: 27,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Корпоратив МТС',
      category: 'Корпоративы',
      guests: 170,
      date: 'Декабрь 2025'
    },
    {
      id: 28,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/242d0a50-dccc-4d66-99eb-15241c6df5a6.jpg',
      title: 'Фестиваль вина и гастрономии',
      category: 'Фестивали',
      guests: 6000,
      date: 'Сентябрь 2025'
    },
    {
      id: 29,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/d4e877f9-22f2-4716-a3fa-4b369fdea031.jpg',
      title: 'Бизнес-конференция ДВФУ',
      category: 'Конференции',
      guests: 300,
      date: 'Сентябрь 2025'
    },
    {
      id: 30,
      image: 'https://cdn.poehali.dev/projects/dce3c669-40cb-458b-84d5-2fd7d036caae/files/2f6a90e8-ac4c-4c11-8cf9-ea92341b2d23.jpg',
      title: 'Выездной фуршет на даче',
      category: 'Выездное обслуживание',
      guests: 50,
      date: 'Июль 2025'
    }
  ];

  const filteredProjects = selectedCategory === 'Все'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 30 успешно реализованных мероприятий по всему Дальнему Востоку
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg scale-105'
                  : 'bg-secondary/50 hover:bg-secondary text-secondary-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{project.guests} гостей</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Проектов в этой категории пока нет</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
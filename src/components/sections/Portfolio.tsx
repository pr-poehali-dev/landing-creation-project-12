import { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const PORTFOLIO_URL = "https://functions.poehali.dev/e7a04abf-c814-49ed-aeaa-9c3eab9257e7";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images: string[];
  guests: number;
  date: string;
}

interface LightboxProps {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ project, initialIndex, onClose }: LightboxProps) {
  const images = project.images?.length ? project.images : (project.image ? [project.image] : []);
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
        >
          <Icon name="X" size={28} />
        </button>

        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
          <img
            src={images[current]}
            alt={project.title}
            className="w-full h-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-4 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex items-center gap-4 text-sm text-white/70 mt-1">
            <span className="flex items-center gap-1"><Icon name="Calendar" size={14} />{project.date}</span>
            <span className="flex items-center gap-1"><Icon name="Tag" size={14} />{project.category}</span>
            {images.length > 1 && <span className="text-white/50">{current + 1} / {images.length}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(['Все']);
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  useEffect(() => {
    fetch(PORTFOLIO_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
          const cats = ['Все', ...Array.from(new Set(data.map((p: Project) => p.category)))];
          setCategories(cats as string[]);
        }
      })
      .catch(() => {});
  }, []);

  const filteredProjects = selectedCategory === 'Все'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getProjectImages = (p: Project) => p.images?.length ? p.images : (p.image ? [p.image] : []);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более {projects.length} успешно реализованных мероприятий по всему Дальнему Востоку
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
          {filteredProjects.map((project) => {
            const images = getProjectImages(project);
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => images.length > 0 && setLightbox({ project, index: 0 })}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={images[0] || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {images.length > 1 && (
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Images" size={12} />
                    {images.length}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
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
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Проектов в этой категории пока нет</p>
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          project={lightbox.project}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;

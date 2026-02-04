import HeroHeader from "@/components/sections/HeroHeader";
import MainSections from "@/components/sections/MainSections";
import TestimonialsAndFAQ from "@/components/sections/TestimonialsAndFAQ";
import ContactFooter from "@/components/sections/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <MainSections />
      <TestimonialsAndFAQ />
      <ContactFooter />
    </div>
  );
};

export default Index;

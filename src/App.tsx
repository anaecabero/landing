import { DIProvider } from './di/DIContext';
import { TopUrgencyBar } from './presentation/sections/TopUrgencyBar';
import { HeroSection } from './presentation/sections/HeroSection';
import { SocialProofStats } from './presentation/sections/SocialProofStats';
import { OpportunitySection } from './presentation/sections/OpportunitySection';
import { CurriculumSection } from './presentation/sections/CurriculumSection';
import { ProjectsGallerySection } from './presentation/sections/ProjectsGallerySection';
import { BonusesSection } from './presentation/sections/BonusesSection';
import { PricingSection } from './presentation/sections/PricingSection';
import { InstructorSection } from './presentation/sections/InstructorSection';
import { TestimonialsSection } from './presentation/sections/TestimonialsSection';
import { GuaranteeSection } from './presentation/sections/GuaranteeSection';
import { FaqSection } from './presentation/sections/FaqSection';
import { FooterSection } from './presentation/sections/FooterSection';
import { StickyUrgencyBar } from './presentation/sections/StickyUrgencyBar';

export function App() {
  return (
    <DIProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* 0. Barra Superior de Urgencia */}
        <TopUrgencyBar />

        {/* 1. Hero Section con VSL Placeholder y Botones Duales de Conversión */}
        <HeroSection />

        {/* 2. Estadísticas de Confianza y Prueba Social */}
        <SocialProofStats />

        {/* 3. La Oportunidad y Transformación */}
        <OpportunitySection />

        {/* 4. Plan de Estudios (+60 Clases) y Lista de Proveedores */}
        <CurriculumSection />

        {/* 5. Galería de Proyectos Creados */}
        <ProjectsGallerySection />

        {/* 6. 10 Súper Bonos Gratuitos (+$365 USD gratis hoy) */}
        <BonusesSection />

        {/* 7. Caja de Oferta Irresistible (Pricing Box) */}
        <PricingSection />

        {/* 8. Acerca de la Instructora y Certificado Oficial */}
        <InstructorSection />

        {/* 9. Testimonios Reales de Alumnas (Capturas WhatsApp) */}
        <TestimonialsSection />

        {/* 10. Garantía Incondicional de 7 Días (Riesgo Cero Hotmart) */}
        <GuaranteeSection />

        {/* 11. Preguntas Frecuentes (Acordeón) */}
        <FaqSection />

        {/* 12. Footer Legal con Descargos de Meta y Copyright */}
        <FooterSection />

        {/* Barra Flotante Inferior de Urgencia */}
        <StickyUrgencyBar />
      </div>
    </DIProvider>
  );
}

export default App;

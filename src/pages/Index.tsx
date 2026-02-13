import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { Features } from "@/components/sections/Features";
import { Audience } from "@/components/sections/Audience";
import { UseCases } from "@/components/sections/UseCases";
import { Administration } from "@/components/sections/Administration";
import { RGPD } from "@/components/sections/RGPD";
import { Deployment } from "@/components/sections/Deployment";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Pricing } from "@/components/sections/Pricing";
import { JobiBoxTruck } from "@/components/sections/JobiBoxTruck";
import { Demo } from "@/components/sections/Demo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Features />
        
        <Administration />
        <UseCases />
        <BeforeAfter />
        <Deployment />
        <Pricing />
        <JobiBoxTruck />
        <RGPD />
        <Demo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

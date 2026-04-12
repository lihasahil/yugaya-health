import Header from "./header";
import ApproachSection from "./sections/approach";
import FocusSection from "./sections/focus";
import HeroSection from "./sections/hero";
import MissingLayerSection from "./sections/matters";
import PhilosophySection from "./sections/philosophy";
import PlatformSection from "./sections/platform";
import ProductsSection from "./sections/products";
import SupportSection from "./sections/support";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <FocusSection />
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/approach-platform.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center 60vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ApproachSection />
        <PlatformSection />
        <ProductsSection />
      </div>
      <MissingLayerSection />
      <SupportSection />
      <PhilosophySection />
    </>
  );
}

export default LandingPage;

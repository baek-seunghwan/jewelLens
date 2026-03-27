import { HeroSlider } from "../components/HeroSlider";
import { HowItWorks } from "../components/HowItWorks";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Locations } from "../components/Locations";
import { PrismIntro } from "../components/PrismIntro";
import { TrustStats } from "../components/TrustStats";
import { AppDownload } from "../components/AppDownload";

export function HomePage() {
  return (
    <>
      <PrismIntro />
      <HeroSlider />
      <TrustStats />
      <HowItWorks />
      <FeaturedProducts />
      <Locations />
      <AppDownload />
    </>
  );
}

import { HeroSlider } from "../components/HeroSlider";
import { HowItWorks } from "../components/HowItWorks";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Locations } from "../components/Locations";
import { PrismIntro } from "../components/PrismIntro";

export function HomePage() {
  return (
    <>
      <PrismIntro />
      <HeroSlider />
      <HowItWorks />
      <FeaturedProducts />
      <Locations />
    </>
  );
}

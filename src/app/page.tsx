import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <FeaturedWork />
      <AboutTeaser />
      <CtaBanner />
    </>
  );
}

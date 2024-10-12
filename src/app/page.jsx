import Noise from "@/components/Contact/Noise";
import Hero from "@/components/Hero/Hero";

import { SlideTabsExample } from "@/components/Navbar/Navbar";
import Slider from "@/components/SliderNext/SliderMain";

export default function Home() {
  return (
    <div>
      <SlideTabsExample />
      <Hero />
      <Slider />
      <Noise />
    </div>
  );
}

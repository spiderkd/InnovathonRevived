import Noise from "@/components/Contact/Noise";
import Hero from "@/components/Hero/Hero";

import { SlideTabsExample } from "@/components/Navbar/Navbar";
import Slider from "@/components/SliderNext/SliderMain";
import { TimelineDemo } from "@/components/TimelineMain/TimelineMain";

export default function Home() {
	return (
		<div>
			<SlideTabsExample />
			<Hero />
			<TimelineDemo />
			<Slider />
			<Noise />
		</div>
	);
}

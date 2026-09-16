import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <SelectedProjects />
      <Process />
      <WhyUs />
      <About />
      <ContactSection />
    </>
  );
}

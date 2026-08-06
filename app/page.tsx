import { Hero } from '@/components/sections/Hero';
import { ProductSnapshot } from '@/components/sections/ProductSnapshot';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { HowIThink } from '@/components/sections/HowIThink';
import { Experience } from '@/components/sections/Experience';
import { CurrentlyExploring } from '@/components/sections/CurrentlyExploring';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSnapshot />
      <SelectedWork />
      <HowIThink />
      <Experience />
      <CurrentlyExploring />
      <About />
      <Contact />
    </>
  );
}

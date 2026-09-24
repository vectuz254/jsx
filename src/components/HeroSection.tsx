import React from 'react';
import FadeIn from './FadeIn.tsx';
import Magnet from './Magnet.tsx';
import ContactButton from './ContactButton.tsx';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-between bg-[#0C0C0C] select-none"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-20">
        <ul className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] list-none">
          <li>
            <a
              href="#about"
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-[#D7E2EA] no-underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-[#D7E2EA] no-underline"
            >
              Price
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-[#D7E2EA] no-underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-[#D7E2EA] no-underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="overflow-hidden w-full relative z-0 flex items-center justify-center">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex justify-center">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack - 3D Creator"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
              draggable={false}
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20 relative">
        {/* Left */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;

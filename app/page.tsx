'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Megaphone,
  PenTool,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomeHero } from '@/components/landing/home-hero';
import {
  FaqSection,
  NewsletterCtaSection,
  PricingSection,
  ProcessSection,
  SiteFooter,
  TestimonialsSection,
  WorkShowcaseSection,
} from '@/components/landing/landing-sections';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Web Development',
    desc: 'Bespoke sites that merge innovation with craft — fast, accessible, and built to convert.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    icon: Layers3,
    accent: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    id: '02',
    title: 'Marketing',
    desc: 'Funnels, content, and campaigns tuned to lift qualified leads and trim acquisition cost.',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=80',
    icon: Megaphone,
    accent: 'from-fuchsia-500/20 to-fuchsia-500/0',
  },
  {
    id: '03',
    title: 'Brand Identity',
    desc: 'Voice, visuals, and systems so every touchpoint feels cohesive, premium, and scalable.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=80',
    icon: PenTool,
    accent: 'from-amber-500/20 to-amber-500/0',
  },
  {
    id: '04',
    title: 'Software Development',
    desc: 'Custom platforms from architecture to deployment — maintainable, secure, and built to scale.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80',
    icon: Code2,
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
];

function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || cards.length < 2) return;

    const ctx = gsap.context(() => {
      const totalCards = cards.length;

      cards.forEach((card, i) => {
        if (i === 0) return;
        gsap.set(card, { yPercent: 100 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalCards * 80}%`,
          pin: true,
          scrub: 0.4,
        },
      });

      for (let i = 1; i < totalCards; i++) {
        tl.to(
          cards[i],
          { yPercent: 0, duration: 1, ease: 'power1.inOut' },
          (i - 1) * 1.1
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative z-10 flex h-screen min-h-0 flex-col overflow-hidden bg-black"
    >
      <div className="shrink-0 px-6 pt-16 text-center md:pt-20">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
          Our Services
        </p>
        <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl">
          What we bring to the table
        </h2>
        {/* <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400 md:text-base">
          A proven methodology that delivers results consistently across every
          project.
        </p> */}
      </div>

      <div className="relative mx-auto mt-4 min-h-0 w-full max-w-6xl flex-1 overflow-hidden px-6 pb-4 md:mt-8 md:pb-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute inset-x-0 bottom-0 top-0 w-full max-w-full overflow-hidden will-change-transform"
              style={{ zIndex: 10 + index }}
            >
              <article className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-zinc-950 shadow-[0_8px_60px_-12px_rgba(0,0,0,0.7)]">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60`}
                />

                <div className="relative grid min-h-0 min-w-0 flex-1 grid-cols-1 items-stretch gap-0 lg:grid-cols-[1.05fr_1fr]">
                  <div className="flex min-h-0 min-w-0 flex-col justify-between gap-3 overflow-hidden p-5 md:gap-4 md:p-8 lg:p-10">
                    <div className="min-w-0">
                      <div className="mb-3 flex items-center justify-between gap-3 md:mb-5">
                        <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[11px] tracking-wider text-zinc-300 md:px-4 md:py-1.5">
                          Service {service.id}
                        </span>
                        <span className="select-none text-[3.25rem] font-bold leading-none text-white/[0.04] sm:text-[4.5rem] md:text-[6rem]">
                          {service.id}
                        </span>
                      </div>

                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] md:mb-4 md:h-11 md:w-11">
                        <Icon className="h-4 w-4 text-indigo-200 md:h-5 md:w-5" />
                      </div>

                      <h3 className="mb-1.5 text-lg font-semibold leading-tight text-white md:mb-2 md:text-3xl lg:text-4xl">
                        {service.title}
                      </h3>
                      <p className="max-w-md text-[13px] leading-snug text-zinc-400 md:text-[15px] md:leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1 md:pt-2">
                      <Button
                        variant="outline"
                        className="group rounded-full border-white/15 bg-white/[0.03] px-6 text-zinc-200 transition-all hover:border-white/30 hover:bg-white/[0.06]"
                      >
                        Explore Service
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Button>
                    </div>
                  </div>

                  <div className="relative hidden min-h-0 lg:block">
                    <div className="flex h-full min-h-[12rem] flex-col p-4 md:p-6">
                      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.2rem] border border-white/[0.06] bg-white/[0.02]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={1400}
                          height={900}
                          className="h-full min-h-[12rem] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />

      <ServicesSection />

      <ProcessSection />
      <WorkShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
      <NewsletterCtaSection />
      <FaqSection />
      <SiteFooter />
    </>
  );
}

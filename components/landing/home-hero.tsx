'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Compass,
  Menu,
  Play,
  Sparkles,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Spotlight } from '@/components/ui/spotlight';

const navLinks = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['Process', '#process'],
  ['Pricing', '#pricing'],
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' as const },
  },
};

const shuffle = <T,>(array: T[]) => {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  },
] as const;

const generateSquares = () => {
  return shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="h-full w-full rounded-md bg-zinc-900/30"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid h-[400px] grid-cols-3 grid-rows-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-1 shadow-2xl shadow-white/5">
      {squares}
    </div>
  );
};

export function HomeHero() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.02]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <Spotlight className="-top-32 left-0 md:left-52 md:-top-24" fill="white" />
      <motion.div
        aria-hidden
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-white/8 blur-[90px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-16 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]"
      />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 py-6">
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex py-2 backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-black/45"
            aria-label="Noctra Studio — back to top"
          >

            <p className="text-sm font-medium tracking-[0.12em] text-zinc-100 uppercase">
              Noctra Studio.
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="hidden rounded-full border border-white/10 bg-black/30 px-1 py-1 backdrop-blur-xl md:block"
          >
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map(([item, href], index) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      href={href}
                      className="group/navitem relative block rounded-full px-5 py-2 text-xs tracking-wide text-zinc-300 transition-colors hover:text-white"
                    >
                      <span>{item}</span>
                      {index === 0 && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        />
                      )}
                      <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent transition-transform duration-300 group-hover/navitem:scale-x-100" />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Button
              asChild
              className="hidden h-9 rounded-full bg-white text-black hover:bg-zinc-200 md:inline-flex"
            >
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full border-white/20 bg-black/35 text-zinc-200 hover:bg-white/10 md:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-24 pb-20 pt-28 lg:grid-cols-2 lg:pb-28 lg:pt-36">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 py-2 text-[10px] uppercase tracking-[0.18em] text-zinc-200"
          >
            Premium Growth Agency
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-xl font-semibold leading-[1.05] text-transparent sm:text-2xl md:text-3xl xl:text-5xl"
          >
            We design dark, bold digital experiences.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-[11px] leading-relaxed text-zinc-300 md:text-base"
          >
            Launch strategy, branding, and high-performance websites with a
            modern aesthetic.
          </motion.p>

          {/* Buttons Section */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {/* Minimal & High-Contrast Primary Button */}
            <Button className="group h-12 rounded-full bg-white px-8 text-black transition-all hover:bg-zinc-200 hover:scale-[1.02]">
              <span className="flex items-center text-sm font-semibold">
                Start Project
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Button>

            {/* Sleek Ghost Secondary Button */}
            <Button
              variant="ghost"
              className="group relative h-12 px-2 text-zinc-400 transition-colors hover:bg-transparent hover:text-white"
            >
              <Play className="mr-2 h-4 w-4 fill-transparent transition-colors group-hover:fill-white" />
              <span className="relative text-sm font-medium">
                Watch Reel
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>
          </motion.div>

          {/* Stats Section - Boxless & Typography Driven */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex max-w-xl flex-wrap items-center gap-x-10 gap-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col transition-all"
            >
              <p className="text-3xl font-light tracking-tight text-white">
                150 <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">+</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Projects
              </p>
            </motion.div>

            {/* Subtle Vertical Divider */}
            <div className="hidden h-12 w-[1px] bg-white/10 sm:block"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col transition-all"
            >
              <p className="text-3xl font-light tracking-tight text-white">
                98<span className="text-zinc-600 transition-colors group-hover:text-zinc-400">%</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Retention
              </p>
            </motion.div>

            {/* Subtle Vertical Divider */}
            <div className="hidden h-12 w-[1px] bg-white/10 sm:block"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col transition-all"
            >
              <p className="text-3xl font-light tracking-tight text-white">
                12<span className="text-zinc-600 transition-colors group-hover:text-zinc-400">y</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Expertise
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <ShuffleGrid />
        </motion.div>
      </section>
    </div>
  );
}

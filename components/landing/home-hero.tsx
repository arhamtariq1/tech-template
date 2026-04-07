'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowUpRight,
  BarChart3,
  Compass,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

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

export function HomeHero() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.02]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_55%)]" />
      <Spotlight className="-top-32 left-0 md:left-52 md:-top-24" fill="white" />
      <motion.div
        aria-hidden
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-[90px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-16 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]"
      />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-black/45"
            aria-label="Noctra Studio — back to top"
          >
            <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 text-black">
              <Compass className="h-3.5 w-3.5" />
            </div>
            <p className="text-xs font-medium tracking-[0.16em] text-zinc-100 uppercase">
              Noctra Studio
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
                      className="group relative block rounded-full px-5 py-2 text-xs tracking-wide text-zinc-300 transition-colors hover:text-white"
                    >
                      <span>{item}</span>
                      {index === 0 && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        />
                      )}
                      <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
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
              className="hidden h-10 rounded-full bg-white text-black hover:bg-zinc-200 md:inline-flex"
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

      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:pb-28 lg:pt-36">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-zinc-200"
          >
            <Sparkles className="h-4 w-4 text-indigo-300" />
            Premium Growth Agency
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-4xl font-semibold leading-[1.05] text-transparent sm:text-2xl md:text-3xl xl:text-4xl"
          >
            We design dark, bold digital experiences that convert.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-xs leading-relaxed text-zinc-300 md:text-base"
          >
            Launch strategy, branding, and high-performance websites with a
            modern aesthetic. Built for teams who want clean visuals and clear
            business impact.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button className="group h-12 bg-indigo-500 px-6 text-white hover:bg-indigo-400">
              Start Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              className="h-12 border-white/20 bg-white/5 px-6 text-zinc-100 hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Reel
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3"
          >
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.22)' }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <p className="text-2xl font-semibold text-white">150+</p>
              <p className="text-xs text-zinc-400">Projects delivered</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.22)' }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <p className="text-2xl font-semibold text-white">98%</p>
              <p className="text-xs text-zinc-400">Client retention</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.22)' }}
              className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:col-span-1"
            >
              <p className="text-2xl font-semibold text-white">12y</p>
              <p className="text-xs text-zinc-400">Industry expertise</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute z-10 -left-8 -top-8 rounded-2xl border border-indigo-300/30 bg-indigo-300/10 px-5 py-3 backdrop-blur-md"
          >
            <p className="text-2xl font-semibold text-white">+42%</p>
            <p className="text-xs text-zinc-300">Average growth in 90 days</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-8 -right-6 rounded-2xl border border-white/15 bg-zinc-900/70 px-5 py-3 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-zinc-100">
              <BarChart3 className="h-4 w-4 text-emerald-300" />
              <p className="text-sm font-medium">Data-first strategy</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, rotate: -0.5 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-indigo-500/10"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                alt="Creative team discussing campaign strategy"
                width={1100}
                height={900}
                className="h-[25rem] w-full rounded-[1.5rem] object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
            className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-indigo-300" />
              <p className="text-[11px] leading-relaxed text-zinc-300">
                Trusted by fast-growing startups and enterprise teams for
                conversion-focused web design and brand systems.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  Quote,
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PricingBlocks } from '@/components/ui/pricing-blocks';
import { ProjectShowcase } from '@/components/ui/project-showcase';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const faqItems = [
  {
    q: 'What types of projects do you take on?',
    a: 'Product marketing sites, design systems, and high-performance landing experiences. We stay hands-on from strategy through launch.',
  },
  {
    q: 'How long does a typical engagement run?',
    a: 'Sprints start around two weeks for focused surfaces. Full narrative sites usually land between 6–10 weeks depending on CMS, motion, and integrations.',
  },
  {
    q: 'What does collaboration look like day to day?',
    a: 'Async updates in Slack, a weekly review, and shared Figma + repo access. You always know what shipped and what is next.',
  },
  {
    q: 'Do you work with teams outside your timezone?',
    a: 'Yes. We overlap core hours for reviews and keep the rest async with Looms and written recaps so nothing stalls.',
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-24 border-t border-zinc-200 bg-zinc-50 px-6 py-20 dark:border-white/[0.06] dark:bg-zinc-950/40 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-zinc-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-300" />
            FAQ
          </div>
          <h2 className="bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:to-zinc-500 md:text-4xl lg:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 md:text-base">
            Straight answers about how we work, timelines, and what you can expect
            before we ever sign.
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white px-1 shadow-lg shadow-zinc-900/10 ring-0 dark:border-0 dark:bg-white/[0.03] dark:shadow-black/20 dark:ring-1 dark:ring-white/10"
                >
                  <AccordionTrigger className="px-4 py-5 text-left text-[15px] font-medium text-zinc-900 hover:no-underline dark:text-white md:px-5 md:text-base [&[data-state=open]]:text-indigo-500 dark:[&[data-state=open]]:text-indigo-200">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:px-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-900 dark:border-white/[0.1] lg:min-h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating at a desk"
              fill
              className="object-cover grayscale contrast-[0.95] transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-indigo-950/30" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md md:bottom-8 md:left-8 md:right-8 md:p-5">
              <p className="text-sm font-medium text-white md:text-base">
                Prefer a walkthrough?
              </p>
              <p className="mt-1 text-xs text-zinc-400 md:text-sm">
                Book a 20-minute intro — we will map scope, risks, and a realistic
                timeline.
              </p>
              <Button
                size="sm"
                className="mt-4 rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
              >
                Schedule intro
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 scroll-mt-24 bg-zinc-50 px-6 py-20 dark:bg-black md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            How we work
          </p>
          <h2 className="bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:to-zinc-500 md:text-4xl">
            Agency process, but cinematic
          </h2>
          {/* <p className="mt-4 text-sm text-zinc-400 md:text-base">
            We move from strategy to shipped experience in tight loops. Hover each
            lane to preview the kind of work we deliver for modern brands.
          </p> */}
        </motion.div>
        <motion.div {...fade} className="mt-10">
          <div className=" px-2 py-2  md:px-4">
            <ProjectShowcase />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: 'Velvet Commerce',
    tag: 'E‑commerce',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Orbital Analytics',
    tag: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kite Mobility',
    tag: 'Product',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  },
];

export function WorkShowcaseSection() {
  return (
    <section id="work" className="relative z-10 scroll-mt-24 border-t border-zinc-200 bg-zinc-100 px-6 py-20 dark:border-white/[0.06] dark:bg-zinc-950/50 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div {...fade} className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
              Selected work
            </p>
            <h2 className="bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:to-zinc-500 md:text-4xl">
              Interfaces that feel expensive
            </h2>
            <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400 md:text-sm">
              A snapshot of launches — from storefronts to internal tools — each
              tuned for clarity and conversion.
            </p>
          </motion.div>
          <Button
            variant="outline"
            className="shrink-0 rounded-full border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200"
          >
            View case studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-white/[0.08] dark:bg-zinc-900/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-zinc-300 bg-white/85 px-3 py-1 text-[11px] text-zinc-700 backdrop-blur-md dark:border-white/15 dark:bg-black/40 dark:text-zinc-200">
                  {p.tag}
                </span>
              </div>
              <div className="bg-zinc-100 p-5 dark:bg-zinc-900/70">
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">{p.title}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-500">Brand, UX, build</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const quotes = [
  {
    name: 'Maya Chen',
    role: 'VP Product, Northline',
    text: 'They shipped a narrative and a system — not just pages. Our activation curve finally bent the right way.',
  },
  {
    name: 'Jordan Ellis',
    role: 'Founder, Velvet',
    text: 'The dark UI work is surgical. Motion feels intentional, not decorative. That is rare.',
  },
  {
    name: 'Sofia Martins',
    role: 'CMO, Kite',
    text: 'Our paid spend finally matched the story on-site. CAC dropped without touching the budget.',
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = quotes.length;

  const goTo = (index: number) => {
    if (index < 0) {
      setActiveIndex(total - 1);
      return;
    }
    if (index >= total) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className="relative z-10 bg-zinc-50 px-6 py-20 dark:bg-black md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            Proof
          </p>
          <h2 className="bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:to-zinc-500 md:text-4xl">
            Teams that stayed after launch
          </h2>
        </motion.div>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-3 dark:border-white/[0.08] dark:bg-zinc-950/40 md:p-4">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) goTo(activeIndex + 1);
                if (info.offset.x > 70) goTo(activeIndex - 1);
              }}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 170, damping: 24 }}
              className="flex"
            >
              {quotes.map((q, i) => (
                <div key={q.name} className="w-full flex-none px-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    animate={{
                      scale: i === activeIndex ? 1 : 0.97,
                      opacity: i === activeIndex ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <Card className="h-full border-zinc-200 bg-zinc-50 text-zinc-900 shadow-none backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-950/90 dark:text-zinc-100">
                      <CardHeader className="space-y-3 md:space-y-4">
                        <Quote className="h-8 w-8 text-indigo-400/70" />
                        <CardDescription className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
                          “{q.text}”
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                        <div className="flex flex-col items-start">
                          <p className="text-sm font-medium text-zinc-900 dark:text-white md:text-base">{q.name}</p>
                          <p className="text-xs text-zinc-500">{q.role}</p>
                        </div>
                        <span className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-[11px] tracking-wide text-zinc-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400">
                          0{i + 1}
                        </span>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
              onClick={() => goTo(activeIndex - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {quotes.map((q, i) => (
                <button
                  key={q.name}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-7 bg-indigo-400' : 'w-2 bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-700'
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
              onClick={() => goTo(activeIndex + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: 'Sprint',
    price: '$8k',
    blurb: 'Focused landing or refresh in a tight window.',
    features: ['2-week delivery block', 'Core components + motion pass', 'Analytics hookup'],
    highlight: false,
    ctaLabel: 'Start sprint',
  },
  {
    name: 'Studio',
    price: '$18k',
    blurb: 'Full narrative site with CMS and design system seed.',
    features: ['Multi-section build', 'Content modeling', 'Performance budget'],
    highlight: true,
    ctaLabel: 'Go studio',
  },
  {
    name: 'Embedded',
    price: 'Custom',
    blurb: 'Ongoing product surface + growth experiments.',
    features: ['Monthly design/dev pod', 'Roadmap ownership', 'CRO cadence'],
    highlight: false,
    ctaLabel: 'Contact us',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 scroll-mt-24 border-t border-zinc-200 bg-zinc-100 px-6 py-20 dark:border-white/[0.06] dark:bg-zinc-950/60 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            Engagement
          </p>
          <h2 className="bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:to-zinc-500 md:text-4xl">
            Clear tiers, no mystery invoices
          </h2>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 md:text-base">
            Pick a lane — we will tailor scope in the first workshop call.
          </p>
        </motion.div>

        <div className="mt-14">
          <PricingBlocks tiers={tiers} />
        </div>
      </div>
    </section>
  );
}

export function NewsletterCtaSection() {
  return (
    <section className="relative z-10 bg-zinc-50 px-6 py-20 dark:bg-black md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-indigo-100/70 via-white to-fuchsia-100/50 p-8 dark:border-white/5 dark:from-indigo-500/20 dark:via-zinc-900 dark:to-fuchsia-500/15 md:p-12"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl dark:bg-indigo-500/30" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-fuchsia-300/20 blur-3xl dark:bg-fuchsia-500/20" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-[11px] text-zinc-600 dark:border-white/20 dark:bg-white/10 dark:text-zinc-200">
                <MessageCircle className="h-3.5 w-3.5 text-indigo-300" />
                Monthly field notes
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
                Get launch checklists, UI references, and experiments we are running.
              </h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                No fluff — one email every few weeks. Unsubscribe anytime.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="you@company.com"
                className="h-12 border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500 dark:border-white/20 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-400"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Join
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const cols = [
    {
      title: 'Studio',
      links: ['Manifesto', 'Careers', 'Press'],
    },
    {
      title: 'Work',
      links: ['Case studies', 'Playground', 'Archive'],
    },
    {
      title: 'Social',
      links: ['Twitter / X', 'LinkedIn', 'Dribbble'],
    },
  ];

  return (
    <footer
      id="contact"
      className="relative z-10 scroll-mt-24 border-t border-zinc-200 bg-zinc-100 px-6 pb-12 pt-16 dark:border-white/[0.06] dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-900 uppercase dark:text-white">
              Noctra Studio
            </p>
            <p className="mt-3 max-w-sm text-sm text-zinc-500 dark:text-zinc-300">
              Dark-first digital studio for brands that want craft, velocity, and
              measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-200">
                  {c.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-10 bg-zinc-300 dark:bg-white/[0.08]" />
        <div className="flex flex-col gap-3 text-xs text-zinc-600 dark:text-zinc-300 md:flex-row md:items-center md:justify-between">
          <p className="rounded-full border border-transparent px-2.5 py-1 dark:border-white/10 dark:bg-white/[0.02]">© {new Date().getFullYear()} Noctra Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="rounded-full border border-transparent px-2.5 py-1 hover:text-zinc-400 dark:border-white/10 dark:bg-white/[0.02] dark:hover:text-white">
              Privacy
            </a>
            <a href="#" className="rounded-full border border-transparent px-2.5 py-1 hover:text-zinc-400 dark:border-white/10 dark:bg-white/[0.02] dark:hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

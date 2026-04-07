'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  Cpu,
  HelpCircle,
  LineChart,
  MessageCircle,
  Orbit,
  Quote,
  Sparkles,
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
      className="relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/40 px-6 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-300" />
            FAQ
          </div>
          <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl lg:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-sm text-zinc-400 md:text-base">
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
                  className="overflow-hidden rounded-2xl border-0 bg-white/[0.03] px-1 shadow-lg shadow-black/20 ring-1 ring-white/10"
                >
                  <AccordionTrigger className="px-4 py-5 text-left text-[15px] font-medium text-white hover:no-underline md:px-5 md:text-base [&[data-state=open]]:text-indigo-200">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-zinc-400 md:px-5">
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
            className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-zinc-900 lg:min-h-full"
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

const processSteps = [
  {
    title: 'Signal',
    desc: 'We map goals, constraints, and the one metric that must move.',
    icon: LineChart,
    className: 'lg:col-span-2',
  },
  {
    title: 'Systems',
    desc: 'Design tokens, motion rules, and a component spine you can scale.',
    icon: Orbit,
    className: 'lg:col-span-1',
  },
  {
    title: 'Velocity',
    desc: 'Weekly slices, async reviews, and a launch runway without thrash.',
    icon: Cpu,
    className: 'lg:col-span-1',
  },
  {
    title: 'Proof',
    desc: 'Analytics, heatmaps, and iteration loops until the graph smiles.',
    icon: Sparkles,
    className: 'lg:col-span-2',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 scroll-mt-24 bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            How we work
          </p>
          <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            A rhythm built for momentum
          </h2>
          <p className="mt-4 text-sm text-zinc-400 md:text-base">
            Not a waterfall deck — a tight loop of clarity, craft, and measurable
            outcomes.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-6 md:p-8',
                  step.className
                )}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-indigo-200" />
                </div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
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
    <section id="work" className="relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div {...fade} className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
              Selected work
            </p>
            <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              Interfaces that feel expensive
            </h2>
            <p className="mt-4 text-sm text-zinc-400 md:text-base">
              A snapshot of launches — from storefronts to internal tools — each
              tuned for clarity and conversion.
            </p>
          </motion.div>
          <Button
            variant="outline"
            className="shrink-0 rounded-full border-white/15 bg-white/[0.03] text-zinc-200"
          >
            View case studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-900/40"
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
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-zinc-200 backdrop-blur-md">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-lg font-semibold text-white">{p.title}</p>
                <p className="mt-1 text-sm text-zinc-500">Brand, UX, build</p>
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
  return (
    <section className="relative z-10 bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            Proof
          </p>
          <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Teams that stayed after launch
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="h-full border-white/[0.08] bg-zinc-950/80 text-zinc-100 shadow-none backdrop-blur-sm">
                <CardHeader className="space-y-3">
                  <Quote className="h-8 w-8 text-indigo-400/60" />
                  <CardDescription className="text-[15px] leading-relaxed text-zinc-400">
                    “{q.text}”
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col items-start border-t border-white/[0.06] pt-4">
                  <p className="text-sm font-medium text-white">{q.name}</p>
                  <p className="text-xs text-zinc-500">{q.role}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
  },
  {
    name: 'Studio',
    price: '$18k',
    blurb: 'Full narrative site with CMS and design system seed.',
    features: ['Multi-section build', 'Content modeling', 'Performance budget'],
    highlight: true,
  },
  {
    name: 'Embedded',
    price: 'Custom',
    blurb: 'Ongoing product surface + growth experiments.',
    features: ['Monthly design/dev pod', 'Roadmap ownership', 'CRO cadence'],
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fade} className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            Engagement
          </p>
          <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Clear tiers, no mystery invoices
          </h2>
          <p className="mt-4 text-sm text-zinc-400 md:text-base">
            Pick a lane — we will tailor scope in the first workshop call.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card
                className={cn(
                  'h-full border-white/[0.08] bg-zinc-950/90 text-zinc-100 shadow-xl shadow-black/40',
                  tier.highlight &&
                    'border-indigo-400/35 ring-1 ring-indigo-400/25'
                )}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                  <CardDescription className="text-zinc-400">{tier.blurb}</CardDescription>
                  <p className="pt-2 text-3xl font-semibold text-white">{tier.price}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/90" />
                      <span>{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      'w-full rounded-full',
                      tier.highlight
                        ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                        : 'bg-white/10 text-white hover:bg-white/15'
                    )}
                  >
                    Book intro
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterCtaSection() {
  return (
    <section className="relative z-10 bg-black px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-indigo-500/15 via-zinc-950 to-fuchsia-500/10 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] text-zinc-300">
                <MessageCircle className="h-3.5 w-3.5 text-indigo-300" />
                Monthly field notes
              </div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Get launch checklists, UI references, and experiments we are running.
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
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
                className="h-12 border-white/15 bg-black/40 text-white placeholder:text-zinc-500"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-white text-black hover:bg-zinc-200"
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
      className="relative z-10 scroll-mt-24 border-t border-white/[0.06] bg-black px-6 pb-12 pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              Noctra Studio
            </p>
            <p className="mt-3 max-w-sm text-sm text-zinc-500">
              Dark-first digital studio for brands that want craft, velocity, and
              measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {c.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
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
        <Separator className="my-10 bg-white/[0.08]" />
        <div className="flex flex-col gap-3 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Noctra Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-400">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

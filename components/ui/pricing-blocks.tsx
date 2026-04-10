"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  highlight?: boolean;
  ctaLabel?: string;
}

interface PricingBlocksProps {
  tiers: PricingTier[];
}

export function PricingBlocks({ tiers }: PricingBlocksProps) {
  return (
    <section className="relative flex flex-col items-center py-4">
      <div className="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:items-end">
        {tiers.map((tier, idx) => {
          const isHighlighted = Boolean(tier.highlight);

          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 36, rotate: isHighlighted ? 0 : idx === 0 ? -3 : 3, scale: 0.98 }}
              whileInView={{ opacity: 1, y: isHighlighted ? -12 : 0, rotate: isHighlighted ? 0 : idx === 0 ? -3 : 3, scale: isHighlighted ? 1.03 : 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", duration: 0.6, delay: idx * 0.07 }}
              className={cn(
                "relative w-full rounded-3xl border px-7 py-9 text-left shadow-xl transition-transform hover:scale-[1.015]",
                isHighlighted
                  ? "z-20 border-indigo-300/50 bg-gradient-to-b from-indigo-100 via-white to-indigo-50 text-zinc-900 ring-1 ring-indigo-300/30 backdrop-blur-md dark:border-indigo-300/40 dark:from-indigo-500/25 dark:via-indigo-500/10 dark:to-zinc-950 dark:text-white dark:ring-indigo-300/25 lg:w-[25rem]"
                  : "z-10 border-zinc-200 bg-white text-zinc-900 backdrop-blur-sm dark:border-white/[0.1] dark:bg-zinc-950/80 dark:text-zinc-100 lg:w-[22rem]"
              )}
            >
              {isHighlighted ? (
                <motion.div
                  animate={{ y: [8, 2, 8] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-indigo-300/50 bg-indigo-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:border-indigo-300/35 dark:bg-indigo-400/20 dark:text-indigo-100"
                >
                  Most Popular
                </motion.div>
              ) : null}

              <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", isHighlighted ? "text-indigo-700 dark:text-indigo-100" : "text-indigo-600 dark:text-indigo-300")}>
                {tier.name}
              </p>
              <p className={cn("mt-3 text-4xl font-bold", isHighlighted ? "text-zinc-900 dark:text-white" : "text-zinc-900 dark:text-zinc-100")}>
                {tier.price}
              </p>
              <p className={cn("mt-2 text-sm leading-relaxed", isHighlighted ? "text-indigo-700/90 dark:text-indigo-100/90" : "text-zinc-600 dark:text-zinc-400")}>
                {tier.blurb}
              </p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className={cn("flex items-start gap-2.5 text-sm", isHighlighted ? "text-zinc-800 dark:text-indigo-50" : "text-zinc-700 dark:text-zinc-300")}>
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", isHighlighted ? "text-emerald-300" : "text-emerald-400/90")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "mt-7 w-full rounded-full py-2.5 text-sm font-semibold transition",
                  isHighlighted
                    ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                )}
              >
                {tier.ctaLabel ?? "Book intro"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

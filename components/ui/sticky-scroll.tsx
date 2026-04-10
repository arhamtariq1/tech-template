"use client";

import { ArrowUpRight } from "lucide-react";

type StickyProject = {
  id: number;
  src: string;
  alt: string;
};

const leftProjects: StickyProject[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    alt: "Agency workspace with desks",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    alt: "Design review session",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
    alt: "Team collaborating on UI",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Strategy planning meeting",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "Consulting and growth planning",
  },
];

const rightProjects: StickyProject[] = [
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Product strategy workshop",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    alt: "Coding on monitor",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    alt: "Data and KPI dashboard",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
    alt: "Creative team presentation",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Cross-functional project team",
  },
];

function ProjectColumn({ items }: { items: StickyProject[] }) {
  return (
    <div className="grid gap-2">
      {items.map((item) => (
        <figure key={item.id} className="w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="h-72 w-full rounded-xl border border-white/10 object-cover transition-all duration-300 hover:scale-[1.01]"
          />
        </figure>
      ))}
    </div>
  );
}

export function StickyScroll() {
  return (
    <section className="relative z-10 border-t border-white/[0.06] bg-slate-950 px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-indigo-300">
            Deep dive
          </p>
          <h2 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Real project momentum
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
          <div className="grid gap-2 lg:col-span-4">
            <ProjectColumn items={leftProjects} />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-20 h-[80vh]">
              <div className="grid h-full grid-rows-3 gap-2">
                <article className="row-span-3 flex h-full flex-col justify-center rounded-xl border border-white/10 bg-zinc-950/85 p-7 text-left backdrop-blur-sm">
                  <span className="mb-3 inline-flex w-fit rounded-full border border-indigo-300/25 bg-indigo-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-indigo-200">
                    Middle narrative
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                    Strategy in the center.
                    <br />
                    Execution on both sides.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                    This sticky block keeps the core message visible while your
                    portfolio streams around it. Perfect for showing your agency
                    process, outcomes, and confidence in one focused moment.
                  </p>
                  <button className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 transition hover:bg-white/[0.08]">
                    Explore projects
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </article>
              </div>
            </div>
          </div>

          <div className="grid gap-2 lg:col-span-4">
            <ProjectColumn items={rightProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}

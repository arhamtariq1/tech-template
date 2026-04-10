"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Conversion Hub",
    description: "Performance-led landing system for SaaS growth teams.",
    year: "2026",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Noctra Commerce",
    description: "Dark-first storefront with fast UX and measurable lift.",
    year: "2025",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Orbit Dashboard",
    description: "Analytics workspace for product and paid media teams.",
    year: "2025",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Launch Engine",
    description: "Brand + web stack for recurring launch campaigns.",
    year: "2024",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-auto w-full px-3 py-8 md:px-6 md:py-10"
    >
      <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Workflow snapshots
      </h3>

      <div
        className="pointer-events-none fixed z-40 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 16}px, ${smoothPosition.y - 96}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.86,
          transition:
            "opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1), scale 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative h-[180px] w-[300px] overflow-hidden rounded-xl bg-zinc-900">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.08,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
          >
            <div className="relative border-t border-zinc-200 py-4 transition-all duration-300 ease-out dark:border-white/20 md:py-5">
              <div
                className={`absolute inset-0 -mx-3 rounded-lg bg-zinc-100 px-3 transition-all duration-300 ease-out dark:bg-white/[0.04] md:-mx-4 md:px-4 ${hoveredIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2">
                    <h4 className="text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100 md:text-lg">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-px bg-zinc-900 transition-all duration-300 ease-out dark:bg-zinc-100 ${hoveredIndex === index ? "w-full" : "w-0"
                            }`}
                        />
                      </span>
                    </h4>
                    <ArrowUpRight
                      className={`h-4 w-4 text-zinc-400 transition-all duration-300 ease-out ${hoveredIndex === index
                        ? "translate-x-0 translate-y-0 opacity-100"
                        : "-translate-x-2 translate-y-2 opacity-0"
                        }`}
                    />
                  </div>
                  <p
                    className={`mt-1 text-sm leading-relaxed transition-all duration-300 ease-out ${hoveredIndex === index ? "text-zinc-700 dark:text-zinc-300" : "text-zinc-500"
                      }`}
                  >
                    {project.description}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono tabular-nums transition-all duration-300 ease-out ${hoveredIndex === index ? "text-zinc-700 dark:text-zinc-300" : "text-zinc-500"
                    }`}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-zinc-200 dark:border-white/10" />
      </div>
    </section>
  );
}

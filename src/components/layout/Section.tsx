"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  gradient?: string;
};

export function Section({ id, children, className = "", dark = false, gradient }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bg = gradient
    ? gradient
    : dark
      ? "bg-slate-950"
      : "bg-white";

  return (
    <section
      ref={ref}
      id={id}
      className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24 overflow-hidden scroll-mt-24 ${bg} ${dark ? "text-white" : "text-slate-900"} ${className}`}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

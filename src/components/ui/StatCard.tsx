"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: "emerald" | "amber" | "red" | "blue";
  delay?: number;
};

const colorMap = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export function StatCard({ icon: Icon, value, label, color = "emerald", delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`p-6 rounded-2xl border ${colorMap[color]} backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Icon className="w-6 h-6 mb-3" />
      <div className="text-3xl font-black tracking-tight mb-1">{value}</div>
      <div className="text-sm opacity-70 font-medium">{label}</div>
    </motion.div>
  );
}

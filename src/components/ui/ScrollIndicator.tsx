"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator({
  targetId,
  className = "",
}: {
  targetId: string;
  className?: string;
}) {
  return (
    <motion.a
      href={`#${targetId}`}
      className={`mt-10 md:mt-14 inline-flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer group select-none ${className}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      aria-label="Scroll hacia la siguiente sección"
    >
      <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 group-hover:text-emerald-400 transition-colors">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-emerald-400/80 group-hover:text-emerald-400 group-hover:translate-y-0.5 transition-all" />
      </motion.div>
    </motion.a>
  );
}


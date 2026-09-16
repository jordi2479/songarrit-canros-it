"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

const tarifas = [
  { ref: "Cloro Rápido 5L", palma: 8.50, campos: 9.20, diff: -0.70 },
  { ref: "Saco Cemento 25kg", palma: 4.10, campos: 4.10, diff: 0 },
  { ref: "Disco Radial 230mm", palma: 3.85, campos: 4.50, diff: -0.65 },
  { ref: "Silicona Neutra 280ml", palma: 3.20, campos: 2.95, diff: 0.25 },
  { ref: "Broca Widia ø8mm", palma: 1.90, campos: 2.30, diff: -0.40 },
];

export function ComparadorTarifas() {
  return (
    <motion.div
      className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden max-w-2xl shadow-2xl shadow-black/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-white text-sm">Comparador de Tarifas</h4>
          <p className="text-xs text-slate-500">Proveedor: Distribuciones Balear S.L.</p>
        </div>
        <span className="text-[10px] bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-amber-500/20">
          3 diferencias
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs uppercase tracking-wider">
              <th className="text-left px-6 py-3 font-semibold">Referencia</th>
              <th className="text-right px-4 py-3 font-semibold">Palma</th>
              <th className="text-right px-4 py-3 font-semibold">Campos</th>
              <th className="text-right px-6 py-3 font-semibold">Diferencia</th>
            </tr>
          </thead>
          <tbody>
            {tarifas.map((t, i) => (
              <motion.tr
                key={t.ref}
                className={`border-t border-slate-800/50 ${t.diff !== 0 ? "bg-red-500/5" : ""}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <td className="px-6 py-3 text-slate-300 font-medium">{t.ref}</td>
                <td className="text-right px-4 py-3 text-slate-400 tabular-nums">{t.palma.toFixed(2)} €</td>
                <td className="text-right px-4 py-3 text-slate-400 tabular-nums">{t.campos.toFixed(2)} €</td>
                <td className="text-right px-6 py-3">
                  {t.diff === 0 ? (
                    <span className="inline-flex items-center gap-1 text-slate-600">
                      <Minus className="w-3 h-3" /> Igual
                    </span>
                  ) : t.diff < 0 ? (
                    <span className="inline-flex items-center gap-1 text-red-400 font-bold tabular-nums">
                      <ArrowUp className="w-3 h-3" /> +{Math.abs(t.diff).toFixed(2)} €
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-bold tabular-nums">
                      <ArrowDown className="w-3 h-3" /> -{t.diff.toFixed(2)} €
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-800 flex justify-end">
        <button className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
          Generar Email de Reclamación →
        </button>
      </div>
    </motion.div>
  );
}

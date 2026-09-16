"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Pencil, Package } from "lucide-react";
import { useTranslations } from "next-intl";

export function AlertaStock() {
  const t = useTranslations("alertaStock");
  const [estado, setEstado] = useState<"pending" | "approved" | "rejected">("pending");

  return (
    <motion.div
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-lg shadow-2xl shadow-black/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {estado === "pending" && (
        <>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
              <Package className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{t("title")}</h4>
              <p className="text-xs text-slate-500">{t("tienda")}</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            {t("desc")} <strong className="text-white">{t("producto")}</strong> {t("descEnd")}{" "}
            {t("stockActual")} <span className="text-red-400 font-bold">{t("stockValor")}</span>.{" "}
            {t("sugerencia")} <span className="text-emerald-400 font-bold">{t("sugerenciaValor")}</span> {t("proveedor")}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setEstado("rejected")}
              className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl text-xs font-semibold transition-all border border-red-500/10"
            >
              <X className="w-3.5 h-3.5" /> {t("rechazar")}
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-all border border-slate-700">
              <Pencil className="w-3.5 h-3.5" /> {t("modificar")}
            </button>
            <button
              onClick={() => setEstado("approved")}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              <Check className="w-3.5 h-3.5" /> {t("aprobar")}
            </button>
          </div>
        </>
      )}

      {estado === "approved" && (
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>
          <h4 className="text-lg font-bold text-white mb-1">{t("aprobadoTitle")}</h4>
          <p className="text-sm text-slate-400">{t("aprobadoDesc")}</p>
          <p className="text-xs text-emerald-400 mt-3 font-semibold">{t("aprobadoPor")}</p>
          <button
            onClick={() => setEstado("pending")}
            className="mt-5 text-xs text-slate-500 hover:text-slate-300 underline transition-colors cursor-pointer"
          >
            {t("reiniciar")}
          </button>
        </motion.div>
      )}

      {estado === "rejected" && (
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-400" />
          </div>
          <h4 className="text-lg font-bold text-white mb-1">{t("rechazadoTitle")}</h4>
          <p className="text-sm text-slate-400">{t("rechazadoDesc")}</p>
          <p className="text-xs text-red-400 mt-3 font-semibold">{t("rechazadoPor")}</p>
          <button
            onClick={() => setEstado("pending")}
            className="mt-5 text-xs text-slate-500 hover:text-slate-300 underline transition-colors cursor-pointer"
          >
            {t("reiniciar")}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

import { AreaId } from './types';

export interface AreaTheme {
  id: AreaId;
  nameKey: 'grupo' | 'nucleo' | 'clientes' | 'operativa';
  colorName: string;
  dot: string;
  // Modo Claro (Home / BuscadorSoluciones)
  light: {
    badge: string;
    pillActive: string;
    borderHover: string;
    ring: string;
    baseText: string;
    baseBorder: string;
  };
  // Modo Oscuro (Catálogo / Explorador / Secciones oscuras)
  dark: {
    badge: string;
    pillActive: string;
    borderHover: string;
    glow: string;
    baseText: string;
    baseBorder: string;
    border: string;
    bgHover: string;
  };
}

export const AREA_THEMES: Record<AreaId, AreaTheme> = {
  global: {
    id: 'global',
    nameKey: 'grupo',
    colorName: 'indigo',
    dot: 'bg-indigo-500',
    light: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      pillActive: 'bg-indigo-50 text-indigo-700 border-indigo-300 shadow-sm ring-2 ring-indigo-100 ring-offset-1',
      borderHover: 'hover:border-indigo-300 hover:shadow-indigo-100/60',
      ring: 'ring-indigo-100',
      baseText: 'text-indigo-700',
      baseBorder: 'border-indigo-300',
    },
    dark: {
      badge: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      pillActive: 'bg-indigo-500/20 text-indigo-300 border-indigo-400 shadow-sm ring-2 ring-indigo-500/30 ring-offset-1 ring-offset-slate-950',
      borderHover: 'hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]',
      glow: 'shadow-[0_0_20px_rgba(99,102,241,0.25)]',
      baseText: 'text-indigo-400',
      baseBorder: 'border-indigo-500/40',
      border: 'border-indigo-500/30',
      bgHover: 'hover:bg-indigo-500/10',
    }
  },
  administracion: {
    id: 'administracion',
    nameKey: 'nucleo',
    colorName: 'sky',
    dot: 'bg-sky-500',
    light: {
      badge: 'bg-sky-50 text-sky-700 border-sky-200/80',
      pillActive: 'bg-sky-50 text-sky-700 border-sky-300 shadow-sm ring-2 ring-sky-100 ring-offset-1',
      borderHover: 'hover:border-sky-300 hover:shadow-sky-100/60',
      ring: 'ring-sky-100',
      baseText: 'text-sky-700',
      baseBorder: 'border-sky-300',
    },
    dark: {
      badge: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      pillActive: 'bg-sky-500/20 text-sky-300 border-sky-400 shadow-sm ring-2 ring-sky-500/30 ring-offset-1 ring-offset-slate-950',
      borderHover: 'hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]',
      glow: 'shadow-[0_0_20px_rgba(14,165,233,0.25)]',
      baseText: 'text-sky-400',
      baseBorder: 'border-sky-500/40',
      border: 'border-sky-500/30',
      bgHover: 'hover:bg-sky-500/10',
    }
  },
  clientes: {
    id: 'clientes',
    nameKey: 'clientes',
    colorName: 'amber',
    dot: 'bg-amber-500',
    light: {
      badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
      pillActive: 'bg-amber-50 text-amber-800 border-amber-300 shadow-sm ring-2 ring-amber-100 ring-offset-1',
      borderHover: 'hover:border-amber-300 hover:shadow-amber-100/60',
      ring: 'ring-amber-100',
      baseText: 'text-amber-800',
      baseBorder: 'border-amber-300',
    },
    dark: {
      badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      pillActive: 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm ring-2 ring-amber-500/30 ring-offset-1 ring-offset-slate-950',
      borderHover: 'hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.25)]',
      baseText: 'text-amber-400',
      baseBorder: 'border-amber-500/40',
      border: 'border-amber-500/30',
      bgHover: 'hover:bg-amber-500/10',
    }
  },
  operativa: {
    id: 'operativa',
    nameKey: 'operativa',
    colorName: 'emerald',
    dot: 'bg-emerald-500',
    light: {
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
      pillActive: 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm ring-2 ring-emerald-100 ring-offset-1',
      borderHover: 'hover:border-emerald-300 hover:shadow-emerald-100/60',
      ring: 'ring-emerald-100',
      baseText: 'text-emerald-800',
      baseBorder: 'border-emerald-300',
    },
    dark: {
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      pillActive: 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-sm ring-2 ring-emerald-500/30 ring-offset-1 ring-offset-slate-950',
      borderHover: 'hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.25)]',
      baseText: 'text-emerald-400',
      baseBorder: 'border-emerald-500/40',
      border: 'border-emerald-500/30',
      bgHover: 'hover:bg-emerald-500/10',
    }
  }
};

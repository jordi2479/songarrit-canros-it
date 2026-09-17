export type AreaId = 'global' | 'administracion' | 'clientes' | 'operativa';

export interface Propuesta {
  id: string;
  codigo?: string;
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  facilidad: string;
  riesgo: string;
  beneficio: string;
  acceso?: 'lectura' | 'escritura';
  ejemplo?: string;
  viabilidad?: string;
  fase?: string;
  stack?: string;
  veredicto?: string;
  estado?: string;
  area_id?: AreaId;
  cat_id?: string;
  pasos?: string[];
}

export interface Categoria {
  id: string;
  area: AreaId;
  titulo: string;
  propuestas: Propuesta[];
}

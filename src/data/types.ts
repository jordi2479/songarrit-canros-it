export type AreaId = 'global' | 'administracion' | 'clientes' | 'operativa';

export interface Propuesta {
  id: string;
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  facilidad: string;
  riesgo: string;
  beneficio: string;
  fase: string;
  stack: string;
  veredicto: string;
  estado: string;
}

export interface Categoria {
  id: string;
  area: AreaId;
  titulo: string;
  propuestas: Propuesta[];
}

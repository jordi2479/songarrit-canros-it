import { Categoria } from '../types';
import { categoriaAREA01De } from './operativa/area-01-compras-y-stock';
import { categoriaAREA02De } from './administracion/area-02-finanzas-locales';
import { categoriaAREA03De } from './administracion/area-03-direccion-de-tienda';
import { categoriaAREA04De } from './global/area-04-estrategia-de-grupo';
import { categoriaAREA05De } from './global/area-05-compras-centralizadas';
import { categoriaAREA06De } from './operativa/area-06-stock-compartido';
import { categoriaAREA07De } from './global/area-07-finanzas-de-grupo';
import { categoriaAREA08De } from './global/area-08-identidad-de-marca';
import { categoriaAREA09De } from './clientes/area-09-marketing-y-fidelizacion';
import { categoriaAREA10De } from './global/area-10-cultura-y-conocimiento';
import { categoriaAREA11De } from './operativa/area-11-logistica-y-reparto';
import { categoriaAREA12De } from './administracion/area-12-equipo-y-rrhh';
import { categoriaAREA13De } from './operativa/area-13-seguridad-y-prevencion';
import { categoriaAREA14De } from './clientes/area-14-ventas-y-atencion';
import { categoriaAREA15De } from './operativa/area-15-operaciones-de-tienda';

export * from '../types';
export * from './operativa';
export * from './administracion';
export * from './global';
export * from './clientes';

export const catalogoCategoriasDe: Categoria[] = [
  categoriaAREA01De,
  categoriaAREA02De,
  categoriaAREA03De,
  categoriaAREA04De,
  categoriaAREA05De,
  categoriaAREA06De,
  categoriaAREA07De,
  categoriaAREA08De,
  categoriaAREA09De,
  categoriaAREA10De,
  categoriaAREA11De,
  categoriaAREA12De,
  categoriaAREA13De,
  categoriaAREA14De,
  categoriaAREA15De,
];

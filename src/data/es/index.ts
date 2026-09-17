import { Categoria } from '../types';
import { categoriaAREA01 } from './operativa/area-01-compras-y-stock';
import { categoriaAREA02 } from './administracion/area-02-finanzas-locales';
import { categoriaAREA03 } from './administracion/area-03-direccion-de-tienda';
import { categoriaAREA04 } from './global/area-04-estrategia-de-grupo';
import { categoriaAREA05 } from './global/area-05-compras-centralizadas';
import { categoriaAREA06 } from './operativa/area-06-stock-compartido';
import { categoriaAREA07 } from './global/area-07-finanzas-de-grupo';
import { categoriaAREA08 } from './global/area-08-identidad-de-marca';
import { categoriaAREA09 } from './clientes/area-09-marketing-y-fidelizacion';
import { categoriaAREA10 } from './global/area-10-cultura-y-conocimiento';
import { categoriaAREA11 } from './operativa/area-11-logistica-y-reparto';
import { categoriaAREA12 } from './administracion/area-12-equipo-y-rrhh';
import { categoriaAREA13 } from './operativa/area-13-seguridad-y-prevencion';
import { categoriaAREA14 } from './clientes/area-14-ventas-y-atencion';
import { categoriaAREA15 } from './operativa/area-15-operaciones-de-tienda';

export * from '../types';
export * from './operativa';
export * from './administracion';
export * from './global';
export * from './clientes';

export const catalogoCategorias: Categoria[] = [
  categoriaAREA01,
  categoriaAREA02,
  categoriaAREA03,
  categoriaAREA04,
  categoriaAREA05,
  categoriaAREA06,
  categoriaAREA07,
  categoriaAREA08,
  categoriaAREA09,
  categoriaAREA10,
  categoriaAREA11,
  categoriaAREA12,
  categoriaAREA13,
  categoriaAREA14,
  categoriaAREA15,
];

import { Categoria } from '../types';
import { categoriaAREA01En } from './operativa/area-01-compras-y-stock';
import { categoriaAREA02En } from './administracion/area-02-finanzas-locales';
import { categoriaAREA03En } from './administracion/area-03-direccion-de-tienda';
import { categoriaAREA04En } from './global/area-04-estrategia-de-grupo';
import { categoriaAREA05En } from './global/area-05-compras-centralizadas';
import { categoriaAREA06En } from './operativa/area-06-stock-compartido';
import { categoriaAREA07En } from './global/area-07-finanzas-de-grupo';
import { categoriaAREA08En } from './global/area-08-identidad-de-marca';
import { categoriaAREA09En } from './clientes/area-09-marketing-y-fidelizacion';
import { categoriaAREA10En } from './global/area-10-cultura-y-conocimiento';
import { categoriaAREA11En } from './operativa/area-11-logistica-y-reparto';
import { categoriaAREA12En } from './administracion/area-12-equipo-y-rrhh';
import { categoriaAREA13En } from './operativa/area-13-seguridad-y-prevencion';
import { categoriaAREA14En } from './clientes/area-14-ventas-y-atencion';
import { categoriaAREA15En } from './operativa/area-15-operaciones-de-tienda';

export * from '../types';
export * from './operativa';
export * from './administracion';
export * from './global';
export * from './clientes';

export const catalogoCategoriasEn: Categoria[] = [
  categoriaAREA01En,
  categoriaAREA02En,
  categoriaAREA03En,
  categoriaAREA04En,
  categoriaAREA05En,
  categoriaAREA06En,
  categoriaAREA07En,
  categoriaAREA08En,
  categoriaAREA09En,
  categoriaAREA10En,
  categoriaAREA11En,
  categoriaAREA12En,
  categoriaAREA13En,
  categoriaAREA14En,
  categoriaAREA15En,
];

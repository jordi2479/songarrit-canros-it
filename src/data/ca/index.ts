import { Categoria } from '../types';
import { categoriaAREA01Ca } from './operativa/area-01-compras-y-stock';
import { categoriaAREA02Ca } from './administracion/area-02-finanzas-locales';
import { categoriaAREA03Ca } from './administracion/area-03-direccion-de-tienda';
import { categoriaAREA04Ca } from './global/area-04-estrategia-de-grupo';
import { categoriaAREA05Ca } from './global/area-05-compras-centralizadas';
import { categoriaAREA06Ca } from './operativa/area-06-stock-compartido';
import { categoriaAREA07Ca } from './global/area-07-finanzas-de-grupo';
import { categoriaAREA08Ca } from './global/area-08-identidad-de-marca';
import { categoriaAREA09Ca } from './clientes/area-09-marketing-y-fidelizacion';
import { categoriaAREA10Ca } from './global/area-10-cultura-y-conocimiento';
import { categoriaAREA11Ca } from './operativa/area-11-logistica-y-reparto';
import { categoriaAREA12Ca } from './administracion/area-12-equipo-y-rrhh';
import { categoriaAREA13Ca } from './operativa/area-13-seguridad-y-prevencion';
import { categoriaAREA14Ca } from './clientes/area-14-ventas-y-atencion';
import { categoriaAREA15Ca } from './operativa/area-15-operaciones-de-tienda';

export * from '../types';
export * from './operativa';
export * from './administracion';
export * from './global';
export * from './clientes';

export const catalogoCategoriasCa: Categoria[] = [
  categoriaAREA01Ca,
  categoriaAREA02Ca,
  categoriaAREA03Ca,
  categoriaAREA04Ca,
  categoriaAREA05Ca,
  categoriaAREA06Ca,
  categoriaAREA07Ca,
  categoriaAREA08Ca,
  categoriaAREA09Ca,
  categoriaAREA10Ca,
  categoriaAREA11Ca,
  categoriaAREA12Ca,
  categoriaAREA13Ca,
  categoriaAREA14Ca,
  categoriaAREA15Ca,
];

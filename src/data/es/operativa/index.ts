import { Categoria } from '../../types';
import { categoriaAREA01 } from './area-01-compras-y-stock';
import { categoriaAREA06 } from './area-06-stock-compartido';
import { categoriaAREA11 } from './area-11-logistica-y-reparto';
import { categoriaAREA13 } from './area-13-seguridad-y-prevencion';
import { categoriaAREA15 } from './area-15-operaciones-de-tienda';

export {
  categoriaAREA01,
  categoriaAREA06,
  categoriaAREA11,
  categoriaAREA13,
  categoriaAREA15,
};

export const categoriasOperativa: Categoria[] = [
  categoriaAREA01,
  categoriaAREA06,
  categoriaAREA11,
  categoriaAREA13,
  categoriaAREA15,
];

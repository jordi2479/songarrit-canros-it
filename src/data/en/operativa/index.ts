import { Categoria } from '../../types';
import { categoriaAREA01En } from './area-01-compras-y-stock';
import { categoriaAREA06En } from './area-06-stock-compartido';
import { categoriaAREA11En } from './area-11-logistica-y-reparto';
import { categoriaAREA13En } from './area-13-seguridad-y-prevencion';
import { categoriaAREA15En } from './area-15-operaciones-de-tienda';

export {
  categoriaAREA01En,
  categoriaAREA06En,
  categoriaAREA11En,
  categoriaAREA13En,
  categoriaAREA15En,
};

export const categoriasOperativaEn: Categoria[] = [
  categoriaAREA01En,
  categoriaAREA06En,
  categoriaAREA11En,
  categoriaAREA13En,
  categoriaAREA15En,
];

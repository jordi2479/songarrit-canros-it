import { Categoria } from '../../types';
import { categoriaAREA01Ca } from './area-01-compras-y-stock';
import { categoriaAREA06Ca } from './area-06-stock-compartido';
import { categoriaAREA11Ca } from './area-11-logistica-y-reparto';
import { categoriaAREA13Ca } from './area-13-seguridad-y-prevencion';
import { categoriaAREA15Ca } from './area-15-operaciones-de-tienda';

export {
  categoriaAREA01Ca,
  categoriaAREA06Ca,
  categoriaAREA11Ca,
  categoriaAREA13Ca,
  categoriaAREA15Ca,
};

export const categoriasOperativaCa: Categoria[] = [
  categoriaAREA01Ca,
  categoriaAREA06Ca,
  categoriaAREA11Ca,
  categoriaAREA13Ca,
  categoriaAREA15Ca,
];

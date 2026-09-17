import { Categoria } from '../../types';
import { categoriaAREA01De } from './area-01-compras-y-stock';
import { categoriaAREA06De } from './area-06-stock-compartido';
import { categoriaAREA11De } from './area-11-logistica-y-reparto';
import { categoriaAREA13De } from './area-13-seguridad-y-prevencion';
import { categoriaAREA15De } from './area-15-operaciones-de-tienda';

export {
  categoriaAREA01De,
  categoriaAREA06De,
  categoriaAREA11De,
  categoriaAREA13De,
  categoriaAREA15De,
};

export const categoriasOperativaDe: Categoria[] = [
  categoriaAREA01De,
  categoriaAREA06De,
  categoriaAREA11De,
  categoriaAREA13De,
  categoriaAREA15De,
];

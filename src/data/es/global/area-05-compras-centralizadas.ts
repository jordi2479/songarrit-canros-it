import { Categoria } from '../../types';

export const categoriaAREA05: Categoria = {
  "id": "area-05",
  "area": "global",
  "titulo": "Compras Centralizadas",
  "propuestas": [
    {
        "id": "global-compras-01",
        "codigo": "global-compras-01",
        "titulo": "Negociador de volumen y tarifa única de grupo para proveedores comunes",
        "descripcion": "Informe consolidado de compras a fabricantes compartidos para unificar condiciones y exigir a los proveedores la mejor tarifa en ambas tiendas.",
        "descripcionLarga": "Detecta si un mismo fabricante (Stanley, Bellota, Sika, etc.) está vendiendo a Palma y a Campos con condiciones o descuentos diferentes. Agrupa el volumen conjunto de facturación de las dos ferreterías para exigir al comercial del proveedor la tarifa máxima por volumen de grupo, igualando los márgenes al alza en ambas tiendas.",
        "ejemplo": "Al cruzar compras anuales, el sistema detecta que Son Garrit compra siliconas con un 38% de descuento y Ca'n Ros con un 32% del mismo distribuidor. Genera un informe comparativo que la dirección utiliza en la reunión anual con el proveedor para unificar el descuento al 40% por volumen agrupado.",
        "viabilidad": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
        "veredicto": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "analítica de compras",
        "estado": "propuesta",
        "area_id": "global",
        "cat_id": "compras"
    },
    {
        "id": "global-compras-02",
        "codigo": "global-compras-02",
        "titulo": "Optimizador de Rappels anuales y bonus por volumen agrupado",
        "descripcion": "Seguimiento en tiempo real de los escalones de compra a proveedores clave para asegurar el cobro de rappels antes de cerrar el ejercicio.",
        "descripcionLarga": "Supervisa el volumen acumulado de compras con aquellos proveedores que ofrecen descuentos por tramos anuales (rappels). Avisa con semanas de antelación si el grupo está cerca de alcanzar el siguiente escalón de bonificación (ej. 3% extra a partir de 25.000 €), recomendando concentrar pedidos para consolidar el bonus económico.",
        "ejemplo": "A mediados de noviembre avisa de que el grupo suma 46.800 € en compras a un fabricante de fontanería, faltando solo 3.200 € para alcanzar el rappel del 4% anual (un retorno directo de 2.000 € limpios). Propone adelantar los pedidos de stock básico de diciembre para asegurar el escalón.",
        "viabilidad": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
        "veredicto": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 2 60 dias",
        "stack": "gestor de rappels",
        "estado": "propuesta",
        "area_id": "global",
        "cat_id": "compras"
    },
    {
        "id": "global-compras-03",
        "codigo": "global-compras-03",
        "titulo": "Regla de surtido coordinado: 70% común de grupo vs 30% específico local",
        "descripcion": "Catálogo clasificado que asegura economías de escala en referencias estándar de alta rotación sin perder el producto diferencial de cada pueblo.",
        "descripcionLarga": "Evita la dispersión caótica de marcas entre tiendas. Clasifica las referencias en dos bloques: el 70% (tornillería, adhesivos, discos, herramientas de mano) se estandariza con las mismas marcas y proveedores para lograr precios imbatibles; el 30% restante se reserva para atender la identidad local (cerrajería técnica en Palma, recambios de riego en Campos).",
        "ejemplo": "Al dar de alta una nueva gama de pinturas, el protocolo estandariza la línea básica de plástica blanca con el fabricante común del grupo con un 15% de ahorro, mientras Ca'n Ros mantiene su esmalte rústico balear específico de gran arraigo en la comarca.",
        "viabilidad": "Sí mediante auditoría del catálogo de productos y familias de ambas tiendas en hoja estructurada no-code.",
        "veredicto": "Sí mediante auditoría del catálogo de productos y familias de ambas tiendas en hoja estructurada no-code.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Medio",
        "acceso": "lectura",
        "fase": "Fase 2 60 dias",
        "stack": "clasificación de catálogo",
        "estado": "propuesta",
        "area_id": "global",
        "cat_id": "compras"
    }
]
};

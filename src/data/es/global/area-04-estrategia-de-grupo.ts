import { Categoria } from '../../types';

export const categoriaAREA04: Categoria = {
  "id": "area-04",
  "area": "global",
  "titulo": "Estrategia de Grupo",
  "propuestas": [
    {
        "id": "global-direccion-01",
        "codigo": "global-direccion-01",
        "titulo": "Cuadro de mando global comparativo Son Garrit (Palma) vs Ca'n Ros (Campos)",
        "descripcion": "Foto ejecutiva comparada de las dos tiendas en una sola página para analizar ventas, ticket medio y familias en paralelo sin llamadas telefónicas.",
        "descripcionLarga": "Resuelve la necesidad de la dirección de ver el grupo completo de un vistazo. Consolida los datos de venta de Palma y Campos bajo los mismos criterios de semana y caja. Permite identificar qué tienda lidera cada familia de producto, dónde se producen caídas de ticket y qué buenas prácticas de una tienda pueden trasladarse a la otra.",
        "ejemplo": "Cada lunes a las 9:15 la dirección revisa una tabla comparada de una página. Muestra que Palma mantiene el ticket profesional en cerrajería mientras Campos lidera en herramienta agrícola y obra exterior. Se detecta una rotura de stock en Campos que Palma tiene cubierta en su almacén central.",
        "viabilidad": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
        "veredicto": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "cuadro de mando consolidado",
        "estado": "propuesta",
        "area_id": "global",
        "cat_id": "direccion"
    },
    {
        "id": "global-direccion-02",
        "codigo": "global-direccion-02",
        "titulo": "Matriz de centralización: regla clara de qué se negocia en grupo y qué en tienda",
        "descripcion": "Protocolo operativo que define por escrito qué compras y procesos se centralizan a nivel de grupo y cuáles conservan total autonomía local.",
        "descripcionLarga": "Evita fricciones y discusiones recurrentes entre los encargados de Palma y Campos sobre compras y decisiones de mostrador. Establece con nitidez que acuerdos de volumen con fabricantes líderes se negocian conjuntamente, mientras que el surtido rural de Campos y el trato cercano de mostrador se gestionan con total libertad en cada local.",
        "ejemplo": "En una revisión trimestral de proveedores, la matriz deja claro que la tarifa de tornillería y pinturas se pacta a nivel grupo para obtener mejor rappel, pero el encargado de Ca'n Ros decide autónomamente qué marcas locales de recambios agrícolas incorporar para sus clientes payeses.",
        "viabilidad": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
        "veredicto": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Medio",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "documentación de procesos",
        "estado": "propuesta",
        "area_id": "global",
        "cat_id": "direccion"
    },
    {
        "id": "global-direccion-03",
        "codigo": "global-direccion-03",
        "titulo": "Comparador de hábitos comerciales y estacionalidad Ciudad vs Rural",
        "descripcion": "Analítica cruzada que identifica las diferencias de compra entre el perfil urbano de Palma y el entorno rural de Campos para optimizar compras estacionales.",
        "descripcionLarga": "Compara el comportamiento del consumidor en ambos entornos geográficos. Revela con semanas de antelación cuándo arranca la temporada de jardín, climatización, podas o reformas en el campo frente a la ciudad, permitiendo abastecer a Ca'n Ros en el momento justo y transferir excedentes a Palma cuando la temporada cambia.",
        "ejemplo": "A mediados de febrero, el comparador muestra que la demanda de mallas de sombreo y tuberías de goteo en Campos se anticipa cuatro semanas a la demanda urbana de Palma. Permite adelantar el pedido conjunto a fabricante y asegurar stock al mejor precio antes de roturas de temporada.",
        "viabilidad": "Sí mediante cruce de históricos de venta mensual por familias de ambas tiendas. Proceso analítico puro.",
        "veredicto": "Sí mediante cruce de históricos de venta mensual por familias de ambas tiendas. Proceso analítico puro.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 2 60 dias",
        "stack": "analítica estacional",
        "estado": "propuesta",
        "area_id": "global",
        "cat_id": "direccion"
    }
]
};

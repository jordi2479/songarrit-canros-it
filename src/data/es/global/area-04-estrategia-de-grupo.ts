import { Categoria } from '../../types';

export const categoriaAREA04: Categoria = {
    "id": "area-04",
    "area": "global",
    "titulo": "Estrategia de Grupo",
    "propuestas": [
        {
            "id": "global-direccion-01",
            "codigo": "global-direccion-01",
            "titulo": "Comparador de Tiendas",
            "descripcion": "**Foto ejecutiva comparada** de las dos tiendas en una sola página para analizar ventas, ticket medio y familias en paralelo sin llamadas.",
            "descripcionLarga": "Resuelve la necesidad de la dirección de ver el grupo completo de un vistazo. **Consolida los datos de venta de Palma y Campos** bajo los mismos criterios de semana y caja. Permite identificar qué tienda lidera cada familia de producto, dónde se producen caídas de ticket y **qué buenas prácticas de una tienda pueden trasladarse a la otra**.",
            "ejemplo": "Cada lunes a las 9:15 la dirección revisa una tabla comparada: **Palma mantiene el ticket profesional en cerrajería** mientras **Campos lidera en herramienta agrícola y obra exterior**. Se detecta una rotura de stock en Campos que Palma tiene cubierta en su almacén central.",
            "viabilidad": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
            "veredicto": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (Palma + Campos)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Extracción unificada:** Exportar los volcados de ventas y tickets semanales de ambos sistemas TPV en formato estandarizado.",
                "**Homologación de familias:** Mapear las categorías principales para que fontanería, pintura y tornillería se comparen bajo los mismos criterios.",
                "**Ficha comparativa:** Diseñar la vista ejecutiva de una página con evolución de ventas, margen y ticket medio por tienda.",
                "**Revisión de sinergias:** Sesión mensual para identificar oportunidades de traspaso de producto y refuerzo comercial mutuo."
            ]
        },
        {
            "id": "global-direccion-02",
            "codigo": "global-direccion-02",
            "titulo": "Reglas de Compra",
            "descripcion": "**Protocolo operativo por escrito** que define qué compras y procesos se centralizan a nivel de grupo y cuáles conservan total autonomía local.",
            "descripcionLarga": "Evita fricciones y discusiones recurrentes entre los encargados de Palma y Campos sobre compras y decisiones de mostrador. **Establece con nitidez qué acuerdos de volumen con fabricantes líderes se negocian conjuntamente**, mientras que **el surtido rural de Campos y el trato cercano se gestionan con total libertad local**.",
            "ejemplo": "En una revisión de proveedores, la matriz deja claro que **la tarifa de tornillería y pinturas se pacta a nivel grupo para obtener mejor rappel**, pero el encargado de Ca'n Ros **decide autónomamente qué marcas locales de recambios agrícolas incorporar** para sus clientes payeses.",
            "viabilidad": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
            "veredicto": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Workspace / Documentos"
            ],
            "softwareOpcional": [
                "Google Gemini",
                "Claude",
                "Microsoft Word"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Mapa de competencias:** Listar todas las decisiones operativas: compras de volumen, proveedores locales, fijación de PVP y horarios.",
                "**Matriz de responsabilidades:** Definir por escrito qué decisiones son de consenso grupo y cuáles son 100% autónomas de cada tienda.",
                "**Documento consensuado:** Redactar una guía clara de 2 páginas aprobada por la dirección de Son Garrit y Ca'n Ros.",
                "**Revisión anual:** Evaluar el funcionamiento del protocolo en el comité de dirección anual para ajustar fricciones."
            ]
        },
        {
            "id": "global-direccion-03",
            "codigo": "global-direccion-03",
            "titulo": "Demanda Palma-Campos",
            "descripcion": "**Analítica cruzada de demanda** que identifica diferencias de compra entre el perfil urbano de Palma y el entorno rural de Campos.",
            "descripcionLarga": "Compara el comportamiento del consumidor en ambos entornos geográficos. **Revela con semanas de antelación cuándo arranca la temporada de jardín, climatización, podas o reformas** en el campo frente a la ciudad, permitiendo abastecer a Ca'n Ros en el momento justo y **transferir excedentes a Palma cuando la temporada cambia**.",
            "ejemplo": "A mediados de febrero, el comparador muestra que **la demanda de mallas de sombreo y tuberías de goteo en Campos se anticipa cuatro semanas** a la demanda urbana de Palma. Permite **adelantar el pedido conjunto a fabricante y asegurar stock al mejor precio**.",
            "viabilidad": "Sí mediante cruce de históricos de venta mensual por familias de ambas tiendas. Proceso analítico puro.",
            "veredicto": "Sí mediante cruce de históricos de venta mensual por familias de ambas tiendas. Proceso analítico puro.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Volcado desde ERP/TPV (Familias)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "ChatGPT Plus"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Histórico estacional:** Analizar las ventas de los últimos 2 años por semanas para identificar el desfase de demanda campo-ciudad.",
                "**Calendario de anticipación:** Fijar las fechas óptimas de aprovisionamiento para cada tienda según su calendario real de temporada.",
                "**Pedidos coordinados:** Agrupar los pedidos a fabricantes anticipando la entrada escalonada de mercancía entre ambas sedes.",
                "**Balance de temporada:** Transferir el sobrante de stock estacional entre tiendas para evitar inmovilizados al cierre de campaña."
            ]
        }
    ]
};

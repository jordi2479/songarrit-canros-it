import { Categoria } from '../../types';

export const categoriaAREA05: Categoria = {
    "id": "area-05",
    "area": "global",
    "titulo": "Compras Centralizadas",
    "propuestas": [
        {
            "id": "global-compras-01",
            "codigo": "global-compras-01",
            "titulo": "Tarifa Única Grupo",
            "descripcion": "**Informe consolidado de compras** a fabricantes compartidos para unificar condiciones y exigir a los proveedores la mejor tarifa de grupo.",
            "descripcionLarga": "Detecta si un mismo fabricante (Stanley, Bellota, Sika, etc.) está vendiendo a Palma y a Campos con condiciones o descuentos diferentes. **Agrupa el volumen conjunto de facturación de las dos ferreterías para exigir la tarifa máxima por volumen de grupo**, igualando los márgenes al alza en ambas tiendas.",
            "ejemplo": "Al cruzar compras anuales, el sistema detecta que **Son Garrit compra siliconas con un 38% de descuento y Ca'n Ros con un 32%** del mismo distribuidor. Genera un informe que la dirección utiliza en la reunión anual para **unificar el descuento al 40% por volumen agrupado**.",
            "viabilidad": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
            "veredicto": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Microsoft Excel (Tarifas proveedor)",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Consolidación de compras:** Consolidar el volumen anual de compras agrupadas de Son Garrit y Ca'n Ros para los 15 principales proveedores.",
                "**Reunión con proveedores:** Solicitar reunión conjunta con los delegados comerciales presentando la cifra global del grupo.",
                "**Tarifa unificada:** Negociar un tramo de descuento unificado y condiciones de portes compartidos aplicables a ambos centros.",
                "**Actualización en cajas:** Actualizar las fichas de tarifas y condiciones de compra en los sistemas de ambas ferreterías."
            ]
        },
        {
            "id": "global-compras-02",
            "codigo": "global-compras-02",
            "titulo": "Optimizador de Rappels",
            "descripcion": "**Seguimiento en tiempo real de rappels** a proveedores clave para asegurar el cobro de bonificaciones anuales antes del cierre de ejercicio.",
            "descripcionLarga": "Supervisa el volumen acumulado de compras con aquellos proveedores que ofrecen descuentos por tramos anuales (rappels). **Avisa con semanas de antelación si el grupo está cerca de alcanzar el siguiente escalón de bonificación** (ej. 3% extra a partir de 25.000 €), recomendando concentrar pedidos para consolidar el bonus.",
            "ejemplo": "A mediados de noviembre avisa de que el grupo suma 46.800 € en compras a un fabricante de fontanería, **faltando solo 3.200 € para alcanzar el rappel del 4% anual (un retorno directo de 2.000 € limpios)**. Propone adelantar pedidos básicos de diciembre para asegurar el escalón.",
            "viabilidad": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
            "veredicto": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Microsoft Excel (.xlsx)",
                "Volcado desde ERP/TPV (Compras anuales)",
                "Google NotebookLM"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Claude"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Registro de contratos:** Recopilar los contratos y acuerdos anuales de rappel por volumen firmados con los fabricantes clave.",
                "**Seguimiento mensual:** Montar una hoja de seguimiento del acumulado mensual de compras frente al umbral necesario para cobrar.",
                "**Alerta a 45 días:** Emitir una alerta 45 días antes del cierre de año si faltan pocas compras para alcanzar el escalón de bonificación.",
                "**Liquidación y cobro:** Gestionar la reclamación y cobro puntual de las liquidaciones de rappel vencidas a principios de año."
            ]
        },
        {
            "id": "global-compras-03",
            "codigo": "global-compras-03",
            "titulo": "Coordinador de Surtido",
            "descripcion": "**Catálogo clasificado de surtido** que asegura economías de escala en referencias estándar de alta rotación sin perder el producto local.",
            "descripcionLarga": "Evita la dispersión caótica de marcas entre tiendas. Clasifica las referencias en dos bloques: **el 70% (tornillería, adhesivos, discos, herramientas) se estandariza con las mismas marcas para lograr precios imbatibles**; el 30% restante se reserva para atender la identidad local de cada comarca.",
            "ejemplo": "Al dar de alta una nueva gama de pinturas, el protocolo **estandariza la línea básica de plástica blanca con el fabricante común con un 15% de ahorro**, mientras **Ca'n Ros mantiene su esmalte rústico balear específico** de gran arraigo en la comarca.",
            "viabilidad": "Sí mediante auditoría del catálogo de productos y familias de ambas tiendas en hoja estructurada no-code.",
            "veredicto": "Sí mediante auditoría del catálogo de productos y familias de ambas tiendas en hoja estructurada no-code.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Microsoft Excel",
                "Volcado desde ERP/TPV (Catálogo)"
            ],
            "softwareOpcional": [
                "Google Workspace",
                "Claude Code"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Auditoría de marcas:** Identificar duplicidades de proveedores para productos idénticos en ambas tiendas.",
                "**Estandarización 70/30:** Acordar el catálogo de marcas prioritarias de grupo manteniendo libertad en producto local.",
                "**Pedidos agrupados:** Establecer una agenda compartida de pedidos semanales para alcanzar pedidos mínimos sin portes.",
                "**Revisión periódica:** Evaluar el ahorro en costes de compra y el cumplimiento de las familias estandarizadas."
            ]
        }
    ]
};

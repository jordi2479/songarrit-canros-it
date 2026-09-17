import { Categoria } from '../../types';

export const categoriaAREA09: Categoria = {
    "id": "area-09",
    "area": "clientes",
    "titulo": "Marketing & Fidelización",
    "propuestas": [
        {
            "id": "clientes-marketing-01",
            "codigo": "clientes-marketing-01",
            "titulo": "Gestor de Reseñas",
            "descripcion": "**Generador de respuestas a reseñas** en internet que redacta contestaciones educadas, personalizadas y rápidas a las opiniones públicas.",
            "descripcionLarga": "Evita dejar reseñas de clientes sin contestar por falta de tiempo en mostrador. Cuando entra una reseña en Google, **el asistente redacta una propuesta de respuesta con tono agradecido y profesional para las positivas, y con actitud constructiva para las negativas**, lista para validar en un clic.",
            "ejemplo": "Un cliente deja 5 estrellas felicitando el asesoramiento en bombas de riego en Campos. El sistema redacta: '¡Muchas gracias Miquel! Nos alegra que la bomba funcione a la perfección en tu finca'. **El encargado solo pulsa validar y enviar**.",
            "viabilidad": "Sí con asistente no-code conectado a la bandeja de Google Business. El encargado siempre aprueba el texto antes de publicar.",
            "veredicto": "Sí con asistente no-code conectado a la bandeja de Google Business. El encargado siempre aprueba el texto antes de publicar.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Business Profile",
                "Google Gemini / ChatGPT",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "09",
            "pasos": [
                "**Clasificación de clientes:** Clasificar la base de datos de clientes con CIF en 5 gremios clave: fontanería, electricidad, obra, pintura y madera.",
                "**Bandeja de opiniones:** Monitorizar las nuevas valoraciones recibidas en Google Maps de ambas tiendas cada mañana.",
                "**Borrador asistido:** Generar automáticamente el borrador de respuesta en el idioma del cliente (catalán, castellano, inglés o alemán).",
                "**Publicación en 1 clic:** El responsable de tienda aprueba la respuesta desde el móvil en menos de 10 segundos."
            ]
        },
        {
            "id": "clientes-marketing-02",
            "codigo": "clientes-marketing-02",
            "titulo": "Campañas Estacionales",
            "descripcion": "**Propuestas de comunicación oportunas** antes de momentos clave de compra (poda, siembra, piscina, frío o ferias del pueblo).",
            "descripcionLarga": "Planifica con antelación las promociones estacionales del año. **Dos semanas antes de momentos críticos en Mallorca** (campaña de estufas en noviembre, podas en enero, piscina en mayo o ferias patronales), **prepara el texto para WhatsApp, cartelería de escaparate y publicación en redes**.",
            "ejemplo": "A principios de mayo genera la campaña 'Prepara tu piscina antes del calor': **revisa stock de cloro, bombas y limpiafondos** y prepara el cartel de mostrador y un mensaje para el canal de WhatsApp de clientes.",
            "viabilidad": "Sí mediante calendario de estacionalidad y catálogo de productos clave. No requiere presupuesto de publicidad pagada.",
            "veredicto": "Sí mediante calendario de estacionalidad y catálogo de productos clave. No requiere presupuesto de publicidad pagada.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Instagram / Redes",
                "Google Gemini / ChatGPT"
            ],
            "softwareOpcional": [
                "Photoshop / Canva",
                "Meta Ads"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "09",
            "pasos": [
                "**Calendario estacional:** Acordar las 6 campañas anuales prioritarias y los productos estrella con margen garantizado.",
                "**Canal de WhatsApp:** Configurar la cuenta de WhatsApp Business oficial con listas de difusión segmentadas por gremio.",
                "**Cartelería coordinada:** Generar la cartelería física de mostrador y los mensajes digitales con 15 días de anticipación.",
                "**Medición de ventas:** Comprobar la facturación de las familias promocionadas durante los días posteriores a cada comunicación."
            ]
        },
        {
            "id": "clientes-marketing-03",
            "codigo": "clientes-marketing-03",
            "titulo": "Liquidación de Sobrestock",
            "descripcion": "**Identificación de artículos parados** más de 180 días en almacén para empaquetarlos en lotes de salida rápida y liberar liquidez.",
            "descripcionLarga": "Evita que el dinero quede atrapado en estanterías en productos descatalogados o que han perdido la temporada. **Localiza las referencias sin ventas en 6 meses y propone un lote o descuento de salida** para colocar en la cesta de oportunidad del mostrador o comunicar a profesionales.",
            "ejemplo": "Localiza 14 cajas de calefactores halógenos y 6 deshumidificadores de invierno parados en abril. **Sugiere un lote con 35% de descuento para liquidar en la zona de paso del mostrador y liberar 1.100 € de stock** antes del verano.",
            "viabilidad": "Sí mediante informe de stock sin rotación de más de 180 días desde el TPV. Acción comercial interna.",
            "veredicto": "Sí mediante informe de stock sin rotación de más de 180 días desde el TPV. Acción comercial interna.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Volcado desde ERP/TPV (Inmovilizado)",
                "WhatsApp Business",
                "Photoshop / Canva"
            ],
            "softwareOpcional": [
                "Microsoft Excel",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "09",
            "pasos": [
                "**Filtro de inmovilizados:** Extraer mensualmente los artículos con stock positivo y cero rotación en los últimos 180 días.",
                "**Diseño de oferta:** Fijar el descuento de liquidación o crear packs de oportunidad profesional para salida rápida.",
                "**Exposición prioritaria:** Ubicar los lotes en la zona de paso de caja con cartelería de precio de ocasión muy visible.",
                "**Recuperación de caja:** Monitorear el importe recuperado en tesorería y el espacio de lineal liberado para producto nuevo."
            ]
        }
    ]
};

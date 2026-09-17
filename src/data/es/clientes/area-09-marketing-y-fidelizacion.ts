import { Categoria } from '../../types';

export const categoriaAREA09: Categoria = {
    "id": "area-09",
    "area": "clientes",
    "titulo": "Marketing & Fidelización",
    "propuestas": [
        {
            "id": "clientes-marketing-01",
            "codigo": "clientes-marketing-01",
            "titulo": "Asistente de respuesta profesional a reseñas de Google Maps",
            "descripcion": "Generador de respuestas educadas, personalizadas y rápidas a las valoraciones públicas de clientes en internet.",
            "descripcionLarga": "Evita dejar reseñas de clientes sin contestar por falta de tiempo en mostrador. Cuando entra una reseña en Google, el asistente redacta una propuesta de respuesta con tono agradecido y profesional para las positivas, y con actitud constructiva y orientada a solucionar el problema para las negativas, lista para validar en un clic.",
            "ejemplo": "Un cliente deja 5 estrellas felicitando el asesoramiento en bombas de riego en Campos. El sistema redacta: \"¡Muchas gracias Miquel! Nos alegra que la bomba funcione a la perfección en tu finca. Aquí estamos para lo que necesites\". El encargado solo pulsa enviar.",
            "viabilidad": "Sí con asistente no-code conectado a la bandeja de Google Business. El encargado siempre aprueba el texto antes de publicar.",
            "veredicto": "Sí con asistente no-code conectado a la bandeja de Google Business. El encargado siempre aprueba el texto antes de publicar.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "asistente de reputación",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "marketing",
            "pasos": [
                "Clasificar la base de datos de clientes con CIF en 5 gremios clave: fontanería, electricidad, construcción, pintura y carpintería.",
                "Limpiar y actualizar teléfonos móviles de contacto de jefes de obra y oficiales de compras.",
                "Asignar condiciones y tarifas especiales por categoría gremial en las fichas de cliente del ERP.",
                "Revisar trimestralmente las cuentas inactivas para contactar comercialmente antes de perder la cuenta."
            ]
        },
        {
            "id": "clientes-marketing-02",
            "codigo": "clientes-marketing-02",
            "titulo": "Generador de campañas hiperlocales para picos estacionales",
            "descripcion": "Propuestas de comunicación oportunas antes de momentos clave de compra (poda, siembra, inicio de obra, frío o ferias del pueblo).",
            "descripcionLarga": "Planifica con antelación las promociones estacionales del año. Dos semanas antes de momentos críticos en Mallorca (campaña de estufas en noviembre, podas en enero, piscina en mayo o ferias patronales), prepara el texto para WhatsApp, cartelería de escaparate y publicación en redes con los productos que van a buscarse.",
            "ejemplo": "A principios de mayo genera la campaña \"Prepara tu piscina antes del calor\": revisa stock de cloro, bombas y limpiafondos y prepara el cartel de mostrador y un mensaje para el canal de WhatsApp de clientes.",
            "viabilidad": "Sí mediante calendario de estacionalidad y catálogo de productos clave. No requiere presupuesto de publicidad pagada.",
            "veredicto": "Sí mediante calendario de estacionalidad y catálogo de productos clave. No requiere presupuesto de publicidad pagada.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "planificador estacional",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "marketing",
            "pasos": [
                "Crear la cuenta oficial de WhatsApp Business del grupo con mensajes de bienvenida y respuestas predeterminadas.",
                "Configurar listas de difusión segmentadas por gremio con consentimiento previo (RGPD).",
                "Programar envíos quincenales breves: una oferta técnica concreta o la llegada de un material muy demandado.",
                "Medir las ventas directas y pedidos cerrados por WhatsApp en los 3 días posteriores a cada comunicación."
            ]
        },
        {
            "id": "clientes-marketing-03",
            "codigo": "clientes-marketing-03",
            "titulo": "Liquidación ágil de sobrestock estacional y producto inmovilizado",
            "descripcion": "Identificación de artículos parados en almacén más de 180 días para empaquetarlos en lotes de salida rápida y liberar liquidez.",
            "descripcionLarga": "Evita que el dinero quede atrapado en estanterías en productos descatalogados o que han perdido la temporada. Localiza las referencias sin ventas en 6 meses y propone un lote o descuento de salida para colocar en la cesta de oportunidad del mostrador o comunicar a profesionales que puedan necesitarlo.",
            "ejemplo": "Localiza 14 cajas de calefactores halógenos y 6 deshumidificadores de invierno parados en abril. Sugiere un lote con 35% de descuento para liquidar en la zona de paso del mostrador y liberar 1.100 € de stock antes del verano.",
            "viabilidad": "Sí mediante informe de stock sin rotación de más de 180 días desde el TPV. Acción comercial interna.",
            "veredicto": "Sí mediante informe de stock sin rotación de más de 180 días desde el TPV. Acción comercial interna.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "gestión de mermas/salidas",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "marketing",
            "pasos": [
                "Diseñar los tramos de consumo anual (ej. Plata, Oro, Platino) y las ventajas asociadas (descuento extra, transporte prioritario).",
                "Configurar en el ERP o panel comercial el cálculo acumulado del gasto anual de cada cliente profesional.",
                "Entregar a principio de año la acreditación de nivel a cada profesional con sus condiciones exclusivas.",
                "Realizar seguimiento a mitad de año con aquellos clientes que están cerca de subir de nivel de bonificación."
            ]
        }
    ]
};

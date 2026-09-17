import { Categoria } from '../../types';

export const categoriaAREA14: Categoria = {
    "id": "area-14",
    "area": "clientes",
    "titulo": "Ventas & Atención",
    "propuestas": [
        {
            "id": "clientes-ventas-01",
            "codigo": "clientes-ventas-01",
            "titulo": "Asistente de WhatsApp para consultas de stock, precios y horarios",
            "descripcion": "Canal automatizado para que los clientes consulten disponibilidad y apertura fuera de horario sin saturar el teléfono de mostrador.",
            "descripcionLarga": "Descongestiona las líneas telefónicas en horas punta de mostrador. Atiende preguntas recurrentes de clientes mediante WhatsApp Business: si la tienda está abierta un sábado por la tarde, si hay cemento disponible o la dirección exacta. Si la consulta es técnica o de presupuesto, la deriva limpiamente a un dependiente.",
            "ejemplo": "Un cliente escribe un domingo a las 18:00 por WhatsApp: \"¿Abrís mañana a las 7:30 y tenéis sacos de mortero?\". El asistente contesta al segundo: \"Hola, abrimos a las 7:30 y tenemos mortero en stock en Ca'n Ros Campos. ¡Te esperamos!\".",
            "viabilidad": "Sí mediante bot oficial de WhatsApp Business configurado con respuestas predeterminadas. Cero coste de programación compleja.",
            "veredicto": "Sí mediante bot oficial de WhatsApp Business configurado con respuestas predeterminadas. Cero coste de programación compleja.",
            "facilidad": "Alto",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "WhatsApp Business automatizado",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "ventas",
            "pasos": [
                "Estandarizar la plantilla de presupuesto técnico con validez máxima explícita (15 o 30 días) y condiciones claras.",
                "Configurar un estado visual para cada presupuesto: emitido, visto, en negociación, aceptado o descartado.",
                "Implementar un recordatorio automático a los 5 días para que el comercial llame al cliente y resuelva posibles dudas.",
                "Calcular la tasa de conversión mensual de presupuestos emitidos frente a presupuestos facturados."
            ]
        },
        {
            "id": "clientes-ventas-02",
            "codigo": "clientes-ventas-02",
            "titulo": "Generador exprés de presupuestos para profesionales de obra",
            "descripcion": "Herramienta ágil para redactar presupuestos de materiales en PDF en 3 minutos y enviarlos al WhatsApp del contratista en el acto.",
            "descripcionLarga": "Acaba con la fuga de ventas que se produce cuando un profesional pide precio de una lista de 15 materiales y se le dice \"déjame el teléfono y te lo preparo luego\". El dependiente introduce las referencias y cantidades en una plantilla ágil y el sistema genera el presupuesto en PDF con PVP profesional y validez de 15 días listo para enviar.",
            "ejemplo": "Un fontanero pide precio para instalar 80 metros de tubo multicapa, codos y llaves de paso. El dependiente genera el presupuesto oficial en 2 minutos desde el terminal y se lo envía al WhatsApp antes de que el profesional salga por la puerta.",
            "viabilidad": "Sí mediante plantilla ágil conectada a la lista de precios y referencias vigentes.",
            "veredicto": "Sí mediante plantilla ágil conectada a la lista de precios y referencias vigentes.",
            "facilidad": "Alto",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "generador de presupuestos",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "ventas",
            "pasos": [
                "Estructurar las 3 tarifas profesionales del grupo vinculadas al volumen de compra o gremio del profesional.",
                "Cargar las tarifas netas en el TPV para que al teclear el NIF se aplique el precio correcto sin margen de error humano.",
                "Bloquear descuentos manuales no autorizados en caja que puedan erosionar el margen mínimo fijado.",
                "Auditar mensualmente las ventas con descuento especial para comprobar que se cumplen las directrices de rentabilidad."
            ]
        },
        {
            "id": "clientes-ventas-03",
            "codigo": "clientes-ventas-03",
            "titulo": "Asistente de atención multilingüe para clientes extranjeros (inglés y alemán)",
            "descripcion": "Herramienta de traducción y soporte en mostrador para atender con fluidez a residentes y propietarios de fincas en Mallorca.",
            "descripcionLarga": "En el sur de Mallorca (Campos, Santanyí, Cala d'Or), gran parte del gasto en reformas proviene de residentes alemanes y británicos. Este asistente permite al dependiente traducir términos técnicos ferreteros en tiempo real (válvulas, tipos de broca, tratamiento de piscinas) o generar presupuestos en su idioma nativo, multiplicando las ventas de alto ticket.",
            "ejemplo": "Un propietario alemán en Ca'n Ros explica en su idioma que busca un racor para conectar un sistema de riego a un depósito de 1.000 litros. El dependiente usa el asistente de voz y le muestra en pantalla la solución exacta con el precio en alemán.",
            "viabilidad": "Sí mediante terminal o tablet de mostrador con traducción técnica especializada en suministros de construcción.",
            "veredicto": "Sí mediante terminal o tablet de mostrador con traducción técnica especializada en suministros de construcción.",
            "facilidad": "Alto",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "asistente multilingüe",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "ventas",
            "pasos": [
                "Instalar un punto de recogida de valoraciones sencillo en mostrador (ej. código QR o tableta rápida de satisfacción).",
                "Establecer el protocolo de gestión de incidencias: contacto con el cliente insatisfecho en menos de 24 horas laborables.",
                "Documentar la solución ofrecida (abono, sustitución inmediata o visita técnica del proveedor a la obra).",
                "Analizar trimestralmente las quejas recurrentes para subsanar fallos de servicio o de calidad de producto."
            ]
        }
    ]
};

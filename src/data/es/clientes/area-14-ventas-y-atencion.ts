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
            "dificultad": "Baja",
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
            "titulo": "Tarifa profesional unificada y condiciones especiales por gremio",
            "descripcion": "Estructuración homogénea de descuentos para profesionales sobre catálogo exportado, evitando errores manuales en el mostrador.",
            "descripcionLarga": "Define reglas claras de margen y descuentos por gremio (fontanería, electricidad, construcción). Se trabaja y simula sobre una copia de tarifas exportada para verificar el margen resultante antes de validar el fichero final para su carga en las cajas.",
            "ejemplo": "Un autónomo de reformas compra habitualmente tubería y grifería. El sistema aplica automáticamente su tramo de tarifa profesional pactado (margen garantizado del 28%), evitando que el dependiente tenga que calcular descuentos de cabeza o pedir autorización verbal.",
            "viabilidad": "Sí mediante elaboración de tabla de tarifas validada sobre copia Excel/CSV antes de cargar el fichero maestro en el TPV.",
            "veredicto": "Sí mediante elaboración de tabla de tarifas validada sobre copia Excel/CSV antes de cargar el fichero maestro en el TPV.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "generador de presupuestos",
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "ventas",
            "pasos": [
                "Exportar la lista actual de precios de coste y venta a una copia de trabajo.",
                "Modelar los 3 tramos de descuento por volumen y gremio garantizando el margen bruto mínimo.",
                "Validar el fichero resultante con la dirección comercial antes de cualquier actualización.",
                "Cargar la tarifa definitiva en el TPV fuera de horario comercial mediante el procedimiento oficial de importación."
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
            "dificultad": "Baja",
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

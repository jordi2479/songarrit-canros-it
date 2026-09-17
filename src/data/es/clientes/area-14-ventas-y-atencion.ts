import { Categoria } from '../../types';

export const categoriaAREA14: Categoria = {
    "id": "area-14",
    "area": "clientes",
    "titulo": "Ventas & Atención",
    "propuestas": [
        {
            "id": "clientes-ventas-01",
            "codigo": "clientes-ventas-01",
            "titulo": "Asistente de WhatsApp",
            "descripcion": "**Canal automatizado de WhatsApp** para que los clientes consulten disponibilidad y apertura fuera de horario sin saturar el mostrador.",
            "descripcionLarga": "Descongestiona las líneas telefónicas en horas punta de mostrador. **Atiende preguntas recurrentes de clientes mediante WhatsApp Business**: si la tienda está abierta un sábado por la tarde, si hay cemento disponible o la dirección exacta. Si la consulta es técnica, la deriva limpiamente a un dependiente.",
            "ejemplo": "Un cliente escribe un domingo a las 18:00 por WhatsApp: '¿Abrís mañana a las 7:30 y tenéis sacos de mortero?'. **El asistente contesta al segundo confirmando horario y existencias**, asegurando que el cliente acuda a primera hora.",
            "viabilidad": "Sí mediante bot oficial de WhatsApp Business configurado con respuestas predeterminadas. Cero coste de programación compleja.",
            "veredicto": "Sí mediante bot oficial de WhatsApp Business configurado con respuestas predeterminadas. Cero coste de programación compleja.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Gemini",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Volcado desde ERP/TPV (Precios/Stock)",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Configuración de bot:** Programar respuestas automáticas para las 5 preguntas más repetidas: horarios, festivos, ubicación y servicios.",
                "**Consulta de existencias:** Habilitar respuesta sobre disponibilidad de las 20 familias básicas consultando la réplica de stock.",
                "**Desvío inteligente:** Transferir automáticamente los mensajes que requieran presupuesto o consulta compleja al vendedor de guardia.",
                "**Horarios de atención:** Informar con amabilidad del horario de atención personal cuando se escriba fuera de la jornada comercial."
            ]
        },
        {
            "id": "clientes-ventas-02",
            "codigo": "clientes-ventas-02",
            "titulo": "Tarifa Profesional",
            "descripcion": "**Estructuración homogénea de descuentos** para profesionales sobre catálogo exportado, evitando errores manuales en el mostrador.",
            "descripcionLarga": "Define reglas claras de margen y descuentos por gremio (fontanería, electricidad, construcción). **Se trabaja y simula sobre una copia de tarifas exportada para verificar el margen resultante** antes de validar el fichero final para su carga en las cajas de ambas tiendas.",
            "ejemplo": "Un autónomo de reformas compra habitualmente tubería y grifería. **El sistema aplica automáticamente su tramo de tarifa profesional pactado (margen garantizado del 28%)**, evitando que el dependiente tenga que calcular descuentos de cabeza.",
            "viabilidad": "Sí mediante elaboración de tabla de tarifas validada sobre copia Excel/CSV antes de cargar el fichero maestro en el TPV.",
            "veredicto": "Sí mediante elaboración de tabla de tarifas validada sobre copia Excel/CSV antes de cargar el fichero maestro en el TPV.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Volcado desde ERP/TPV (Tarifas gremio)",
                "Microsoft Excel (.xlsx)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Google NotebookLM",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Exportación de tarifas:** Exportar la lista actual de precios de coste y venta de ambas tiendas a una copia de trabajo.",
                "**Modelado por gremio:** Definir los 3 tramos de descuento por volumen y gremio garantizando el margen bruto mínimo fijado.",
                "**Simulación de impacto:** Verificar el margen resultante antes de aplicar las nuevas condiciones de forma definitiva.",
                "**Carga programada:** Importar la tarifa validada en los TPVs fuera de horario comercial mediante el procedimiento oficial."
            ]
        },
        {
            "id": "clientes-ventas-03",
            "codigo": "clientes-ventas-03",
            "titulo": "Atención Multilingüe",
            "descripcion": "**Herramienta de traducción en mostrador** para atender con fluidez consultas técnicas de residentes y propietarios de fincas en Mallorca.",
            "descripcionLarga": "En el sur de Mallorca gran parte del gasto en reformas proviene de residentes alemanes y británicos. **Este asistente permite al dependiente traducir términos técnicos ferreteros en tiempo real** (válvulas, tipos de broca, tratamiento de piscinas) o generar presupuestos en su idioma nativo, **multiplicando las ventas de alto ticket**.",
            "ejemplo": "Un propietario alemán en Ca'n Ros explica en su idioma que busca un racor para conectar un sistema de riego a un depósito de 1.000 litros. **El dependiente usa el asistente de voz y le muestra en pantalla la solución exacta con el precio en alemán**.",
            "viabilidad": "Sí mediante terminal o tablet de mostrador con traducción técnica especializada en suministros de construcción.",
            "veredicto": "Sí mediante terminal o tablet de mostrador con traducción técnica especializada en suministros de construcción.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Gemini",
                "WhatsApp Business",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude",
                "DeepL / Web"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Glosario ferretero:** Crear un diccionario técnico con las 100 piezas y herramientas más consultadas en alemán, inglés y catalán.",
                "**Asistente en mostrador:** Configurar acceso directo a traductor de voz en tablet o smartphone corporativo de mostrador.",
                "**Plantillas bilingües:** Disponer de fichas y presupuestos en formato bilingüe para clientes extranjeros de alto importe.",
                "**Formación básica:** Enseñar al equipo de tienda las frases de cortesía y vocabulario clave para atender con amabilidad y soltura."
            ]
        }
    ]
};

import { Categoria } from '../../types';

export const categoriaAREA10: Categoria = {
    "id": "area-10",
    "area": "global",
    "titulo": "Cultura & Conocimiento",
    "propuestas": [
        {
            "id": "global-personas-01",
            "codigo": "global-personas-01",
            "titulo": "Asistente Técnico Producto",
            "descripcion": "**Buscador inteligente para mostrador** que resuelve en segundos dudas técnicas complejas de fontanería, cerrajería o químicos.",
            "descripcionLarga": "Apoya a los dependientes más jóvenes o con menos experiencia cuando un cliente hace una consulta técnica difícil en mostrador. **En lugar de interrumpir al veterano o decir 'no lo sé', el dependiente consulta en el terminal**: compatibilidad de racores, rendimiento de impermeabilizantes o equivalencia de bombines.",
            "ejemplo": "Un cliente pregunta qué imprimación aplicar sobre baldosa vieja antes de poner mortero cola especial. El dependiente consulta al asistente en 15 segundos y **responde con seguridad técnica la referencia exacta disponible en el pasillo 3**.",
            "viabilidad": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "veredicto": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Google NotebookLM (Manuales técnicos)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Google Gemini",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Base de consultas:** Crear una base de datos digital sencilla con fichas técnicas, dosificaciones y guías de aplicación.",
                "**Accesos rápidos:** Instalar accesos directos de búsqueda rápida en los terminales de mostrador de ambas tiendas.",
                "**Top 20 dudas:** Alimentar la base con las 20 dudas técnicas más complejas que suelen plantear los clientes.",
                "**Aportes del equipo:** Incentivar a los empleados más veteranos para que incorporen trucos de oficio y soluciones prácticas."
            ]
        },
        {
            "id": "global-personas-02",
            "codigo": "global-personas-02",
            "titulo": "Directorio de Especialistas",
            "descripcion": "**Guía rápida de especialistas internos** que identifica qué empleado domina cada oficio (bombas, soldadura, mandos de garaje o riego).",
            "descripcionLarga": "Aprovecha la sabiduría acumulada en los mostradores de Palma y Campos. Permite que cuando entra un encargo o avería muy especializada, **el mostrador sepa al instante a qué compañero de la otra tienda consultar por teléfono o WhatsApp** para dar una solución impecable al cliente en el acto.",
            "ejemplo": "En Campos entra un cliente con un mando de garaje antiguo descatalogado. El dependiente mira el directorio, ve que **Tomeu en Palma es el experto en mandos raros, le envía una foto por chat y confirma el duplicado en 3 minutos**.",
            "viabilidad": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "veredicto": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Sheets / Docs",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Notion",
                "Google Workspace"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Mapa de oficios:** Registrar las especialidades técnicas de cada empleado de Palma y Campos en un cuadro visible.",
                "**Canal de fotos:** Establecer un canal interno ágil para enviar fotos de piezas raras, placas o etiquetas dudosas.",
                "**Jornadas de marcas:** Coordinar con fabricantes sesiones técnicas prácticas de 45 minutos para nivelar conocimientos.",
                "**Resolución en 3 min:** Medir la rapidez en la resolución de consultas cruzadas entre tiendas para no hacer esperar al cliente."
            ]
        },
        {
            "id": "global-personas-03",
            "codigo": "global-personas-03",
            "titulo": "Refuerzos de Temporada",
            "descripcion": "**Acuerdo operativo de refuerzos** para cubrir sustituciones, vacaciones o picos de obra entre las plantillas de forma fluida.",
            "descripcionLarga": "Evita contratar personal temporal sin formación en momentos punta. **Organiza un sistema pactado de apoyos en el que empleados con vehículo propio pueden reforzar días clave en la otra tienda** con compensación clara de kilometraje y dietas, manteniendo siempre cubierto el mostrador.",
            "ejemplo": "Durante la semana de la Fira de Campos o el pico de reformas de primavera en el sur, **un dependiente de Palma refuerza el mostrador de Ca'n Ros dos mañanas**, conociendo ya el sistema de cobro y producto sin curvas de aprendizaje.",
            "viabilidad": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "veredicto": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp",
                "Google Workspace / Sheets"
            ],
            "softwareOpcional": [
                "Microsoft Excel",
                "Google Calendar"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Calendario de picos:** Identificar las semanas del año con picos de afluencia en cada tienda (ferias locales, inicio de obras).",
                "**Voluntariedad y dietas:** Establecer un baremo claro de compensación por desplazamiento y dietas para los días de refuerzo.",
                "**Formación cruzada:** Asegurar que los empleados de apoyo conocen la distribución básica del almacén de la otra tienda.",
                "**Balance de horas:** Coordinar el cuadrante para que las jornadas de apoyo no descompensen el descanso semanal."
            ]
        }
    ]
};

import { Categoria } from '../../types';

export const categoriaAREA10: Categoria = {
    "id": "area-10",
    "area": "global",
    "titulo": "Cultura & Conocimiento",
    "propuestas": [
        {
            "id": "global-personas-01",
            "codigo": "global-personas-01",
            "titulo": "Asistente interno de consultas técnicas de producto para empleados",
            "descripcion": "Buscador inteligente para dependientes que resuelve en segundos dudas técnicas complejas de fontanería, cerrajería o químicos.",
            "descripcionLarga": "Apoya a los empleados más jóvenes o con menos experiencia cuando un cliente hace una consulta técnica difícil en mostrador. En lugar de interrumpir al veterano o decir \"no lo sé\", el dependiente consulta en el móvil o terminal: compatibilidad de racores, rendimiento por m² de un impermeabilizante o equivalencia de bombines.",
            "ejemplo": "Un cliente pregunta qué imprimación aplicar sobre baldosa vieja antes de poner mortero cola especial. El dependiente consulta al asistente en 15 segundos y responde con seguridad técnica la referencia exacta disponible en el pasillo 3.",
            "viabilidad": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "veredicto": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "facilidad": "Medio",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 2 60 dias",
            "stack": "asistente técnico / IA privada",
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "personas",
            "pasos": [
                "Crear una base de datos digital sencilla y categorizada (guías rápidas, fichas técnicas de seguridad y dosificaciones de producto).",
                "Instalar accesos directos de búsqueda rápida en los terminales de mostrador de ambas tiendas.",
                "Alimentar la base con las 20 dudas técnicas más complejas que suelen plantear los clientes (químicos, bombas, cerraduras).",
                "Incentivar a los empleados más veteranos para que aporten sus trucos y soluciones prácticas al repositorio común."
            ]
        },
        {
            "id": "global-personas-02",
            "codigo": "global-personas-02",
            "titulo": "Directorio de especialistas internos (\"quién sabe qué en el grupo\")",
            "descripcion": "Guía rápida del personal del grupo que identifica qué empleado domina cada oficio (bombas, soldadura, mandos de garaje o riego).",
            "descripcionLarga": "Aprovecha la sabiduría acumulada en los mostradores de Palma y Campos. Permite que cuando entra un encargo o avería muy especializada, el mostrador sepa al instante a qué compañero de la otra tienda consultar por teléfono o WhatsApp para dar una solución impecable al cliente en el acto.",
            "ejemplo": "En Campos entra un cliente con un mando de garaje antiguo descatalogado. El dependiente mira el directorio, ve que Tomeu en Palma es el experto en duplicados de frecuencias raras, le envía una foto por chat y confirma el duplicado en 3 minutos.",
            "viabilidad": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "veredicto": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "facilidad": "Alto",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "directorio interno",
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "personas",
            "pasos": [
                "Coordinar con los comerciales de las principales marcas fabricantes jornadas técnicas de 45 minutos (ej. desayuno de trabajo).",
                "Organizar las sesiones en horarios rotativos o al cierre para que pueda asistir el personal de ambas tiendas.",
                "Enfocar la formación en demostraciones prácticas del producto: aplicación real, tiempos de secado y solución de problemas.",
                "Recoger el feedback de los empleados y evaluar el aumento de ventas de la marca en las semanas siguientes."
            ]
        },
        {
            "id": "global-personas-03",
            "codigo": "global-personas-03",
            "titulo": "Protocolo de refuerzos cruzados para picos de temporada alta",
            "descripcion": "Acuerdo operativo para cubrir sustituciones, vacaciones o picos de obra entre las plantillas de Palma y Campos de forma fluida.",
            "descripcionLarga": "Evita contratar personal temporal sin formación en momentos punta. Organiza un sistema pactado de guardias o refuerzos en el que empleados con vehículo propio pueden apoyar días clave en la otra tienda con compensación clara de kilometraje y dietas, manteniendo siempre cubierto el mostrador.",
            "ejemplo": "Durante la semana de la Fira de Campos o el pico de reformas de primavera en el sur, un dependiente de Palma refuerza el mostrador de Ca'n Ros dos mañanas, conociendo ya el sistema de cobro y producto.",
            "viabilidad": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "veredicto": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "facilidad": "Alto",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "gestión de turnos",
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "personas",
            "pasos": [
                "Configurar un grupo o canal técnico corporativo (ej. Teams, Slack o WhatsApp cerrado) para el personal de tienda.",
                "Definir pautas claras de uso: solo consultas de producto no habitual, peticiones urgentes de stock o dudas de compatibilidad.",
                "Establecer la regla de respuesta rápida entre compañeros para no hacer esperar al cliente en el mostrador.",
                "Registrar las consultas más repetidas para incorporarlas permanentemente a la base de conocimiento del grupo."
            ]
        }
    ]
};

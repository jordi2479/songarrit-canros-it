import { Categoria } from '../../types';

export const categoriaAREA12: Categoria = {
    "id": "area-12",
    "area": "administracion",
    "titulo": "Equipo & RRHH",
    "propuestas": [
        {
            "id": "administracion-equipo-01",
            "codigo": "administracion-equipo-01",
            "titulo": "Planificador de Turnos",
            "descripcion": "**Calendario digital de turnos** que equilibra vacaciones, festivos y sábados garantizando siempre personal veterano en el mostrador.",
            "descripcionLarga": "Acaba con el caos de cuadrantes en Excel o en papel que generan descontento entre compañeros. **Organiza la rotación de los sábados de forma equitativa**, anticipa los periodos de vacaciones de verano y **asegura que nunca coincidan de baja dos especialistas de la misma familia** de producto.",
            "ejemplo": "Al planificar agosto, el sistema avisa de que **el sábado 16 quedarían en tienda solo dos empleados jóvenes sin ningún perfil con firma para fiados**, proponiendo automáticamente un cambio de turno compensado.",
            "viabilidad": "Sí mediante cuadrante estructurado no-code accesible desde el móvil de cada empleado.",
            "veredicto": "Sí mediante cuadrante estructurado no-code accesible desde el móvil de cada empleado.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Microsoft Excel / Google Sheets",
                "WhatsApp (Grupos tienda)"
            ],
            "softwareOpcional": [
                "Google Calendar",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "12",
            "pasos": [
                "**Mínimos por mostrador:** Definir el número mínimo de dependientes y mozos de almacén requeridos por tienda y franja horaria.",
                "**Cuadrante accesible:** Publicar el calendario mensual con 4 semanas de antelación en herramienta accesible desde el móvil.",
                "**Permutas ágiles:** Canal unificado para solicitudes de vacaciones y permutas de turnos entre compañeros con validación rápida.",
                "**Gestión de imprevistos:** Protocolo de aviso inmediato ante bajas médicas para reorganizar refuerzos sin vaciar mostradores."
            ]
        },
        {
            "id": "administracion-equipo-02",
            "codigo": "administracion-equipo-02",
            "titulo": "Guía de Incorporación",
            "descripcion": "**Guía paso a paso de bienvenida** con vídeos cortos y checklist que hace operativo a un nuevo dependiente en su primera semana.",
            "descripcionLarga": "Reduce el tiempo y la paciencia que los encargados veteranos tienen que dedicar a enseñar desde cero cada vez que entra alguien nuevo. **Estructura los primeros 7 días con misiones claras**: ubicación de familias en pasillos, operativa de cobro en TPV, política de fiados y normas de atención en mostrador.",
            "ejemplo": "El dependiente nuevo en su segundo día completa el módulo **'Cómo identificar tornillería métrica vs roscachapa y corte de cadena a medida'**. Al final de la semana **atiende en mostrador con soltura básica sin depender constantemente de sus compañeros**.",
            "viabilidad": "Sí recopilando 10 vídeos breves grabados con el móvil en la propia tienda y una lista de verificación digital.",
            "veredicto": "Sí recopilando 10 vídeos breves grabados con el móvil en la propia tienda y una lista de verificación digital.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Docs / PDF",
                "WhatsApp"
            ],
            "softwareOpcional": [
                "Notion",
                "Google Gemini"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "12",
            "pasos": [
                "**Manual de bienvenida:** Preparar el dossier con normas de tienda, prevención de riesgos, operativa básica de TPV y teléfonos clave.",
                "**Tutor asignado:** Asignar un tutor experimentado al nuevo empleado durante sus primeras dos semanas de trabajo.",
                "**Itinerario formativo:** Definir el recorrido de aprendizaje: pasillos clave, cobro, política de fiados y atención al profesional.",
                "**Entrevista a los 15 días:** Breve sesión con el encargado de tienda para evaluar sensaciones, aclarar dudas y reforzar áreas."
            ]
        },
        {
            "id": "administracion-equipo-03",
            "codigo": "administracion-equipo-03",
            "titulo": "Checklist de Mantenimiento",
            "descripcion": "**Revisión periódica de mantenimiento** desde el móvil del estado de extintores, carretillas elevadoras, escaleras y seguridad de almacén.",
            "descripcionLarga": "Evita multas de inspección de trabajo y accidentes laborales en almacén. En lugar de carpetas olvidadas de prevención, **el responsable de almacén dedica 5 minutos al mes a repasar en el móvil la lista de seguridad**: fecha de extintores, estado de horquillas de la carretilla y despeje de salidas de emergencia.",
            "ejemplo": "El primer lunes de mes el mozo jefe chequea los 8 puntos de seguridad en la app del móvil. Se detecta que **la revisión anual del extintor de pintura vence en 15 días** y se cursa aviso a la empresa mantenedora automáticamente.",
            "viabilidad": "Sí mediante formulario móvil simple con archivo de registros para auditorías de prevención.",
            "veredicto": "Sí mediante formulario móvil simple con archivo de registros para auditorías de prevención.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Forms / Sheets",
                "WhatsApp (Fotos incidencias)"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Notion"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "12",
            "pasos": [
                "**Inventario de seguridad:** Registrar todas las máquinas y elementos de seguridad con su fecha de compra y plazo de revisión reglamentaria.",
                "**Lista mensual móvil:** Confeccionar una lista de verificación mensual con puntos clave: extintores, luces, escaleras y carretillas.",
                "**Revisión en 5 min:** Asignar la revisión física el primer martes de cada mes al responsable de seguridad de cada centro.",
                "**Archivo digital:** Archivar los certificados y revisiones oficiales para superar con solvencia cualquier inspección laboral o de mutua."
            ]
        }
    ]
};

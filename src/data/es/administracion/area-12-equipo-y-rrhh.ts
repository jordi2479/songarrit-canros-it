import { Categoria } from '../../types';

export const categoriaAREA12: Categoria = {
    "id": "area-12",
    "area": "administracion",
    "titulo": "Equipo & RRHH",
    "propuestas": [
        {
            "id": "administracion-equipo-01",
            "codigo": "administracion-equipo-01",
            "titulo": "Planificador inteligente de turnos y coberturas de mostrador",
            "descripcion": "Calendario digital que equilibra vacaciones, sábados y turnos de mañana/tarde garantizando siempre personal veterano en el mostrador.",
            "descripcionLarga": "Acaba con el caos de cuadrantes en Excel o en papel que generan descontento entre compañeros. Organiza la rotación de los sábados de forma equitativa, anticipa los periodos de vacaciones de verano y asegura que nunca coincidan de baja dos especialistas de la misma familia de producto (ej. pintura o cerrajería).",
            "ejemplo": "Al planificar agosto, el sistema avisa de que el sábado 16 quedarían en tienda solo dos empleados jóvenes sin ningún perfil con firma para fiados ni experiencia en corte de llaves, proponiendo un cambio de turno compensado.",
            "viabilidad": "Sí mediante cuadrante estructurado no-code accesible desde el móvil de cada empleado.",
            "veredicto": "Sí mediante cuadrante estructurado no-code accesible desde el móvil de cada empleado.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "planificador de turnos",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "equipo",
            "pasos": [
                "Analizar la afluencia histórica de clientes por franjas horarias y días de la semana en Palma y en Campos.",
                "Diseñar la matriz de turnos asegurando el 100% de cobertura en los picos habituales (8:00-10:00 y 16:00-17:30).",
                "Digitalizar el cuadrante mensual en una app o calendario compartido para conocimiento de todo el equipo con 2 semanas de antelación.",
                "Gestionar cambios de turnos y sustituciones entre compañeros mediante un procedimiento formal ágil."
            ]
        },
        {
            "id": "administracion-equipo-02",
            "codigo": "administracion-equipo-02",
            "titulo": "Protocolo de incorporación guiada para nuevo personal (Onboarding 7 días)",
            "descripcion": "Guía paso a paso con vídeos cortos y checklist que hace operativo a un nuevo dependiente de ferretería en su primera semana.",
            "descripcionLarga": "Reduce el tiempo y la paciencia que los encargados veteranos tienen que dedicar a enseñar desde cero cada vez que entra alguien nuevo. Estructura los primeros 7 días con misiones claras: ubicación de familias en pasillos, operativa de cobro en TPV, política de fiados y normas de atención en mostrador con pequeñas cápsulas formativas.",
            "ejemplo": "El dependiente nuevo en su segundo día completa el módulo \"Cómo identificar tornillería métrica vs roscachapa y corte de cadena a medida\". Al final de la semana atiende en mostrador con soltura básica sin depender constantemente de sus compañeros.",
            "viabilidad": "Sí recopilando 10 vídeos breves grabados con el móvil en la propia tienda y una lista de verificación digital.",
            "veredicto": "Sí recopilando 10 vídeos breves grabados con el móvil en la propia tienda y una lista de verificación digital.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "onboarding estructurado",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "equipo",
            "pasos": [
                "Elaborar el manual de bienvenida con la información esencial: normas de tienda, prevención, uso del TPV y teléfonos clave.",
                "Asignar un tutor experimentado al nuevo empleado durante sus primeras dos semanas de trabajo.",
                "Definir el itinerario formativo básico: conocimiento de pasillos, política de cobros y atención al profesional.",
                "Realizar una entrevista de seguimiento a los 30 días para evaluar la integración y resolver dudas operativas."
            ]
        },
        {
            "id": "administracion-equipo-03",
            "codigo": "administracion-equipo-03",
            "titulo": "Checklist digital de prevención de riesgos (PRL) y mantenimiento de tienda",
            "descripcion": "Revisión periódica desde el móvil del estado de extintores, carretillas elevadoras, escaleras y señalización de seguridad.",
            "descripcionLarga": "Evita multas de inspección de trabajo y accidentes laborales en almacén. En lugar de carpetas olvidadas de prevención, el responsable de almacén dedica 5 minutos al mes a repasar en el móvil la lista de seguridad: fecha de extintores, estado de horquillas de la carretilla y despeje de salidas de emergencia, quedando registro firmado con fecha.",
            "ejemplo": "El primer lunes de mes el mozo jefe chequea los 8 puntos de seguridad en la app del móvil. Se detecta que la revisión anual del extintor de pintura vence en 15 días y se cursa aviso a la empresa mantenedora automáticamente.",
            "viabilidad": "Sí mediante formulario móvil simple con archivo de registros para auditorías de prevención.",
            "veredicto": "Sí mediante formulario móvil simple con archivo de registros para auditorías de prevención.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "checklist PRL digital",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "equipo",
            "pasos": [
                "Implantar un portal o formulario digital sencillo para solicitud de vacaciones, días de asuntos propios y bajas médicas.",
                "Fijar plazos máximos de respuesta por parte de dirección (48 horas para autorizaciones o denegaciones justificadas).",
                "Mantener el calendario anual de ausencias visible para que los encargados de tienda organicen los refuerzos.",
                "Archivar digitalmente los partes médicos y justificantes cumpliendo estrictamente con la normativa de protección de datos."
            ]
        }
    ]
};

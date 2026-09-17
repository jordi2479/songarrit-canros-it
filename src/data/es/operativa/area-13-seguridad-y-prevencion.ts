import { Categoria } from '../../types';

export const categoriaAREA13: Categoria = {
    "id": "area-13",
    "area": "operativa",
    "titulo": "Seguridad & Prevención",
    "propuestas": [
        {
            "id": "operativa-seguridad-01",
            "codigo": "operativa-seguridad-01",
            "titulo": "Apertura y Cierre",
            "descripcion": "**Verificación diaria de apertura y cierre** de puertas, patio y alarma conectada al terminar la jornada con foto enviada a dirección.",
            "descripcionLarga": "Garantiza la tranquilidad de los dueños de que el local queda 100% seguro cada noche sin tener que acudir en persona. **El empleado que cierra hace un recorrido de 2 minutos comprobando**: dinero guardado en caja fuerte, patio de materiales candado, maquinaria guardada y panel de alarma activado.",
            "ejemplo": "A las 19:45 el encargado de cierre completa el checklist en el móvil y **saca foto del panel de la alarma en verde y la cancela del patio bloqueada**. Los socios en Palma **reciben la confirmación inmediata de tienda cerrada y segura**.",
            "viabilidad": "Sí mediante bot simple de mensajería o formulario móvil sin coste de equipamiento adicional.",
            "veredicto": "Sí mediante bot simple de mensajería o formulario móvil sin coste de equipamiento adicional.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp (Checklist fotográfico)",
                "Google Sheets"
            ],
            "softwareOpcional": [
                "Google Forms",
                "Google Drive"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Checklist de cierre:** Diseñar el formulario de 4 puntos clave: dinero en caja fuerte, patio candado, maquinaria bajo llave y alarma activa.",
                "**Foto obligatoria:** Adjuntar fotografía del teclado de la alarma armada y puerta principal bloqueada al enviar el checklist.",
                "**Notificación a socios:** Recepción de un aviso breve en el móvil de gerencia con hora exacta y nombre del responsable de cierre.",
                "**Histórico de aperturas:** Registrar aperturas fuera de horario para auditar accesos extraordinarios al local."
            ]
        },
        {
            "id": "operativa-seguridad-02",
            "codigo": "operativa-seguridad-02",
            "titulo": "Auditor de Descuadres",
            "descripcion": "**Trazabilidad de descuadres en efectivo** que aísla si las diferencias ocurren en un cajón concreto o en cambios de turno.",
            "descripcionLarga": "Evita tensiones y sospechas infundadas dentro de la plantilla ante faltas de dinero en el cajón. **Registra de forma individualizada el cuadre al inicio y final de cada turno**. Si se produce un descuadre reiterado, identifica el patrón (horario, puesto o turno) de forma objetiva con datos contrastables.",
            "ejemplo": "Durante dos semanas se detectan **pequeñas diferencias de 10-20 € en efectivo los sábados por la mañana**. El informe cruza los datos y concluye que **el descuadre se debe a un error sistemático en una moneda de cambio al inicio del turno**, no a sustracción.",
            "viabilidad": "Sí mediante registro de turnos en la hoja de cierre de caja diaria.",
            "veredicto": "Sí mediante registro de turnos en la hoja de cierre de caja diaria.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Volcado desde ERP/TPV (Arqueos caja)",
                "Microsoft Excel",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude Code",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Arqueo por turno:** Implantar el arqueo ciego obligatorio cada vez que un dependiente cede la caja a un compañero.",
                "**Registro individual:** Asociar cada movimiento y cobro al usuario identificado en el TPV.",
                "**Semáforo de desviaciones:** Alertar a gerencia únicamente cuando un mismo puesto acumule 3 diferencias consecutivas.",
                "**Revisión pedagógica:** Comentar las desviaciones con el empleado para corregir errores de cambio sin crear mal clima laboral."
            ]
        },
        {
            "id": "operativa-seguridad-03",
            "codigo": "operativa-seguridad-03",
            "titulo": "Control de Mermas",
            "descripcion": "**Plan de conteo de 5 artículos al día** de alto valor para detectar hurtos o pérdidas sin paralizar la tienda para hacer inventarios.",
            "descripcionLarga": "En ferretería el hurto de referencias pequeñas pero caras (brocas de cobalto, discos de diamante, alicates aislados, candados) desangra el margen sin que nadie se dé cuenta hasta el inventario anual. **Este sistema selecciona cada mañana 5 referencias aleatorias para que el encargado cuente las unidades en 3 minutos**.",
            "ejemplo": "El miércoles el sistema pide contar los candados de seguridad de alta gama en vitrina. **Teóricamente debería haber 12 y hay 9**. La discrepancia se detecta en la misma semana en que ocurrió, **permitiendo revisar tickets o ajustar la seguridad del expositor**.",
            "viabilidad": "Sí mediante generador de listas de muestreo diario sobre artículos tipo A y B de riesgo.",
            "veredicto": "Sí mediante generador de listas de muestreo diario sobre artículos tipo A y B de riesgo.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Volcado desde ERP/TPV (Ajustes stock)",
                "Microsoft Excel",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Selección de artículos sensibles:** Identificar las 100 referencias de mayor valor o susceptibilidad de hurto en sala de ventas.",
                "**Aviso matinal aleatorio:** Enviar cada mañana una lista de 5 artículos aleatorios al terminal del encargado para su conteo.",
                "**Registro en 3 minutos:** Introducir el stock físico real contado en el sistema para contrastar con el inventario teórico.",
                "**Acción preventiva:** Reubicar en vitrinas con llave o instalar alarmas físicas en las referencias que presenten merma repetida."
            ]
        }
    ]
};

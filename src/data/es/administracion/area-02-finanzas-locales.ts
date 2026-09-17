import { Categoria } from '../../types';

export const categoriaAREA02: Categoria = {
    "id": "area-02",
    "area": "administracion",
    "titulo": "Finanzas Locales",
    "propuestas": [
        {
            "id": "administracion-finanzas-01",
            "codigo": "administracion-finanzas-01",
            "titulo": "Control de Fiados",
            "descripcion": "**Supervisión del crédito comercial** que alerta en mostrador si un cliente supera su límite de fiado o tiene facturas vencidas.",
            "descripcionLarga": "Protege la tesorería de la tienda evitando que clientes industriales sigan retirando material a crédito cuando **superan el saldo autorizado** o acumulan más de 30 días de retraso en pagos. **Avisa discretamente en mostrador** antes de confirmar la salida del albarán y **genera semanalmente la lista de cobros a gestionar** con tono cortés.",
            "ejemplo": "Un albañil habitual acude un jueves a retirar material por 600 €. El sistema avisa en pantalla que su límite de crédito es de 2.000 € y **ya acumula 2.350 € con factura pendiente** de final de mes anterior. El encargado puede **solicitarle regularizar parte del saldo antes de cargar** el camión.",
            "viabilidad": "Sí mediante copia exportada semanal de saldos vivos de clientes desde el ERP local. No ejecuta bloqueos bancarios ni llamadas automáticas; asiste al mostrador.",
            "veredicto": "Sí mediante copia exportada semanal de saldos vivos de clientes desde el ERP local. No ejecuta bloqueos bancarios ni llamadas automáticas; asiste al mostrador.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (CSV/Excel)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Microsoft Excel",
                "Claude Code",
                "Outlook / Correo"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Exportación de deuda:** Extraer del ERP el listado de facturas emitidas pendientes con fecha de emisión, vencimiento y NIF del cliente.",
                "**Semáforo de mora:** Configurar el semáforo de tramos de mora (0-30 días, 31-60 días, +60 días) y fijar importes mínimos de actuación.",
                "**Modelos de aviso:** Diseñar los 3 modelos de notificación escalonada (recordatorio amistoso, segundo aviso comercial y reclamación formal).",
                "**Revisión semanal:** Capacitar a administración para la revisión semanal cada martes y envío directo por email o WhatsApp corporativo."
            ]
        },
        {
            "id": "administracion-finanzas-02",
            "codigo": "administracion-finanzas-02",
            "titulo": "Control de Márgenes",
            "descripcion": "**Auditoría continua de tickets** que identifica productos vendidos por debajo del coste de reposición o con descuentos excesivos en mostrador.",
            "descripcionLarga": "Revisa las ventas diarias para cazar operaciones ruinosas generadas por tarifas desactualizadas de proveedores, errores al teclear descuentos manuales en caja o ventas de stock antiguo a precios desfasados. **Emite un informe semanal con las referencias donde se ha perdido margen** para corregir el PVP de inmediato.",
            "ejemplo": "Tras una actualización de tarifa en cobre y tubería, el sistema detecta que **se vendieron 4 rollos a un instalador con un margen real del -4%** porque no se había actualizado el coste base en el TPV. El informe **avisa al gerente para actualizar el precio en el catálogo** esa misma tarde.",
            "viabilidad": "Sí mediante cruce entre coste de compra y precio cobrado en tickets. Proceso 100% analítico sin impacto en la operativa del mostrador.",
            "veredicto": "Sí mediante cruce entre coste de compra y precio cobrado en tickets. Proceso 100% analítico sin impacto en la operativa del mostrador.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (CSV/Excel)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Gemini"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Descarga de tarifas:** Configurar la descarga periódica de extractos normalizados y ventas diarias del ERP de tienda.",
                "**Diccionario de costes:** Cruzar los precios de coste real actualizados con los precios netos cobrados en cada ticket.",
                "**Panel de márgenes:** Establecer el panel de descuadres para aislar productos vendidos con margen inferior al umbral mínimo fijado.",
                "**Corrección de PVP:** Procedimiento de 15 minutos semanales para ajustar precios en mostrador y evitar ventas a pérdida."
            ]
        },
        {
            "id": "administracion-finanzas-03",
            "codigo": "administracion-finanzas-03",
            "titulo": "Cuadre de Caja",
            "descripcion": "**Asistente de cuadre al cierre** que compara el dinero real contado con las tiras de TPV y ventas en efectivo, localizando descuadres en 5 minutos.",
            "descripcionLarga": "Automatiza la comprobación de caja al cierre de jornada. El cajero introduce el recuento de monedas, billetes y justificantes de datáfono, y el sistema coteja con el registro del TPV. **Si hay descuadre, identifica en qué tramo horario ocurrió la discrepancia** para revisar el ticket correspondiente sin demorar la salida del personal.",
            "ejemplo": "Al cerrar el viernes a las 19:30, **la caja no cuadra por 50 €**. El asistente analiza los cobros y señala que entre las 11:15 y las 11:30 **se cobró una venta con tarjeta que se registró erróneamente en el botón de efectivo en el TPV**, resolviendo el error sin buscar recibos a ciegas.",
            "viabilidad": "Sí mediante plantilla de recuento rápido conectada al resumen de caja diario. No toca dinero ni realiza movimientos contables.",
            "veredicto": "Sí mediante plantilla de recuento rápido conectada al resumen de caja diario. No toca dinero ni realiza movimientos contables.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Microsoft Excel (.xlsx)",
                "Volcado desde ERP/TPV (Cierre diario)"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Registro de recuento:** Plantilla digital sencilla para introducir el desglose físico de monedas, billetes y tickets de tarjeta.",
                "**Cruce con TPV:** Comparar automáticamente el conteo físico contra el cierre z generado por el software de caja.",
                "**Aislamiento de franja:** Localizar los intervalos de tiempo con cobros anómalos cuando la diferencia supere la tolerancia de 5 €.",
                "**Cierre documentado:** Generar el justificante diario de cuadre para administración con firma del responsable de turno."
            ]
        }
    ]
};

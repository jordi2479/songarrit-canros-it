import { Categoria } from '../../types';

export const categoriaAREA02: Categoria = {
    "id": "area-02",
    "area": "administracion",
    "titulo": "Finanzas Locales",
    "propuestas": [
        {
            "id": "administracion-finanzas-01",
            "codigo": "administracion-finanzas-01",
            "titulo": "Control de límites de fiado y alertas de vencimiento a profesionales",
            "descripcion": "Sistema de supervisión del crédito comercial que alerta en mostrador si un cliente supera su límite de fiado o tiene facturas vencidas.",
            "descripcionLarga": "Protege la tesorería de la tienda evitando que clientes industriales sigan retirando material a crédito cuando superan el saldo autorizado o acumulan más de 30 días de retraso en pagos. Avisa discretamente en mostrador antes de confirmar la salida del albarán y genera semanalmente la lista de cobros a gestionar con tono cortés.",
            "ejemplo": "Un albañil habitual acude un jueves a retirar material por 600 €. El sistema avisa en pantalla que su límite de crédito es de 2.000 € y ya acumula 2.350 € con factura pendiente de final de mes anterior. El encargado puede solicitarle regularizar parte del saldo antes de cargar el camión.",
            "viabilidad": "Sí mediante copia exportada semanal de saldos vivos de clientes desde el ERP local. No ejecuta bloqueos bancarios ni llamadas automáticas; asiste al mostrador.",
            "veredicto": "Sí mediante copia exportada semanal de saldos vivos de clientes desde el ERP local. No ejecuta bloqueos bancarios ni llamadas automáticas; asiste al mostrador.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis de crédito",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "finanzas",
            "pasos": [
                "Extraer del ERP el listado de facturas emitidas pendientes con fecha de emisión, vencimiento y NIF del cliente.",
                "Configurar el semáforo de tramos de mora (0-30 días, 31-60 días, +60 días) y fijar importes mínimos de actuación.",
                "Diseñar los 3 modelos de notificación escalonada (recordatorio amistoso, segundo aviso comercial y reclamación formal).",
                "Capacitar a administración para la revisión semanal cada martes y envío directo por email o WhatsApp corporativo."
            ]
        },
        {
            "id": "administracion-finanzas-02",
            "codigo": "administracion-finanzas-02",
            "titulo": "Detector de ventas con margen negativo o inferior al suelo comercial",
            "descripcion": "Auditoría continua de tickets que identifica productos vendidos por debajo del coste de reposición o con descuentos excesivos en mostrador.",
            "descripcionLarga": "Revisa las ventas diarias para cazar operaciones ruinosas generadas por tarifas desactualizadas de proveedores, errores al teclear descuentos manuales en caja o ventas de stock antiguo a precios desfasados. Emite un informe semanal con las referencias donde se ha perdido margen para corregir el PVP de inmediato.",
            "ejemplo": "Tras una actualización de tarifa en cobre y tubería, el sistema detecta que se vendieron 4 rollos a un instalador con un margen real del -4% porque no se había actualizado el coste base en el TPV. El informe avisa al gerente para actualizar el precio en el catálogo esa misma tarde.",
            "viabilidad": "Sí mediante cruce entre coste de compra y precio cobrado en tickets. Proceso 100% analítico sin impacto en la operativa del mostrador.",
            "veredicto": "Sí mediante cruce entre coste de compra y precio cobrado en tickets. Proceso 100% analítico sin impacto en la operativa del mostrador.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "auditoría de márgenes",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "finanzas",
            "pasos": [
                "Configurar la descarga periódica de extractos normalizados (norma 43 o CSV) de las entidades bancarias del grupo.",
                "Definir el diccionario de equivalencias para emparejar automáticamente conceptos recurrentes (datáfonos, impuestos, nóminas).",
                "Establecer el panel de descuadres para aislar cobros de clientes no identificados o cargos bancarios anómalos.",
                "Fijar un procedimiento de 15 minutos diarios a primera hora para dejar conciliada la tesorería del día anterior."
            ]
        },
        {
            "id": "administracion-finanzas-03",
            "codigo": "administracion-finanzas-03",
            "titulo": "Conciliación rápida de cobros TPV y cuadre de caja diario",
            "descripcion": "Asistente de cuadre al cierre que compara el dinero real contado con las tiras de TPV y ventas en efectivo, localizando descuadres en 5 minutos.",
            "descripcionLarga": "Automatiza la comprobación de caja al cierre de jornada. El cajero introduce el recuento de monedas, billetes y justificantes de datáfono, y el sistema coteja con el registro del TPV. Si hay descuadre, identifica en qué tramo horario ocurrió la discrepancia para revisar el ticket correspondiente sin demorar la salida del personal.",
            "ejemplo": "Al cerrar el viernes a las 19:30, la caja no cuadra por 50 €. El asistente analiza los cobros y señala que entre las 11:15 y las 11:30 se cobró una venta con tarjeta que se registró erróneamente en el botón de efectivo en el TPV, resolviendo el error sin buscar recibos a ciegas.",
            "viabilidad": "Sí mediante plantilla de recuento rápido conectada al resumen de caja diario. No toca dinero ni realiza movimientos contables.",
            "veredicto": "Sí mediante plantilla de recuento rápido conectada al resumen de caja diario. No toca dinero ni realiza movimientos contables.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "plantilla / conciliación",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "finanzas",
            "pasos": [
                "Cruzar los precios medios de coste real (incluyendo portes y descuentos) con los precios netos de venta por familia.",
                "Generar la matriz de margen bruto identificando las 10 familias con márgenes comprimidos o inferiores al objetivo (ej. <25%).",
                "Presentar el informe mensual a dirección con propuestas de ajuste de tarifas de mostrador o revisión de compra.",
                "Verificar al mes siguiente el incremento real del margen bruto en las categorías intervenidas."
            ]
        }
    ]
};

import { Categoria } from '../../types';

export const categoriaAREA01: Categoria = {
    "id": "area-01",
    "area": "operativa",
    "titulo": "Compras & Stock",
    "propuestas": [
        {
            "id": "operativa-compras-01",
            "codigo": "operativa-compras-01",
            "titulo": "Gestor de Pedidos",
            "descripcion": "**Borrador automático semanal** que calcula cantidades óptimas según ventas recientes y stock mínimo, evitando roturas sin sobrecargar almacén.",
            "descripcionLarga": "Calcula semanalmente la propuesta de compra para proveedores habituales cruzando la rotación de los últimos 30 a 90 días con las existencias reales. **Elimina el tiempo dedicado a revisar estanterías con libreta** y pedidos de memoria. El responsable de tienda **revisa la lista en 10 minutos**, ajusta si lo considera y **valida el pedido con un solo clic**.",
            "ejemplo": "Cada lunes a las 8:30 el encargado de compras recibe una propuesta con 18 referencias necesarias (cemento, discos de corte, tacos del 6). Se marcan en rojo **dos referencias con riesgo inminente de rotura** y se propone la cantidad exacta para **cubrir dos semanas sin sobredimensionar el almacén**.",
            "viabilidad": "Sí mediante copia exportada semanal de ventas y stock actual desde el TPV/ERP. No requiere conexión directa de escritura; el sistema entrega el borrador ordenado para confirmación humana.",
            "veredicto": "Sí mediante copia exportada semanal de ventas y stock actual desde el TPV/ERP. No requiere conexión directa de escritura; el sistema entrega el borrador ordenado para confirmación humana.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (CSV/Excel)",
                "Microsoft Excel (.xlsx)"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Importación a ERP/TPV (CSV validado)"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Extracción de ventas:** Exportar el histórico de ventas (últimos 90 días) y existencias actuales desde el ERP/TPV a formato CSV/Excel.",
                "**Parámetros de cobertura:** Definir los días de cobertura objetivo (ej. 15 días) y stock de seguridad por proveedor habitual.",
                "**Prueba en piloto:** Configurar el cálculo y probarlo con los 3 proveedores de mayor volumen (adhesivos, fijación, tornillería).",
                "**Rutina semanal:** Establecer la entrega del borrador los lunes a primera hora para validación en 10 minutos por el responsable."
            ]
        },
        {
            "id": "operativa-compras-02",
            "codigo": "operativa-compras-02",
            "titulo": "Radar de Agotados",
            "descripcion": "**Detección matinal de agotados** a partir de la copia del cierre diario, activando reposición antes de abrir la tienda.",
            "descripcionLarga": "Trabaja sobre la copia exportada del cierre diario del TPV, **sin tocar las cajas ni los sistemas en caliente**. Analiza a primera hora las referencias clave (tipo A de ventas) que han quedado a cero existencias y entrega una **lista limpia de reposición o alternativas disponibles** en la otra tienda antes de que entren los primeros clientes.",
            "ejemplo": "A las 7:30 de la mañana, el encargado abre el informe generado: detecta que **se agotó el anclaje químico de 300ml en Palma**, pero en Ca'n Ros Campos **quedan 8 botes en el volcado de almacén**. Se coordina el traspaso antes de levantar la persiana.",
            "viabilidad": "Sí mediante lectura de la exportación del cierre diario de ventas. Cero riesgo para las cajas: la herramienta opera de forma 100% desacoplada del sistema de cobro en tienda.",
            "veredicto": "Sí mediante lectura de la exportación del cierre diario de ventas. Cero riesgo para las cajas: la herramienta opera de forma 100% desacoplada del sistema de cobro en tienda.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (CSV)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Correo"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Exportación de cierre:** Configurar la exportación automática o manual del fichero de ventas/cierre al finalizar la jornada.",
                "**Filtrado de roturas:** Procesar la copia de datos fuera del horario comercial para identificar referencias con stock cero.",
                "**Cruce entre tiendas:** Generar el informe matinal con sustitutos homologados y existencias en la tienda vecina.",
                "**Validación rápida:** Revisión en 5 minutos por el encargado de almacén antes de la apertura de persiana."
            ]
        },
        {
            "id": "operativa-compras-03",
            "codigo": "operativa-compras-03",
            "titulo": "Auditor de Albaranes",
            "descripcion": "**Cotejo digital de albaranes** firmados y facturas recibidas de proveedores para detectar discrepancias en precios, cantidades o descuentos acordados.",
            "descripcionLarga": "Cruza sistemáticamente cada factura mensual del proveedor con los albaranes de entrega recepcionados en tienda. Identifica discrepancias habituales en ferretería: **portes cobrados indebidamente**, **referencias no entregadas pero facturadas** o **tarifas sin el descuento pactado**. Si hay error, **redacta automáticamente el borrador de reclamación** detallado.",
            "ejemplo": "Al recibir la factura mensual de un proveedor de tornillería, el sistema detecta que **se han facturado 5 cajas no firmadas en ningún albarán (diferencia de 185 €)**. Prepara un correo con copia de los albaranes y el detalle del descuadre para **reclamar al proveedor en 1 clic**.",
            "viabilidad": "Sí con los PDF o escaneos de facturas y albaranes. Proceso documental que no toca bancos ni contabilidad; ahorra horas de punteo manual a administración.",
            "veredicto": "Sí con los PDF o escaneos de facturas y albaranes. Proceso documental que no toca bancos ni contabilidad; ahorra horas de punteo manual a administración.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Volcado desde ERP/TPV (Excel/PDF)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Claude",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Digitalización en recepción:** Estandarizar la recepción en tienda con escaneo o foto inmediata del albarán de entrega firmado.",
                "**Campos de comprobación:** Mapear los campos de cotejo esenciales: número de albarán, código proveedor, cantidad servida y precio unitario.",
                "**Cruce quincenal:** Implementar la rutina quincenal de cruce de datos entre las facturas recibidas y los albaranes archivados.",
                "**Reclamación en 1 clic:** Crear la plantilla de reclamación formal automática para remitir incidencias de facturación en 1 clic."
            ]
        }
    ]
};

import { Categoria } from '../../types';

export const categoriaAREA07: Categoria = {
    "id": "area-07",
    "area": "global",
    "titulo": "Finanzas de Grupo",
    "propuestas": [
        {
            "id": "global-finanzas-01",
            "codigo": "global-finanzas-01",
            "titulo": "Previsión de Tesorería",
            "descripcion": "**Visión unificada de tesorería** a 30 y 60 días vista con cuentas bancarias, pagos a proveedores y cobros previstos de ambas tiendas.",
            "descripcionLarga": "Evita tensiones de liquidez innecesarias en una tienda cuando la otra tiene excedente de tesorería. **Agrupa en un informe semanal los saldos disponibles, remesas de cobro y vencimientos de recibos**, proyectando el flujo de caja global para **coordinar pagos sin recurrir a pólizas de crédito costosas**.",
            "ejemplo": "A día 25 el informe proyecta que **Ca'n Ros tiene vencimientos de compras por 18.000 € y Son Garrit dispone de un remanente en cuenta de 24.000 €**. La dirección planifica la transferencia interna con antelación **sin pagar comisiones por descubierto bancario**.",
            "viabilidad": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "veredicto": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "dificultad": "Media",
            "riesgo": "Medio",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Microsoft Excel (.xlsx)",
                "Volcado desde ERP/TPV (Cobros/Pagos)",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Estructura consolidada:** Definir la estructura del informe de caja consolidado: entradas por mostrador, cobros a crédito y pagos fijos.",
                "**Captura de saldos:** Conectar la captura de saldos bancarios y facturación diaria para obtener una foto financiera integrada.",
                "**Calendario de vencimientos:** Modelar el calendario de vencimientos de proveedores e impuestos para anticipar posibles tensiones.",
                "**Revisión quincenal:** Revisar quincenalmente la previsión de caja a 30 días para coordinar transferencias o líneas de crédito."
            ]
        },
        {
            "id": "global-finanzas-02",
            "codigo": "global-finanzas-02",
            "titulo": "Crédito Unificado",
            "descripcion": "**Control del crédito unificado** que vigila el riesgo acumulado de clientes que retiran material en ambas ferreterías.",
            "descripcionLarga": "Protege al grupo contra el riesgo de clientes que acumulan deuda en una tienda mientras siguen pidiendo fiado en la otra. **Establece un límite de crédito global por empresa constructora**. Si un cliente adeuda 4.000 € en Palma, el mostrador de Campos es informado al instante antes de autorizarle más material a crédito.",
            "ejemplo": "Una empresa de reformas de Palma abre obra en Santanyí y acude a Ca'n Ros Campos a sacar material fiado. El sistema advierte de que **ya tiene vencida una factura de 3.200 € en Son Garrit Palma**, evitando que el grupo incremente el riesgo financiero sin garantías.",
            "viabilidad": "Sí mediante cruce periódico de saldos vivos por CIF de cliente. Proceso analítico de lectura y alerta preventiva.",
            "veredicto": "Sí mediante cruce periódico de saldos vivos por CIF de cliente. Proceso analítico de lectura y alerta preventiva.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Volcado desde ERP/TPV (Maestro clientes)",
                "Microsoft Excel",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Cruce de cuentas:** Cruzar los listados de clientes a crédito para identificar empresas que compran en ambas ferreterías.",
                "**Límite consolidado:** Fijar un límite de crédito global del grupo para cada cuenta compartida, evitando riesgos encubiertos.",
                "**Alerta simultánea:** Establecer aviso inmediato si el cliente supera el plazo de pago acordado en cualquiera de los dos centros.",
                "**Protocolo de cobros:** Notificar a los equipos de administración y ventas de ambas tiendas sobre la política unificada de crédito."
            ]
        },
        {
            "id": "global-finanzas-03",
            "codigo": "global-finanzas-03",
            "titulo": "Rentabilidad por Familia",
            "descripcion": "**Análisis de rentabilidad neta** por familia que revela qué líneas de producto dejan más beneficio en cada localidad y dónde se escapan márgenes.",
            "descripcionLarga": "Compara el margen neto real que deja cada categoría (herramienta eléctrica, fontanería, tornillería, cerrajería) en Palma frente a Campos. **Identifica si una tienda está vendiendo con márgenes innecesariamente bajos por costumbre** o si la otra tiene margen para subir precios en productos de poca elasticidad.",
            "ejemplo": "El informe muestra que en fontanería **Palma trabaja con un 34% de margen bruto mientras Campos opera con un 27%** en los mismos accesorios de PVC y latón. Permite **ajustar el PVP en Campos para recuperar 5 puntos de margen** sin perder cuota de mercado.",
            "viabilidad": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
            "veredicto": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (Márgenes)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "Google NotebookLM"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Recopilación de márgenes:** Extraer márgenes brutos y costes de servicio por categoría de producto en ambas sociedades.",
                "**Comparativa cruzada:** Comparar el rendimiento de las mismas familias entre Palma y Campos para aislar discrepancias.",
                "**Optimización de comisiones:** Negociar en bloque con bancos y pasarelas de pago condiciones ventajosas por facturación conjunta.",
                "**Ajuste de PVP:** Revisar trimestralmente las tarifas de mostrador en familias con margen comprimido."
            ]
        }
    ]
};

import { Categoria } from '../../types';

export const categoriaAREA03: Categoria = {
    "id": "area-03",
    "area": "administracion",
    "titulo": "Dirección de Tienda",
    "propuestas": [
        {
            "id": "administracion-direccion-01",
            "codigo": "administracion-direccion-01",
            "titulo": "Cuadro de Mando",
            "descripcion": "**Cuadro de mando en una página** cada lunes a primera hora con ventas, ticket medio, roturas críticas y caja cerrada de tienda.",
            "descripcionLarga": "Permite a la dirección arrancar la semana con los números clave del negocio **sin extraer informes dispersos ni cruzar datos a mano**. En 10 minutos se detectan desviaciones de facturación y referencias con demanda insatisfecha. El sistema no altera saldos; **entrega un resumen analítico claro para decidir con criterio firme**.",
            "ejemplo": "Cada lunes a las 9:00 la dirección recibe en su pantalla el resumen de la semana: evolución por día, ticket medio, **los 5 artículos más vendidos y las roturas detectadas**. Si tras una semana de obra intensiva se agotan el cemento o tacos químicos, **resalta la necesidad de reposición con la cantidad exacta**.",
            "viabilidad": "Sí mediante copia exportada semanal de ventas y caja que se exporta en tienda, sin especialista. Con apoyo puntual solo para automatizar la lectura recurrente del sistema.",
            "veredicto": "Sí mediante copia exportada semanal de ventas y caja que se exporta en tienda, sin especialista. Con apoyo puntual solo para automatizar la lectura recurrente del sistema.",
            "dificultad": "Baja",
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
                "Google Sheets",
                "Claude Code"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**Selección de KPIs:** Seleccionar los 5 indicadores vitales: facturación semanal, margen medio estimado, caja real, stock total y deuda vencida.",
                "**Extracción programada:** Conectar la extracción de datos automatizada cada domingo a medianoche sin interferir en el horario comercial.",
                "**Plantilla ejecutiva:** Diseñar la plantilla ejecutiva resumen de una sola página orientada a la toma de 3 decisiones clave.",
                "**Comité semanal:** Institucionalizar la reunión semanal de dirección de 20 minutos cada lunes a las 9:00 sobre dicho panel."
            ]
        },
        {
            "id": "administracion-direccion-02",
            "codigo": "administracion-direccion-02",
            "titulo": "Caídas de Venta",
            "descripcion": "**Detector de anomalías de ventas** que avisa si la facturación semanal cae respecto al año anterior e identifica el motivo probable.",
            "descripcionLarga": "Evita llegar a final de mes con sorpresas desagradables en la facturación. El sistema compara el rendimiento semanal contra el mismo periodo del año pasado solo si la desviación negativa supera el umbral fijado. **Aísla automáticamente si la bajada se debe a un desfase de festivos o a un desplome en una categoría concreta**.",
            "ejemplo": "Si en la tercera semana de septiembre **la facturación cae un 14% interanual**, el sistema envía una alerta explicando que no es una crisis de mostrador: **las lluvias continuadas paralizaron la venta de pintura exterior** y faltó un tono habitual. El encargado revisa el motivo en 2 minutos.",
            "viabilidad": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
            "veredicto": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (Histórico)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "OpenCode Desktop",
                "Claude Code",
                "Google Gemini"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**Criterios de comparación:** Definir criterios homogéneos de medición teniendo en cuenta metraje, festivos locales y equipo.",
                "**Recogida de tickets:** Automatizar la recogida semanal de tickets emitidos, ticket medio, facturación por empleado y horas de apertura.",
                "**Panel de alertas:** Crear la visualización comparativa mensual resaltando caídas superiores al 10% por familia de producto.",
                "**Acción comercial:** Compartir conclusiones con los encargados de tienda para alinear operativas y activar promociones de choque."
            ]
        },
        {
            "id": "administracion-direccion-03",
            "codigo": "administracion-direccion-03",
            "titulo": "Previsión de Cierre",
            "descripcion": "**Informe predictivo el día 20** que proyecta el cierre mensual y da 10 días de margen para corregir el rumbo antes de terminar el mes.",
            "descripcionLarga": "Sustituye la costumbre de esperar al día 31 o al informe contable del mes vencido para saber cómo ha ido el periodo. **A día 20 proyecta el rango de facturación final** combinando el ritmo medio diario con la estacionalidad, **permitiendo adelantar compras con descuento o activar campañas antes de que sea tarde**.",
            "ejemplo": "El día 20 a las 9:00 llega una proyección con tres escenarios. Si el ritmo marca **un cierre un 8% por debajo del objetivo presupuestario**, el responsable **cuenta con 10 días laborables para coordinar un refuerzo en mostradores clave** o cerrar presupuestos pendientes.",
            "viabilidad": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
            "veredicto": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Microsoft Excel (.xlsx)",
                "Volcado desde ERP/TPV (CSV)",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**Modelo predictivo:** Configurar la fórmula de proyección combinando la media diaria de los primeros 20 días con la estacionalidad histórica.",
                "**Escenarios de cierre:** Generar automáticamente los 3 escenarios: conservador, esperado y óptimo para Palma y Campos.",
                "**Alerta de desviación:** Emitir informe ejecutivo el día 20 resaltando las familias que necesitan empuje comercial.",
                "**Plan de choque:** Activar llamadas a clientes con presupuestos vivos y promociones de mostrador para alcanzar el objetivo mensual."
            ]
        }
    ]
};

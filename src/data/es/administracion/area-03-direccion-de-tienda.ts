import { Categoria } from '../../types';

export const categoriaAREA03: Categoria = {
    "id": "area-03",
    "area": "administracion",
    "titulo": "Dirección de Tienda",
    "propuestas": [
        {
            "id": "administracion-direccion-01",
            "codigo": "administracion-direccion-01",
            "titulo": "Cuadro de mando semanal lunes 9:00: ventas, roturas y caja",
            "descripcion": "Una sola página ejecutiva cada lunes a primera hora con ventas, ticket medio, roturas críticas y caja cerrada de tienda.",
            "descripcionLarga": "Permite a la dirección arrancar la semana con los números clave de Ca'n Ros Campos sin extraer informes dispersos ni cruzar datos a mano. En 10 minutos se detectan desviaciones de facturación y referencias con demanda insatisfecha. El sistema no toma decisiones de compra ni altera saldos; entrega un borrador analítico para que el responsable decida con criterio firme.",
            "ejemplo": "Cada lunes a las 9:00 la dirección recibe en su pantalla el resumen de la semana anterior: evolución por día, ticket medio frente al histórico, los 5 artículos más vendidos y las roturas detectadas. Si tras una semana de obra intensiva se han agotado el cemento o los tacos químicos, el informe resalta la necesidad de reposición con la cantidad sugerida para validar el pedido en un solo clic.",
            "viabilidad": "Sí mediante copia exportada semanal de ventas y caja que se exporta en tienda, sin especialista. Con apoyo puntual solo para automatizar la lectura recurrente del sistema.",
            "veredicto": "Sí mediante copia exportada semanal de ventas y caja que se exporta en tienda, sin especialista. Con apoyo puntual solo para automatizar la lectura recurrente del sistema.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "cuadro de mando",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "direccion",
            "pasos": [
                "Seleccionar los 5 indicadores vitales: facturación semanal, margen medio estimado, caja real, stock total y deuda vencida.",
                "Conectar la extracción de datos automatizada cada domingo a medianoche para no interferir en el horario comercial.",
                "Diseñar la plantilla ejecutiva resumen de una sola página orientada a la toma de 3 decisiones clave.",
                "Institucionalizar la reunión semanal de dirección de 20 minutos cada lunes a las 9:00 sobre dicho panel."
            ]
        },
        {
            "id": "administracion-direccion-02",
            "codigo": "administracion-direccion-02",
            "titulo": "Detector de caídas frente al año anterior con análisis de causa",
            "descripcion": "Alerta automática que avisa si la facturación semanal cae respecto al año anterior e identifica el motivo probable (calendario, clima o familia de producto).",
            "descripcionLarga": "Evita llegar a final de mes con sorpresas desagradables en la facturación. El sistema compara el rendimiento semanal contra el mismo periodo del año pasado solo si la desviación negativa supera el umbral fijado. Aísla automáticamente si la bajada se debe a un desfase de festivos locales o a un desplome en una categoría concreta (ej. pintura o herramientas), sugiriendo si conviene liquidar, reponer o mantener la calma.",
            "ejemplo": "Si en la tercera semana de septiembre la facturación de Ca'n Ros cae un 14% interanual, el sistema envía una alerta explicando que no es una crisis general de mostrador, sino que las lluvias continuadas paralizaron la venta de pintura exterior y faltó un tono habitual en estantería. El encargado revisa el motivo en 2 minutos antes de decidir si aplica una promoción de salida.",
            "viabilidad": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
            "veredicto": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 2 60 dias",
            "stack": "analítica comparativa",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "direccion",
            "pasos": [
                "Definir los criterios homogéneos de medición entre Son Garrit (Palma) y Ca'n Ros (Campos) teniendo en cuenta metraje y equipo.",
                "Automatizar la recogida semanal de tickets emitidos, ticket medio, facturación por empleado y horas de apertura.",
                "Crear la visualización comparativa mensual resaltando las mejores prácticas y fortalezas de cada centro.",
                "Compartir conclusiones con los encargados de tienda para alinear operativas y balancear refuerzos en picos de demanda."
            ]
        },
        {
            "id": "administracion-direccion-03",
            "codigo": "administracion-direccion-03",
            "titulo": "Proyección de ventas a día 20: margen de reacción antes del cierre",
            "descripcion": "Informe predictivo el día 20 que proyecta el cierre mensual y da 10 días de margen para corregir el rumbo antes de terminar el mes.",
            "descripcionLarga": "Sustituye la costumbre habitual de esperar al día 31 o al informe contable del mes vencido para saber cómo ha ido el periodo. A día 20, con dos tercios del mes transcurrido, proyecta el rango de facturación final combinando el ritmo medio diario con la estacionalidad del negocio, permitiendo adelantar compras con descuento o activar campañas antes de que sea tarde.",
            "ejemplo": "El día 20 a las 9:00 llega una proyección con tres escenarios (conservador, esperado y óptimo). Si el ritmo marca un cierre un 8% por debajo del objetivo presupuestario, el responsable cuenta con 10 días laborables para coordinar un refuerzo en mostradores clave o adelantar un pedido a profesionales que compute dentro del mes.",
            "viabilidad": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
            "veredicto": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 2 60 dias",
            "stack": "modelos predictivos",
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "direccion",
            "pasos": [
                "Habilitar un formulario sencillo o bot rápido accesible desde terminal de caja para registrar quejas o devoluciones complejas.",
                "Clasificar las causas típicas: producto defectuoso, error de preparación, rotura de transporte o desacuerdo en precio.",
                "Configurar un cuadro de mando mensual que compute el coste económico total de las mermas y reclamaciones.",
                "Revisar mensualmente con los jefes de sección para exigir garantías al fabricante o corregir hábitos de almacén."
            ]
        }
    ]
};

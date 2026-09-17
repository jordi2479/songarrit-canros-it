import { Categoria } from '../../types';

export const categoriaAREA07: Categoria = {
    "id": "area-07",
    "area": "global",
    "titulo": "Finanzas de Grupo",
    "propuestas": [
        {
            "id": "global-finanzas-01",
            "codigo": "global-finanzas-01",
            "titulo": "Consolidado de tesorería y previsión de liquidez del grupo",
            "descripcion": "Visión unificada de las cuentas bancarias, pagos a proveedores y cobros previstos de Palma y Campos a 30 y 60 días vista.",
            "descripcionLarga": "Evita tensiones de liquidez innecesarias en una tienda cuando la otra tiene excedente de tesorería. Agrupa en un informe semanal los saldos disponibles, las remesas de cobro de clientes y los vencimientos de recibos de proveedores, proyectando el flujo de caja global para coordinar pagos sin recurrir a pólizas de crédito costosas.",
            "ejemplo": "A día 25 el informe proyecta que Ca'n Ros tiene vencimientos de compras por 18.000 € y Son Garrit dispone de un remanente en cuenta de 24.000 €. La dirección planifica la transferencia interna con antelación sin pagar comisiones por descubierto bancario.",
            "viabilidad": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "veredicto": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "facilidad": "Medio",
            "riesgo": "Medio",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 2 60 dias",
            "stack": "tesorería consolidada",
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "finanzas",
            "pasos": [
                "Definir la estructura del informe de caja consolidado (entradas por mostrador, cobros a crédito y salidas de pago).",
                "Conectar la captura de saldos bancarios y facturación diaria para obtener una foto financiera integrada a semana vista.",
                "Modelar el calendario de vencimientos de proveedores e impuestos para anticipar posibles tensiones de tesorería.",
                "Revisar quincenalmente la previsión de caja a 30 días para coordinar transferencias o líneas de crédito."
            ]
        },
        {
            "id": "global-finanzas-02",
            "codigo": "global-finanzas-02",
            "titulo": "Política de crédito unificada para profesionales con obras en Palma y Campos",
            "descripcion": "Control del riesgo acumulado de clientes que retiran material en las dos ferreterías bajo una cuenta de crédito consolidada.",
            "descripcionLarga": "Protege al grupo contra el riesgo de clientes que acumulan deuda en una tienda mientras siguen pidiendo fiado en la otra. Establece un límite de crédito global por empresa constructora. Si un cliente adeuda 4.000 € en Palma, el mostrador de Campos es informado al instante antes de autorizarle más material a crédito.",
            "ejemplo": "Una empresa de reformas de Palma abre obra en una finca de Santanyí y acude a Ca'n Ros Campos a sacar material fiado. El sistema advierte de que ya tiene vencida una factura de 3.200 € en Son Garrit Palma, evitando que el grupo incremente el riesgo financiero sin garantías.",
            "viabilidad": "Sí mediante cruce periódico de saldos vivos por CIF de cliente. Proceso analítico de lectura y alerta preventiva.",
            "veredicto": "Sí mediante cruce periódico de saldos vivos por CIF de cliente. Proceso analítico de lectura y alerta preventiva.",
            "facilidad": "Alto",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "control de riesgo global",
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "finanzas",
            "pasos": [
                "Cruzar los listados de clientes a crédito para identificar constructores e instaladores que compran en ambas tiendas.",
                "Fijar un límite de crédito global del grupo para cada cuenta compartida, evitando acumulaciones de riesgo encubiertas.",
                "Establecer un sistema de bloqueo simultáneo si el cliente supera el plazo de pago acordado en cualquiera de los dos centros.",
                "Notificar a los equipos de administración y ventas de ambas tiendas sobre la política unificada de cobros."
            ]
        },
        {
            "id": "global-finanzas-03",
            "codigo": "global-finanzas-03",
            "titulo": "Comparativa de margen bruto y rentabilidad por familia entre tiendas",
            "descripcion": "Análisis que revela qué familias de producto son más rentables en cada localidad y dónde se escapan puntos de margen comercial.",
            "descripcionLarga": "Compara el margen neto real que deja cada categoría (herramienta eléctrica, fontanería, tornillería, cerrajería) en Palma frente a Campos. Identifica si una tienda está vendiendo con márgenes innecesariamente bajos por costumbre o si la otra tiene margen para subir precios en productos de poca elasticidad.",
            "ejemplo": "El informe muestra que en fontanería Palma trabaja con un 34% de margen bruto mientras Campos opera con un 27% en los mismos accesorios de PVC y latón. Permite ajustar el PVP en Campos para recuperar 5 puntos de margen sin perder cuota de mercado.",
            "viabilidad": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
            "veredicto": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
            "facilidad": "Medio",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 2 60 dias",
            "stack": "analítica de rentabilidad",
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "finanzas",
            "pasos": [
                "Recopilar las liquidaciones de comisiones de todos los datáfonos (TPVs físicos) y cuentas bancarias de ambas empresas.",
                "Comparar las tasas de descuento por tipo de tarjeta (doméstica, corporativa, internacional) entre las entidades financieras.",
                "Negociar en bloque con el banco proveedor unas condiciones ventajosas aprovechando la facturación conjunta.",
                "Comprobar mensualmente en los extractos la correcta aplicación de las nuevas tarifas reducidas."
            ]
        }
    ]
};

import { Categoria } from '../../types';

export const categoriaAREA06: Categoria = {
    "id": "area-06",
    "area": "operativa",
    "titulo": "Stock Compartido",
    "propuestas": [
        {
            "id": "operativa-stock-01",
            "codigo": "operativa-stock-01",
            "titulo": "Stock Cruzado",
            "descripcion": "**Consulta ágil de stock cruzado** entre Palma y Campos sobre una copia sincronizada, sin tocar ni ralentizar las bases de cobro.",
            "descripcionLarga": "Permite consultar el catálogo y existencias de la otra tienda a través de una copia desacoplada (réplica de solo lectura o volcado periódico). **Si la conexión externa o el visor fallan, los TPVs de Palma y Campos siguen cobrando con total normalidad** y sin ninguna dependencia técnica.",
            "ejemplo": "Un cliente en Campos necesita una bomba sumergible de 1,5 CV de 420 € agotada en balda. El dependiente consulta el visor en el navegador, **comprueba que en el almacén de Palma hay 2 unidades** y **confirma la venta ofreciéndosela para la mañana siguiente**.",
            "viabilidad": "Sí mediante volcado programado periódico (ej. al cierre o cada 3 horas) a una base de datos externa de consulta. Las cajas de las tiendas nunca reciben peticiones externas ni sufren bloqueos.",
            "veredicto": "Sí mediante volcado programado periódico (ej. al cierre o cada 3 horas) a una base de datos externa de consulta. Las cajas de las tiendas nunca reciben peticiones externas ni sufren bloqueos.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Next.js / Web Prototipo",
                "Volcado desde ERP/TPV (Copia periódica)",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Exportación de stock:** Configurar la exportación periódica programada de stock a un repositorio externo de consulta.",
                "**Visor web rápido:** Montar una interfaz de búsqueda ligera para que el dependiente consulte existencias en 3 segundos.",
                "**Aislamiento garantizado:** Comprobar que cualquier caída del visor o de la red no afecta en nada a la operativa de cobro de las cajas.",
                "**Capacitación de equipo:** Instruir al personal de mostrador para consultar el visor antes de comunicar una falta al cliente."
            ]
        },
        {
            "id": "operativa-stock-02",
            "codigo": "operativa-stock-02",
            "titulo": "Reservas Entre Tiendas",
            "descripcion": "**Sistema ligero de reservas** entre tiendas en un panel independiente sin alterar el inventario en caliente del ERP.",
            "descripcionLarga": "Evita que el material comprometido para una tienda se venda en el mostrador de la otra antes de que el repartidor lo cargue. Funciona como un tablero digital independiente: **cuando una tienda reserva stock de la otra, se imprime una orden física de apartado para el mozo** sin bloquear transacciones en el TPV.",
            "ejemplo": "A las 17:00 Campos anota la reserva de 3 rollos de malla electrofundida de Palma en el panel web. En el almacén de Son Garrit **se imprime la etiqueta: 'Reservado Ca'n Ros Campos — Ruta 9h'**. Al día siguiente **el cliente recoge su material sin errores**.",
            "viabilidad": "Sí mediante panel web desacoplado. No requiere modificar las tablas del ERP central; el ajuste de stock se asienta como un traspaso habitual confirmado.",
            "veredicto": "Sí mediante panel web desacoplado. No requiere modificar las tablas del ERP central; el ajuste de stock se asienta como un traspaso habitual confirmado.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Next.js / Web",
                "Volcado desde ERP/TPV"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Panel de reservas:** Crear un tablero web sencillo accesible desde el navegador de mostrador para solicitar material.",
                "**Etiqueta física:** Definir la rutina de almacén con impresión de la etiqueta de apartado para la furgoneta de enlace.",
                "**Ruta de transporte:** Fijar las frecuencias de salida de la ruta entre Palma y Campos (ej. martes y jueves a primera hora).",
                "**Asentamiento formal:** Registrar el traspaso en el ERP de destino únicamente cuando la mercancía ha sido descargada físicamente."
            ]
        },
        {
            "id": "operativa-stock-03",
            "codigo": "operativa-stock-03",
            "titulo": "Traspasos Automáticos",
            "descripcion": "**Generador de albaranes de traspaso** entre sociedades para mantener el inventario y la contabilidad impecables sin doble trabajo manual.",
            "descripcionLarga": "Asegura que cada movimiento de mercancía entre Palma y Campos quede legal y fiscalmente registrado sin exigir tiempo extra a administración. **Al confirmar un traspaso, genera automáticamente el documento de salida en origen y de entrada en destino con valoración a precio de coste interno**, evitando descuadres.",
            "ejemplo": "Al cargar 1.200 € en herramientas de Palma para reforzar la campaña de poda en Campos, **el sistema imprime el albarán de traspaso valorado entre las dos razones sociales**. El inventario de Palma descuenta unidades y Campos las suma **sin picar referencias a mano**.",
            "viabilidad": "Sí mediante plantilla de traspaso interno estandarizada. Con especialista si se automatiza el asiento en ambos ERPs.",
            "veredicto": "Sí mediante plantilla de traspaso interno estandarizada. Con especialista si se automatiza el asiento en ambos ERPs.",
            "dificultad": "Media",
            "riesgo": "Medio",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcado desde ERP/TPV (Albarán interno)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "Importación a ERP/TPV (CSV validado)"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Detección de obsoletos:** Generar el listado de referencias con más de 180 días sin movimiento de venta en ambos almacenes.",
                "**Valoración de coste:** Clasificar el material por valor inmovilizado y margen para definir la valoración interna del traspaso.",
                "**Documento legal:** Generar la plantilla de albarán intersocietario que cumple todos los requisitos fiscales de transporte de mercancías.",
                "**Regularización contable:** Integrar los albaranes de traspaso mensualmente en las contabilidades de ambas mercantiles."
            ]
        }
    ]
};

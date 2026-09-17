import { Categoria } from '../../types';

export const categoriaAREA06: Categoria = {
    "id": "area-06",
    "area": "operativa",
    "titulo": "Stock Compartido",
    "propuestas": [
        {
            "id": "operativa-stock-01",
            "codigo": "operativa-stock-01",
            "titulo": "Visor de existencias cruzadas sobre réplica desacoplada",
            "descripcion": "Consulta ágil de stock entre Palma y Campos sobre una copia sincronizada periódicamente, sin tocar ni ralentizar las bases de datos de cobro de las tiendas.",
            "descripcionLarga": "Permite consultar el catálogo y existencias de la otra tienda a través de una copia desacoplada (réplica de solo lectura o volcado periódico en la nube). Si la conexión a internet o el visor fallan, los TPVs de Palma y Campos siguen cobrando con total normalidad y sin ninguna dependencia técnica.",
            "ejemplo": "Un cliente en Campos necesita una bomba sumergible de 1,5 CV de 420 € agotada en balda. El dependiente consulta el visor en una pestaña del navegador (que lee la copia de stock), comprueba que en el almacén de Palma hay 2 unidades y confirma la venta ofreciéndosela para la mañana siguiente.",
            "viabilidad": "Sí mediante volcado programado periódico (ej. al cierre o cada 3 horas) a una base de datos externa de consulta. Las cajas de las tiendas nunca reciben peticiones externas ni sufren bloqueos.",
            "veredicto": "Sí mediante volcado programado periódico (ej. al cierre o cada 3 horas) a una base de datos externa de consulta. Las cajas de las tiendas nunca reciben peticiones externas ni sufren bloqueos.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "visor cruzado de stock",
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "stock",
            "pasos": [
                "Configurar la exportación periódica programada de stock a un repositorio o base de datos externa de consulta.",
                "Montar una interfaz de búsqueda web ligera y rápida para el personal de mostrador.",
                "Comprobar que una caída del visor o de la red externa no afecta en nada a la operativa de cobro del TPV local.",
                "Instruir al equipo para consultar la copia cruzada antes de comunicar una falta al cliente."
            ]
        },
        {
            "id": "operativa-stock-02",
            "codigo": "operativa-stock-02",
            "titulo": "Gestor de reservas cruzadas para la ruta de reparto interna",
            "descripcion": "Sistema ligero de apartado que registra reservas entre tiendas en un panel independiente sin alterar el inventario en caliente del ERP.",
            "descripcionLarga": "Evita que el material comprometido para una tienda se venda en el mostrador de la otra antes de que el repartidor lo cargue. Funciona como un tablero digital independiente: cuando Campos anota una reserva con stock de Palma, se imprime una orden física de apartado para el mozo de almacén sin bloquear transacciones de venta en el TPV.",
            "ejemplo": "A las 17:00 Campos anota la reserva de 3 rollos de malla electrofundida de Palma en el panel web. En el almacén de Son Garrit se imprime la etiqueta: \"Reservado Ca'n Ros Campos — Ruta 9h\". Al día siguiente el cliente recoge su material sin errores.",
            "viabilidad": "Sí mediante panel web desacoplado. No requiere modificar las tablas del ERP central; el ajuste de stock se asienta como un traspaso habitual confirmado.",
            "veredicto": "Sí mediante panel web desacoplado. No requiere modificar las tablas del ERP central; el ajuste de stock se asienta como un traspaso habitual confirmado.",
            "dificultad": "Media",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 2 60 dias",
            "stack": "gestor de reservas",
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "stock",
            "pasos": [
                "Crear un tablero web sencillo de reservas accesible desde el navegador de mostrador.",
                "Definir la rutina de almacén: impresión automática o manual de la etiqueta de apartado para la furgoneta.",
                "Fijar las frecuencias de salida de la ruta entre Palma y Campos (ej. martes y jueves a primera hora).",
                "Registrar el traspaso formal en el TPV de destino únicamente cuando la mercancía ha sido descargada físicamente."
            ]
        },
        {
            "id": "operativa-stock-03",
            "codigo": "operativa-stock-03",
            "titulo": "Protocolo automático de traspaso con albarán interno transparente",
            "descripcion": "Generador de albaranes de traspaso interno entre sociedades para mantener el inventario y la contabilidad impecables sin doble trabajo manual.",
            "descripcionLarga": "Asegura que cada movimiento de mercancía entre Palma y Campos quede legal y fiscalmente registrado sin exigir tiempo extra a administración. Al confirmar un traspaso, genera automáticamente el documento de salida en origen y de entrada en destino con valoración a precio de coste interno, evitando descuadres en auditorías de inventario.",
            "ejemplo": "Al cargar 1.200 € en herramientas de Palma para reforzar la campaña de poda en Campos, el sistema imprime el albarán de traspaso valorado entre las dos razones sociales. El inventario de Palma descuenta las unidades y el de Campos las suma sin picar referencias a mano.",
            "viabilidad": "Sí mediante plantilla de traspaso interno estandarizada. Con especialista si se automatiza el asiento en ambos ERPs.",
            "veredicto": "Sí mediante plantilla de traspaso interno estandarizada. Con especialista si se automatiza el asiento en ambos ERPs.",
            "dificultad": "Media",
            "riesgo": "Medio",
            "beneficio": "Alto",
            "acceso": "escritura",
            "fase": "Fase 2 60 dias",
            "stack": "traspaso interempresas",
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "stock",
            "pasos": [
                "Generar el listado de referencias con más de 180 días sin movimiento de venta en ambos almacenes.",
                "Filtrar por valor inmovilizado y clasificar entre material descatalogado, obsoleto o de baja rotación.",
                "Diseñar la estrategia de salida: traslado a la tienda con mayor potencial, pack de liquidación o zona outlet física.",
                "Monitorear mensualmente la recuperación de liquidez conseguida a través de la liquidación de obsoletos."
            ]
        }
    ]
};

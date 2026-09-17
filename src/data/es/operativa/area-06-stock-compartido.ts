import { Categoria } from '../../types';

export const categoriaAREA06: Categoria = {
  "id": "area-06",
  "area": "operativa",
  "titulo": "Stock Compartido",
  "propuestas": [
    {
        "id": "operativa-stock-01",
        "codigo": "operativa-stock-01",
        "titulo": "Visor de existencias en tiempo real entre Palma y Campos",
        "descripcion": "Consulta ágil desde el mostrador de Campos para saber si un artículo agotado está disponible en el almacén de Palma antes de perder la venta.",
        "descripcionLarga": "Elimina las llamadas telefónicas entre mostradores para consultar stock. Cuando un instalador o particular solicita una herramienta o pieza que no está en la balda de Campos, el empleado introduce el código o nombre y ve al instante si hay existencias en Son Garrit Palma, con cuántas unidades y si están reservadas.",
        "ejemplo": "Un cliente en Campos necesita con urgencia una bomba sumergible de 1,5 CV de 420 € que está agotada en tienda. El dependiente consulta el visor en la pantalla del TPV, comprueba que Palma tiene 2 unidades en almacén y confirma la venta ofreciéndosela para la mañana siguiente.",
        "viabilidad": "Sí mediante exportación o sincronización de lectura de existencias diarias entre ambos almacenes. No escribe ni altera el inventario real.",
        "veredicto": "Sí mediante exportación o sincronización de lectura de existencias diarias entre ambos almacenes. No escribe ni altera el inventario real.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "visor cruzado de stock",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "stock"
    },
    {
        "id": "operativa-stock-02",
        "codigo": "operativa-stock-02",
        "titulo": "Gestor de reservas cruzadas para la ruta de reparto interna",
        "descripcion": "Sistema de apartado que bloquea material en una tienda para subirlo a la furgoneta de la ruta matinal hacia la otra tienda.",
        "descripcionLarga": "Evita que el material comprometido para una tienda se venda en el mostrador de la otra antes de que el repartidor lo cargue. Cuando Campos confirma una venta con stock de Palma, el sistema genera una etiqueta de reserva con el nombre del cliente y fecha de entrega para que el mozo lo aparte en la zona de expedición.",
        "ejemplo": "A las 17:00 Campos reserva 3 rollos de malla electrofundida de Palma. En Son Garrit se imprime una orden en almacén con aviso visual: \"Reservado para Ca'n Ros Campos — Ruta mañana 9h\". Al día siguiente a primera hora el cliente retira su pedido en Campos.",
        "viabilidad": "Sí mediante hoja o sistema ligero de reservas compartidas. Con apoyo puntual para coordinar aviso a almacén sin tocar el ERP principal.",
        "veredicto": "Sí mediante hoja o sistema ligero de reservas compartidas. Con apoyo puntual para coordinar aviso a almacén sin tocar el ERP principal.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 2 60 dias",
        "stack": "gestor de reservas",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "stock"
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
        "facilidad": "Medio",
        "riesgo": "Medio",
        "beneficio": "Alto",
        "acceso": "escritura",
        "fase": "Fase 2 60 dias",
        "stack": "traspaso interempresas",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "stock"
    }
]
};

import { Categoria } from '../../types';

export const categoriaAREA01: Categoria = {
  "id": "area-01",
  "area": "operativa",
  "titulo": "Compras & Stock",
  "propuestas": [
    {
        "id": "operativa-compras-01",
        "codigo": "operativa-compras-01",
        "titulo": "Propuesta de pedido semanal sugerido por rotación y roturas",
        "descripcion": "Borrador automático de pedido semanal que calcula cantidades óptimas según ventas recientes y stock mínimo, evitando roturas sin sobrecargar almacén.",
        "descripcionLarga": "Calcula semanalmente la propuesta de compra para proveedores habituales cruzando la rotación de los últimos 30 a 90 días con las existencias reales. Elimina el tiempo que el encargado dedica a revisar estanterías con libreta y evita pedidos de memoria. El responsable de tienda revisa la lista en 10 minutos, ajusta si lo considera y valida el pedido con un solo clic.",
        "ejemplo": "Cada lunes a las 8:30 el encargado de compras recibe una propuesta con 18 referencias necesarias (cemento, discos de corte, tacos del 6). Se marcan en rojo dos referencias con riesgo inminente de rotura y se propone la cantidad exacta para cubrir dos semanas sin sobredimensionar el almacén.",
        "viabilidad": "Sí con la exportación semanal de ventas y stock actual desde el TPV/ERP. No requiere conexión directa de escritura; el sistema entrega el borrador ordenado para confirmación humana.",
        "veredicto": "Sí con la exportación semanal de ventas y stock actual desde el TPV/ERP. No requiere conexión directa de escritura; el sistema entrega el borrador ordenado para confirmación humana.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "no-code / automatización",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "compras"
    },
    {
        "id": "operativa-compras-02",
        "codigo": "operativa-compras-02",
        "titulo": "Alerta de rotura crítica y aviso instantáneo en mostrador",
        "descripcion": "Notificación inmediata cuando un producto de alta rotación llega a cero existencias, activando la búsqueda de sustitutos o reposición urgente.",
        "descripcionLarga": "Detecta en el mismo momento del cobro si una referencia clave (tipo A de ventas) se queda sin stock en estantería. Envía un aviso discreto al equipo de mostrador indicando si queda mercancía en el altillo, en la otra tienda del grupo o sugiriendo la referencia sustituta equivalente para no perder la venta del profesional.",
        "ejemplo": "Al cobrar en caja la última bolsa de anclaje químico de 300ml, salta una alerta en pantalla: stock agotado en mostrador. Informa al empleado de que en Ca'n Ros Campos quedan 8 botes en trastienda y sugiere al cliente la marca equivalente disponible en estantería.",
        "viabilidad": "Sí a partir del fichero diario de movimientos de stock. Sin integración profunda al inicio; opera mediante alertas programadas de umbral mínimo.",
        "veredicto": "Sí a partir del fichero diario de movimientos de stock. Sin integración profunda al inicio; opera mediante alertas programadas de umbral mínimo.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "alertas / bot interno",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "compras"
    },
    {
        "id": "operativa-compras-03",
        "codigo": "operativa-compras-03",
        "titulo": "Auditoría automática de Albarán vs Factura con reclamación al proveedor",
        "descripcion": "Cotejo digital entre albaranes firmados y facturas recibidas de proveedores para detectar discrepancias en precios, cantidades o descuentos acordados.",
        "descripcionLarga": "Cruza sistemáticamente cada factura mensual del proveedor con los albaranes de entrega recepcionados en tienda. Identifica discrepancias habituales en ferretería: portes cobrados indebidamente, referencias no entregadas pero facturadas o tarifas sin el descuento pactado. Si hay error, redacta automáticamente el borrador de reclamación detallado.",
        "ejemplo": "Al recibir la factura mensual de un proveedor de tornillería, el sistema detecta que se han facturado 5 cajas no firmadas en ningún albarán (diferencia de 185 €). Prepara un correo con copia de los albaranes y el detalle del descuadre para que administración lo envíe al proveedor en 1 clic.",
        "viabilidad": "Sí con los PDF o escaneos de facturas y albaranes. Proceso documental que no toca bancos ni contabilidad; ahorra horas de punteo manual a administración.",
        "veredicto": "Sí con los PDF o escaneos de facturas y albaranes. Proceso documental que no toca bancos ni contabilidad; ahorra horas de punteo manual a administración.",
        "facilidad": "Medio",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 2 60 dias",
        "stack": "procesamiento documental",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "compras"
    }
]
};

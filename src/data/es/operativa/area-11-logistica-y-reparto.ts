import { Categoria } from '../../types';

export const categoriaAREA11: Categoria = {
    "id": "area-11",
    "area": "operativa",
    "titulo": "Logística & Reparto",
    "propuestas": [
        {
            "id": "operativa-logistica-01",
            "codigo": "operativa-logistica-01",
            "titulo": "Rutas de Reparto",
            "descripcion": "**Organización eficiente de furgoneta** para agrupar entregas a obras y traspasos entre tiendas sin viajes en vacío.",
            "descripcionLarga": "Reduce drásticamente el gasto en combustible y tiempo de chófer. En lugar de hacer viajes improvisados cada vez que alguien pide algo urgente, **fija dos días de ruta fija (martes y jueves)**. El sistema ordena los bultos por puntos de entrega en el mapa maximizando la carga del vehículo.",
            "ejemplo": "El martes por la mañana la furgoneta sale de Palma con **12 pedidos de clientes en obra en la zona sur y 4 traspasos para Ca'n Ros**. El sistema optimiza el recorrido de paradas **ahorrando 45 km de trayecto y 40 minutos de conducción**.",
            "viabilidad": "Sí mediante herramienta de optimización de rutas gratuita conectada a las direcciones de los albaranes de entrega.",
            "veredicto": "Sí mediante herramienta de optimización de rutas gratuita conectada a las direcciones de los albaranes de entrega.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Maps / Rutas",
                "WhatsApp Business",
                "Volcado desde ERP/TPV (Entregas)"
            ],
            "softwareOpcional": [
                "Microsoft Excel",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Hoja de ruta digital:** Centralizar en una hoja de ruta digital los pedidos confirmados para reparto antes de las 18:00 del día previo.",
                "**Agrupación geográfica:** Agrupar las entregas por zonas de Mallorca (Palma ciudad, comarca Migjorn, levante) optimizando kilómetros.",
                "**Franja de entrega:** Asignar la franja estimada de entrega (mañana o tarde) y notificar al cliente mediante SMS o WhatsApp automático.",
                "**Control de consumos:** Revisar semanalmente los tiempos de ruta y el coste medio de combustible por entrega efectuada."
            ]
        },
        {
            "id": "operativa-logistica-02",
            "codigo": "operativa-logistica-02",
            "titulo": "Entregas en Obra",
            "descripcion": "**Notificación con foto por WhatsApp** al constructor cuando el material queda descargado a pie de obra como comprobante oficial.",
            "descripcionLarga": "Acaba con los conflictos típicos de reparto: '¿Dónde me has dejado los sacos de cemento? Yo no he visto nada'. **Al descargar en la finca u obra, el chófer saca 1 foto del material en el suelo desde el móvil**. El sistema envía automáticamente la foto y hora al WhatsApp del cliente como comprobante.",
            "ejemplo": "El repartidor descarga 2 palets de mortero y varillas en una obra en Ses Salines a las 11:20. **Hace una foto rápida y el constructor recibe un mensaje en su móvil con la imagen y hora exacta**, evitando discusiones de entrega.",
            "viabilidad": "Sí mediante bot de WhatsApp vinculado a foto de entrega del conductor. Cero papeleo y protección total contra reclamaciones falsas.",
            "veredicto": "Sí mediante bot de WhatsApp vinculado a foto de entrega del conductor. Cero papeleo y protección total contra reclamaciones falsas.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business (Fotos/Ubicación)",
                "Volcado desde ERP/TPV (Albaranes)"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Google Drive"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**App en móvil de reparto:** Instalar una herramienta móvil ligera en el teléfono corporativo del repartidor para captura de albaranes.",
                "**Foto de comprobante:** Exigir la captura obligatoria de la foto del material descargado a pie de obra junto a la firma.",
                "**Sincronización en tiempo real:** Sincronizar el albarán firmado con administración en tiempo real en cuanto el chófer pulsa 'Entregado'.",
                "**Cero reclamaciones:** Reducir a cero las reclamaciones de clientes que afirman no haber recibido material pesado en obra."
            ]
        },
        {
            "id": "operativa-logistica-03",
            "codigo": "operativa-logistica-03",
            "titulo": "Calculador de Portes",
            "descripcion": "**Regla automática de portes** en mostrador que calcula cuándo compensa regalar el transporte a obra y cuándo debe cobrarse tarifa.",
            "descripcionLarga": "Evita perder dinero en repartos donde el valor del margen de venta es inferior al coste real del camión y del chófer. **Calcula en función de la distancia y el margen del pedido si la entrega es viable gratis** (ej. pedidos de más de 300 € o con margen superior a 80 €) o si debe añadirse un cargo estándar de transporte.",
            "ejemplo": "Un cliente pide que le lleven a una finca a 14 km una carretilla y dos palas (total 65 €, margen 18 €). El sistema avisa en pantalla: **'Margen insuficiente para porte gratuito; aplicar tarifa de reparto 15 € o invitar a recogida en tienda'**.",
            "viabilidad": "Sí mediante regla de cálculo en hoja o TPV con criterios claros de margen mínimo y kilometraje.",
            "veredicto": "Sí mediante regla de cálculo en hoja o TPV con criterios claros de margen mínimo y kilometraje.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Microsoft Excel",
                "Google Antigravity",
                "Next.js / Web"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude Code"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Tabla de distancias:** Definir los radios kilométricos desde Palma y Campos (Zona 1: 0-10 km, Zona 2: 10-25 km, Zona 3: >25 km).",
                "**Margen umbral:** Fijar el importe mínimo de margen bruto para otorgar porte bonificado por tramo de distancia.",
                "**Aviso en mostrador:** Mostrar al dependiente en pantalla el coste sugerido de porte antes de cerrar la venta.",
                "**Tarifa transparente:** Publicar las tarifas de transporte de obra visibles en mostrador para conocimiento de los profesionales."
            ]
        }
    ]
};

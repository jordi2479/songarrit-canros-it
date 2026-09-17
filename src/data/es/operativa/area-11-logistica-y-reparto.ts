import { Categoria } from '../../types';

export const categoriaAREA11: Categoria = {
  "id": "area-11",
  "area": "operativa",
  "titulo": "Logística & Reparto",
  "propuestas": [
    {
        "id": "operativa-logistica-01",
        "codigo": "operativa-logistica-01",
        "titulo": "Planificador de rutas de reparto 2 veces por semana Palma-Campos",
        "descripcion": "Organización eficiente de los viajes de furgoneta para agrupar entregas a obras y traspasos entre tiendas sin viajes en vacío.",
        "descripcionLarga": "Reduce drásticamente el gasto en combustible y tiempo de chófer. En lugar de hacer viajes improvisados cada vez que alguien pide algo urgente, fija dos días de ruta fija (martes y jueves). El sistema ordena los bultos por puntos de entrega en el mapa (Llucmajor, Campos, Santanyí) maximizando la carga del vehículo.",
        "ejemplo": "El martes por la mañana la furgoneta sale de Palma con 12 pedidos de clientes en obra en la zona sur y 4 traspasos para Ca'n Ros. El sistema optimiza el recorrido de paradas ahorrando 45 km de trayecto y 40 minutos de conducción.",
        "viabilidad": "Sí mediante herramienta de optimización de rutas gratuita conectada a las direcciones de los albaranes de entrega.",
        "veredicto": "Sí mediante herramienta de optimización de rutas gratuita conectada a las direcciones de los albaranes de entrega.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "planificador de rutas",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "logistica"
    },
    {
        "id": "operativa-logistica-02",
        "codigo": "operativa-logistica-02",
        "titulo": "Confirmación de entrega en obra con fotografía y aviso automático al cliente",
        "descripcion": "Notificación instantánea por WhatsApp al constructor cuando el material queda descargado a pie de obra con foto de comprobante.",
        "descripcionLarga": "Acaba con los conflictos típicos de reparto: \"¿Dónde me has dejado los sacos de cemento? Yo no he visto nada\". Al descargar en la finca u obra, el chófer saca 1 foto del material en el suelo desde el móvil. El sistema envía automáticamente la foto y hora al WhatsApp del cliente como comprobante de entrega.",
        "ejemplo": "El repartidor descarga 2 palets de mortero y varillas en una obra en Ses Salines a las 11:20. Hace una foto rápida y el constructor recibe un mensaje en su móvil: \"Tu material ha quedado depositado en la entrada de la obra. Gracias por confiar en Ca'n Ros\".",
        "viabilidad": "Sí mediante bot de WhatsApp vinculado a foto de entrega del conductor. Cero papeleo y protección total contra reclamaciones falsas.",
        "veredicto": "Sí mediante bot de WhatsApp vinculado a foto de entrega del conductor. Cero papeleo y protección total contra reclamaciones falsas.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "comprobante móvil / WhatsApp",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "logistica"
    },
    {
        "id": "operativa-logistica-03",
        "codigo": "operativa-logistica-03",
        "titulo": "Calculador de umbral de rentabilidad para portes gratuitos",
        "descripcion": "Regla automática en mostrador que fija cuándo compensa regalar el porte a pie de obra y cuándo debe cobrarse tarifa de transporte.",
        "descripcionLarga": "Evita perder dinero en repartos donde el valor del margen de venta es inferior al coste real del camión y del chófer. Calcula en función de la distancia y el margen del pedido si la entrega es viable gratis (ej. pedidos de más de 300 € o con margen superior a 80 €) o si debe añadirse un cargo estándar de 25 € de transporte.",
        "ejemplo": "Un cliente pide que le lleven a una finca a 14 km una carretilla y dos palas (total 65 €, margen 18 €). El sistema avisa en pantalla: \"Margen insuficiente para porte gratuito; aplicar tarifa de reparto 15 € o invitar a recogida en tienda\".",
        "viabilidad": "Sí mediante regla de cálculo en hoja o TPV con criterios claros de margen mínimo y kilometraje.",
        "veredicto": "Sí mediante regla de cálculo en hoja o TPV con criterios claros de margen mínimo y kilometraje.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "cálculo de costes de reparto",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "logistica"
    }
]
};

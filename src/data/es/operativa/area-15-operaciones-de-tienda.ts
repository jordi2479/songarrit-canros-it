import { Categoria } from '../../types';

export const categoriaAREA15: Categoria = {
    "id": "area-15",
    "area": "operativa",
    "titulo": "Operaciones de Tienda",
    "propuestas": [
        {
            "id": "operativa-operaciones-01",
            "codigo": "operativa-operaciones-01",
            "titulo": "Recogida en Tienda",
            "descripcion": "**Servicio de recogida rápida** para profesionales que encargan material por WhatsApp a primera hora y lo recogen sin hacer cola.",
            "descripcionLarga": "Fideliza a los contratistas y gremios que no pueden permitirse perder 20 minutos esperando turno en mostrador a las 8:00 de la mañana. **El cliente envía su lista de materiales temprano; el mozo prepara la caja o palet en almacén** y cuando está listo, el sistema le notifica para recogida exprés.",
            "ejemplo": "Un electricista manda a las 7:15 la lista de tubo corrugado y cajas de empalme. A las 7:45 recibe el aviso de pedido preparado. **Llega a las 8:00, muestra el código en el muelle de carga, carga la furgoneta en 3 minutos y se va a la obra**.",
            "viabilidad": "Sí mediante protocolo organizativo de preparación de pedidos y aviso por mensaje estándar.",
            "veredicto": "Sí mediante protocolo organizativo de preparación de pedidos y aviso por mensaje estándar.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Next.js / Web Prototipo",
                "Volcado desde ERP/TPV"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Canal de recepción:** Habilitar un canal prioritario de WhatsApp para pedidos con recogida en tienda el mismo día.",
                "**Preparación en almacén:** Fijar el protocolo de preparación exprés: bultos revisados y etiquetados en menos de 45 minutos.",
                "**Zona de entrega rápida:** Habilitar un espacio señalizado junto al muelle para que el profesional recoja sin esperar en caja.",
                "**Comprobación de tiempos:** Medir el tiempo medio de permanencia del cliente desde su llegada hasta su salida con el material."
            ]
        },
        {
            "id": "operativa-operaciones-02",
            "codigo": "operativa-operaciones-02",
            "titulo": "Encargos Especiales",
            "descripcion": "**Gestor digital de encargos especiales** que sustituye la libreta de papel y avisa al cliente por WhatsApp en cuanto el proveedor entrega el paquete.",
            "descripcionLarga": "Acaba con el desorden de notas adhesivas y libretas donde se anotan piezas raras que pide la gente. **Cuando un cliente encarga un repuesto especial, se registra con su teléfono**. Cuando el paquete llega en el reparto del proveedor y se recepciona, **el sistema envía un mensaje automático al cliente para que pase a recogerlo**.",
            "ejemplo": "Un payés encarga una cuchilla especial para motoazada que no se tiene habitualmente en tienda. Se anota en el sistema digital. **Cuando el distribuidor la entrega tres días después, el cliente recibe un WhatsApp automático al instante**.",
            "viabilidad": "Sí mediante lista digital compartida entre dependientes y almacén.",
            "veredicto": "Sí mediante lista digital compartida entre dependientes y almacén.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Alto",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Sheets / Docs",
                "Volcado desde ERP/TPV"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Ficha digital de encargo:** Formulario rápido en terminal de mostrador con nombre, teléfono, referencia, proveedor y anticipo.",
                "**Identificación de bulto:** Etiquetar la caja al llegar del proveedor con el código del encargo y ubicar en casillero de reservas.",
                "**Aviso automático:** Enviar mensaje instantáneo de aviso al cliente con horario de tienda y saldo pendiente a abonar.",
                "**Control de no retirados:** Revisar quincenalmente los encargos que lleven más de 15 días sin recoger para contactar con el cliente."
            ]
        },
        {
            "id": "operativa-operaciones-03",
            "codigo": "operativa-operaciones-03",
            "titulo": "Control de Alquileres",
            "descripcion": "**Contrato digital rápido en tablet** para préstamos de herramientas, alquiler de maquinaria y control de fianzas en un minuto.",
            "descripcionLarga": "Profesionaliza el servicio de alquiler o préstamo de maquinaria pesada (martillos demoledores, hormigoneras, desbrozadoras o escaleras extensibles). **Genera en la tablet de mostrador el contrato con foto del DNI del cliente, importe de fianza retenida y fecha pactada de devolución**, enviando recordatorio el día de entrega.",
            "ejemplo": "Un particular alquila un martillo demoledor por un fin de semana (fianza de 150 €, 35 €/día). **Firma en la tablet en 45 segundos y recibe el contrato en su correo**. El lunes a las 8:00 recibe un recordatorio para devolver la máquina antes de las 13:00.",
            "viabilidad": "Sí mediante plantilla digital de alquiler de maquinaria con firma táctil en móvil o tablet.",
            "veredicto": "Sí mediante plantilla digital de alquiler de maquinaria con firma táctil en móvil o tablet.",
            "dificultad": "Baja",
            "riesgo": "Bajo",
            "beneficio": "Medio",
            "acceso": "lectura",
            "fase": "Fase 1 30 dias",
            "stack": "análisis desacoplado",
            "softwareRecomendado": [
                "Google Sheets / Excel",
                "WhatsApp Business (Firma/Foto DNI)"
            ],
            "softwareOpcional": [
                "Next.js / Web",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Plantilla legal de contrato:** Configurar el modelo digital con condiciones de uso, coberturas de seguro y tabla de tarifas diarias.",
                "**Captura de firma y fianza:** Recoger la firma digital en la tablet y registrar el depósito de fianza en efectivo o retención de tarjeta.",
                "**Recordatorio de devolución:** Programar mensaje automático 4 horas antes del vencimiento del periodo de alquiler acordado.",
                "**Checklist de revisión:** Comprobar el estado técnico de la máquina a su retorno antes de liberar la fianza al cliente."
            ]
        }
    ]
};

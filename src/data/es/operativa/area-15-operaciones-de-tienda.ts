import { Categoria } from '../../types';

export const categoriaAREA15: Categoria = {
  "id": "area-15",
  "area": "operativa",
  "titulo": "Operaciones de Tienda",
  "propuestas": [
    {
        "id": "operativa-operaciones-01",
        "codigo": "operativa-operaciones-01",
        "titulo": "Click & Collect de mostrador con aviso automático de pedido preparado",
        "descripcion": "Servicio de recogida rápida para profesionales que encargan material por WhatsApp a primera hora y lo recogen empaquetado sin hacer cola.",
        "descripcionLarga": "Fideliza a los contratistas y gremios que no pueden permitirse perder 20 minutos esperando turno en mostrador a las 8:00 de la mañana. El cliente envía su lista de materiales por la mañana temprano; el mozo prepara la caja o palet en almacén y cuando está listo, el sistema le notifica: \"Tu pedido #42 está listo en el muelle de recogida\".",
        "ejemplo": "Un electricista manda a las 7:15 la lista de tubo corrugado y cajas de empalme. A las 7:45 recibe el aviso de pedido empaquetado. Llega a las 8:00, muestra el código en el muelle de carga, carga la furgoneta en 3 minutos y se va a la obra.",
        "viabilidad": "Sí mediante protocolo organizativo de preparación de pedidos y aviso por mensaje estándar.",
        "veredicto": "Sí mediante protocolo organizativo de preparación de pedidos y aviso por mensaje estándar.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "gestión de preparación pedidos",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "operaciones"
    },
    {
        "id": "operativa-operaciones-02",
        "codigo": "operativa-operaciones-02",
        "titulo": "Cuaderno digital de encargos especiales con aviso de llegada al cliente",
        "descripcion": "Sustituye la libreta de papel de mostrador para registrar pedidos especiales y avisar al cliente en cuanto el proveedor entrega el paquete.",
        "descripcionLarga": "Acaba con el desorden de notas adhesivas y libretas donde se anotan piezas raras que pide la gente. Cuando un cliente encarga un repuesto especial, se registra con su teléfono. Cuando el paquete llega en el reparto del proveedor y se recepciona, el sistema envía un mensaje automático al cliente: \"Tu encargo ya ha llegado a Ca'n Ros, puedes pasar a retirarlo\".",
        "ejemplo": "Un payés encarga una cuchilla especial para motoazada que no se tiene habitualmente en tienda. Se anota en el sistema digital. Cuando el distribuidor la entrega tres días después, el cliente recibe un WhatsApp automático al instante.",
        "viabilidad": "Sí mediante lista digital compartida entre dependientes y almacén.",
        "veredicto": "Sí mediante lista digital compartida entre dependientes y almacén.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "cuaderno de encargos digital",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "operaciones"
    },
    {
        "id": "operativa-operaciones-03",
        "codigo": "operativa-operaciones-03",
        "titulo": "Gestión y control de préstamos o alquiler de maquinaria y herramientas",
        "descripcion": "Contrato digital rápido en tablet para préstamos de herramientas, alquiler de maquinaria y control de fianzas en un minuto.",
        "descripcionLarga": "Profesionaliza el servicio de alquiler o préstamo de maquinaria pesada (martillos demoledores, hormigoneras, desbrozadoras o escaleras extensibles). Genera en la tablet de mostrador el contrato con foto del DNI del cliente, importe de fianza retenida y fecha pactada de devolución, enviando recordatorio el día de entrega.",
        "ejemplo": "Un particular alquila un martillo demoledor por un fin de semana (fianza de 150 €, 35 €/día). Firma en la tablet en 45 segundos y recibe el contrato en su correo. El lunes a las 8:00 recibe un recordatorio para devolver la máquina antes de las 13:00.",
        "viabilidad": "Sí mediante plantilla digital de alquiler de maquinaria con firma táctil en móvil o tablet.",
        "veredicto": "Sí mediante plantilla digital de alquiler de maquinaria con firma táctil en móvil o tablet.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Medio",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "gestión de alquileres",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "operaciones"
    }
]
};

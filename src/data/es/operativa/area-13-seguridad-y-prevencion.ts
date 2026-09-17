import { Categoria } from '../../types';

export const categoriaAREA13: Categoria = {
  "id": "area-13",
  "area": "operativa",
  "titulo": "Seguridad & Prevención",
  "propuestas": [
    {
        "id": "operativa-seguridad-01",
        "codigo": "operativa-seguridad-01",
        "titulo": "Checklist de apertura y cierre de tienda con verificación fotográfica",
        "descripcion": "Verificación diaria de puertas, persianas, patio exterior y alarma conectada al terminar la jornada con foto enviada a la dirección.",
        "descripcionLarga": "Garantiza la tranquilidad de los dueños de que el local queda 100% seguro cada noche sin tener que acudir en persona. El empleado que cierra hace un recorrido de 2 minutos comprobando: dinero guardado en caja fuerte, patio de materiales candado, maquinaria guardada y panel de alarma activado, adjuntando una foto de confirmación.",
        "ejemplo": "A las 19:45 el encargado de cierre completa el checklist en el móvil y saca foto del panel de la alarma en verde y la cancela del patio bloqueada. Los socios en Palma reciben la confirmación inmediata de tienda cerrada y segura.",
        "viabilidad": "Sí mediante bot simple de mensajería o formulario móvil sin coste de equipamiento adicional.",
        "veredicto": "Sí mediante bot simple de mensajería o formulario móvil sin coste de equipamiento adicional.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Medio",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "checklist de cierre móvil",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "seguridad"
    },
    {
        "id": "operativa-seguridad-02",
        "codigo": "operativa-seguridad-02",
        "titulo": "Auditoría de descuadres de caja por turno y puesto de cobro",
        "descripcion": "Trazabilidad de diferencias en efectivo que aísla si los descuadres ocurren en un cajón concreto o en cambios de turno.",
        "descripcionLarga": "Evita tensiones y sospechas infundadas dentro de la plantilla ante faltas de dinero en el cajón. Registra de forma individualizada el cuadre al inicio y final de cada turno. Si se produce un descuadre reiterado, identifica el patrón (horario, puesto o turno) de forma objetiva con datos contrastables.",
        "ejemplo": "Durante dos semanas se detectan pequeñas diferencias recurrentes de 10-20 € en efectivo los sábados por la mañana. El informe cruza los datos y concluye que el descuadre se debe a un error sistemático en el cambio de una moneda de cambio al inicio del turno, no a sustracción.",
        "viabilidad": "Sí mediante registro de turnos en la hoja de cierre de caja diaria.",
        "veredicto": "Sí mediante registro de turnos en la hoja de cierre de caja diaria.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "auditoría de caja",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "seguridad"
    },
    {
        "id": "operativa-seguridad-03",
        "codigo": "operativa-seguridad-03",
        "titulo": "Detector de mermas desconocidas por muestreo rotativo de inventario",
        "descripcion": "Plan de conteo de 5 referencias de alto valor al día para detectar hurtos o pérdidas sin paralizar la tienda para hacer inventarios.",
        "descripcionLarga": "En ferretería el hurto de referencias pequeñas pero caras (brocas de cobalto, discos de diamante, alicates aislados, candados) desangra el margen sin que nadie se dé cuenta hasta el inventario anual. Este sistema selecciona cada mañana 5 referencias aleatorias para que el encargado cuente las unidades en 3 minutos y cace discrepancias de inmediato.",
        "ejemplo": "El miércoles el sistema pide contar los candados de seguridad de alta gama en vitrina. Teóricamente debería haber 12 y hay 9. La discrepancia se detecta en la misma semana en que ocurrió, permitiendo revisar los tickets o ajustar la seguridad del expositor.",
        "viabilidad": "Sí mediante generador de listas de muestreo diario sobre artículos tipo A y B de riesgo.",
        "veredicto": "Sí mediante generador de listas de muestreo diario sobre artículos tipo A y B de riesgo.",
        "facilidad": "Alto",
        "riesgo": "Bajo",
        "beneficio": "Alto",
        "acceso": "lectura",
        "fase": "Fase 1 30 dias",
        "stack": "inventario rotativo",
        "estado": "propuesta",
        "area_id": "operativa",
        "cat_id": "seguridad"
    }
]
};

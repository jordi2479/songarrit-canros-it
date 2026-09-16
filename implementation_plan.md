# Plan de Implementación: Web de Presentación Profesional

## Diagnóstico Brutal del Estado Actual

Lo que hay ahora es un esqueleto con 3 páginas de texto plano metidas dentro de tarjetas blancas con un sidebar oscuro. No hay animaciones, no hay visualizaciones de datos, no hay interactividad real, no hay responsive mobile, y faltan 4 de los 7 pasos del storyboard. Visualmente parece un blog corporativo de 2018, no una presentación que justifique la contratación de un perfil de IT.

> [!CAUTION]
> El estándar visual de referencia son páginas como **Linear.app**, **Stripe**, **Vercel** o las landing pages de producto de Apple: secciones a pantalla completa, tipografía inmensa, animaciones de scroll que revelan contenido progresivamente, gradientes sutiles y visualizaciones de datos integradas.

---

## Propuesta de Rediseño Completo

### Concepto Visual: "Scroll Storytelling" (Presentación Cinematográfica)

En lugar de páginas separadas que parecen documentos Word con marco, la web funcionará como una **experiencia de scroll narrativa**: cada sección ocupa el 100% de la pantalla, y al hacer scroll el contenido aparece con animaciones de revelado (fade-in, slide-up, parallax). El efecto es cinematográfico: como pasar diapositivas pero sin hacer clic.

**La navegación será doble:**
- **Scroll continuo** para la presentación en reunión (modo "proyector"). Cada sección aparece suavemente al bajar.
- **Menú de navegación fijo arriba** (no sidebar, que ocupa espacio útil en pantalla de portátil) con anclas que saltan a cada sección. Permite saltar a cualquier punto si preguntan algo concreto.

---

### Stack Técnico

| Componente | Tecnología | Justificación |
|---|---|---|
| Framework | **Next.js 16** (ya instalado) | App Router, SSG para Vercel |
| Estilos | **Tailwind CSS v4** (ya instalado) | Utilidad, velocidad |
| Animaciones | **Framer Motion** (instalar) | Scroll-triggered animations, page transitions, spring physics |
| Iconos | **Lucide React** (instalar) | Iconografía consistente, tree-shakeable |
| Gráficos | **Recharts** (instalar) | Visualizaciones de ROI y distribución |
| Fuente | **Inter** (via Google Fonts / next/font) | La estándar de producto digital |

---

### Mapa de Secciones (Correspondencia con el Storyboard de 7 Pasos)

La web tendrá **una página principal** (`/`) con todas las secciones narrativas en scroll + **una página separada** (`/catalogo`) para la bóveda interactiva de 150 ideas. Total: ~12-15 "pantallas completas" visibles + el catálogo filtrable.

---

#### SECCIÓN 1: Hero (Paso 1 del Storyboard)
**Pantalla completa. Impacto inmediato.**

- Fondo: Gradiente oscuro sutil (slate-950 → slate-900) o una textura abstracta geométrica muy sutil
- Tipografía gigante centrada (5xl-7xl): **"Dos tiendas. Un grupo. Cero caos."**
- Subtítulo más pequeño debajo: "Propuesta de Departamento de Operaciones e IT para el Grupo Son Garrit + Ca'n Ros"
- Animación: El texto aparece palabra por palabra o línea por línea con un fade-in escalonado (staggered)
- Un indicador de scroll animado abajo (chevron rebotando suavemente)

---

#### SECCIÓN 2: El Problema (Paso 1 del Storyboard, desarrollo)
**El "dolor" con datos visuales.**

- Layout: Pantalla dividida. Izquierda texto, derecha una visualización
- Título: "¿Qué implica gestionar 2 tiendas con métodos de 1?"
- **3 tarjetas animadas** que aparecen en cascada al hacer scroll:
  1. 🔥 "Apagar fuegos" → Tiempo reactivo vs. planificación
  2. 📊 "Datos a mano" → Tarifas, stock, facturas cruzadas manualmente
  3. 🕐 "Horas perdidas" → Administración que roba tiempo de venta
- **Visualización derecha:** Un gráfico circular simple (Recharts) mostrando la distribución actual del tiempo de un encargado: 60% admin repetitiva, 25% mostrador, 15% gestión. El mensaje visual es claro: están pagando a alguien para que teclee en vez de vender.

---

#### SECCIÓN 3: La Solución Conceptual (Paso 2 del Storyboard)
**Qué es un Departamento IT interno.**

- Fondo claro (contraste con la sección anterior)
- Título: "No se trata de comprar programas. Se trata de poner orden."
- Animación: 3 iconos grandes que se transforman al hacer scroll:
  - 📋 Facturas → ✅ Factura revisada automáticamente
  - 📦 Stock a ojo → 📊 Alerta de rotura inteligente
  - ✉️ Correo manual → 🤖 Borrador listo para enviar
- Cada transformación es una microanimación (el icono viejo se desvanece, el nuevo aparece)
- Texto de refuerzo: "El departamento elimina el trabajo mecánico. Los encargados vuelven al mostrador."

---

#### SECCIÓN 4: El Perfil Híbrido (Paso 3 del Storyboard)
**Venderte a TI. La sección más importante.**

- Layout a pantalla completa con fondo gradiente (emerald muy sutil)
- Visual central: **Dos columnas animadas** que se fusionan visualmente
  - Columna izquierda: "50% Mostrador" (icono de tienda, lista: cobrar, reponer, atender al profesional, conocer el producto)
  - Columna derecha: "50% Procesos" (icono de código/dashboard, lista: automatizar, analizar, diseñar alertas, coordinar especialista)
  - Al hacer scroll, ambas columnas se acercan y se unen en un solo bloque central: "= Perfil Híbrido"
- Debajo: la frase matadora: *"Una agencia monta un panel bonito. Pero no sabe qué es un taco químico."*

---

#### SECCIÓN 5: Las 3 Garantías (Paso 3, cierre de confianza)
**Destruir el miedo.**

- 3 tarjetas horizontales grandes, cada una con un icono animado, un título y una frase
- Aparecen en cascada al scroll
  1. 🛡️ **"Propone el sistema, dispone la Dirección"** → Nada se ejecuta sin vuestro clic
  2. 🤝 **"Lo sensible, con especialista"** → TPV, ERP y banco los toca un profesional certificado
  3. ↩️ **"100% Reversible"** → Se apaga en un minuto. El negocio sigue igual que hoy

---

#### SECCIÓN 6: Los 4 Bloques (Paso 4 del Storyboard)
**Arquitectura visual del departamento.**

- Título: "150 ideas organizadas en 4 pilares"
- **4 tarjetas grandes** en grid 2×2, cada una con:
  - Icono + color propio (🏢 azul, 🏪 esmeralda, 🤝 violeta, ⚙️ ámbar)
  - Nombre del bloque
  - Número de áreas (ej. "5 áreas · 50 proyectos")
  - Al hacer hover: se expande ligeramente y muestra la lista de áreas
- Animación: las 4 tarjetas aparecen con un efecto de "desempaquetado" (scale desde 0.8 a 1)

---

#### SECCIÓN 7: Zoom a las 15 Áreas (Paso 5 del Storyboard)
**El despliegue completo.**

- Vista tipo "Accordeon" o "Tabs" por bloque
- El usuario hace clic en un bloque (B1, B2, B3, B4) y ve las áreas desplegarse con sus 10 ideas cada una (título corto)
- Cada idea tiene su semáforo: 🟢 🟡 🔴
- Esto permite mostrar las 150 ideas de forma compacta sin abrumar
- Al clicar en una idea concreta, se expande mostrando: descripción + riesgos + ticket de impacto
- **Alternativa:** Botón "Ver catálogo completo" que lleva a `/catalogo` (la página separada con filtros)

---

#### SECCIÓN 8: Mini-Prototipos Interactivos (Paso 6 del Storyboard)
**La demostración de que funciona. El "wow" moment.**

- Fondo oscuro (slate-900) para dar efecto de "pantalla de software"
- Título: "Así se verá en el día a día"
- **2-3 simuladores interactivos reales** (componentes React con estado):
  1. **Alerta de Stock:** La tarjeta oscura con los botones Rechazar/Modificar/Aprobar. Al clicar Aprobar: confeti verde + mensaje "Aprobado por Dirección" con una animación de check
  2. **Comparador de Tarifas:** Una mini-tabla que muestra Producto | Precio Palma | Precio Campos | Diferencia. Con una fila resaltada en rojo (la diferencia) y un botón "Generar Reclamación"
  3. **Informe Lunes 9h:** Un mockup de dashboard con 4 KPIs (ventas semana, ticket medio, rotura stock, margen) con números animados que cuentan desde 0 hasta el valor final

---

#### SECCIÓN 9: Viabilidad y "Baño de Realidad" (Paso 7 del Storyboard)
**Transparencia total. Ganar confianza bajando el suflé.**

- **Gráfico de distribución (Donut chart):**
  - 75% "Coste cubierto por el rol" (verde)
  - 25% "Requiere inversión externa" (ámbar)
  - Leyenda explicativa debajo
- **Barra de impacto en tiempo (Bar chart horizontal):**
  - "Antes: 2h de trabajo manual" (barra roja larga)
  - "Después: 15 min de supervisión" (barra verde corta)
- **Los 3 riesgos** con mitigación, en tarjetas con borde rojo suave
- Frase: *"No todo va a funcionar al primer intento. Por eso empezamos con 1 o 2 pruebas, no con 150."*

---

#### SECCIÓN 10: Cierre / Next Steps (Paso 7, cierre)
**Call to Action final.**

- Pantalla completa, fondo gradiente oscuro → esmeralda
- Texto centrado gigante: **"Arrancamos con 2 pruebas piloto este mes."**
- Subtítulo: "Elegid las áreas que más os duelen. Medimos resultados. Decidís si seguimos."
- Botón grande: "Explorar el catálogo completo →" (lleva a `/catalogo`)

---

### Página `/catalogo`: La Bóveda Interactiva

Página independiente con:
- **Barra de filtros** superior: Chips clicables por bloque (B1, B2, B3, B4) + por dificultad (🟢 🟡 🔴) + buscador de texto
- **Grid/Lista de las 150 ideas** alimentado por el JSON
- Cada idea es una tarjeta expandible (clic para ver detalle: descripción, riesgos, ticket de impacto, si requiere especialista)
- **Contadores dinámicos:** "Mostrando 23 de 150 ideas · Filtro: B1 Grupo · Dificultad: Fácil"

---

## Componentes Reutilizables a Crear

| Componente | Uso |
|---|---|
| `<Section>` | Wrapper de pantalla completa con fondo configurable y animación de entrada |
| `<AnimatedText>` | Texto que aparece palabra por palabra o línea por línea |
| `<StatCard>` | KPI con número animado (cuenta de 0 a N) |
| `<GarantiaCard>` | Tarjeta de garantía con icono, título y descripción |
| `<BloqueCard>` | Tarjeta de bloque con hover expandible |
| `<MiniPrototipo>` | Simulador interactivo con estado (botones funcionales) |
| `<TicketImpacto>` | Antes/Después visual con barras de color |
| `<IdeaCard>` | Tarjeta de idea expandible para el catálogo |
| `<FilterBar>` | Barra de filtros con chips y buscador |
| `<DonutChart>` | Gráfico circular para distribución de costes |
| `<ScrollIndicator>` | Chevron animado para indicar "sigue bajando" |

---

## Estructura de Archivos Propuesta

```
src/
├── app/
│   ├── layout.tsx          ← Navbar fija + fuente Inter
│   ├── globals.css         ← Tailwind + animaciones custom
│   ├── page.tsx            ← Página principal (todas las secciones en scroll)
│   └── catalogo/
│       └── page.tsx        ← Bóveda interactiva con filtros
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← Menú superior fijo con anclas
│   │   └── Section.tsx     ← Wrapper de sección full-screen
│   ├── ui/
│   │   ├── AnimatedText.tsx
│   │   ├── StatCard.tsx
│   │   ├── GarantiaCard.tsx
│   │   ├── BloqueCard.tsx
│   │   ├── IdeaCard.tsx
│   │   ├── FilterBar.tsx
│   │   ├── TicketImpacto.tsx
│   │   └── ScrollIndicator.tsx
│   ├── prototipos/
│   │   ├── AlertaStock.tsx
│   │   ├── ComparadorTarifas.tsx
│   │   └── InformeLunes.tsx
│   └── charts/
│       ├── DonutCostes.tsx
│       └── BarraTiempo.tsx
└── data/
    ├── ideas.json          ← Las 150 ideas completas
    └── navigation.ts       ← Config del menú y secciones
```

---

## Orden de Implementación

### Fase 1: Infraestructura (Primero lo invisible)
- [ ] Instalar dependencias: `framer-motion`, `lucide-react`, `recharts`
- [ ] Crear `Section.tsx` (wrapper animado) y `Navbar.tsx` (menú superior)
- [ ] Reemplazar el layout actual (eliminar sidebar)
- [ ] Configurar la fuente Inter con `next/font`

### Fase 2: Las Secciones Narrativas (El scroll storytelling)
- [ ] Hero con AnimatedText
- [ ] El Problema (con gráfico de tiempo)
- [ ] La Solución / Departamento IT
- [ ] El Perfil Híbrido (columnas que se fusionan)
- [ ] Las 3 Garantías
- [ ] Los 4 Bloques (grid animado)
- [ ] Zoom a Áreas (accordeon/tabs)

### Fase 3: Los Mini-Prototipos (El "wow")
- [ ] Alerta de Stock interactiva
- [ ] Comparador de Tarifas
- [ ] Informe Lunes 9h con contadores

### Fase 4: Viabilidad y Cierre
- [ ] Gráficos de ROI (Donut + Barras)
- [ ] Sección de riesgos
- [ ] CTA final

### Fase 5: El Catálogo (`/catalogo`)
- [ ] Migrar las 150 ideas al JSON completo
- [ ] FilterBar con chips y buscador
- [ ] IdeaCard expandible
- [ ] Contadores dinámicos

---

## Open Questions

> [!IMPORTANT]
> **¿Paleta de colores?** ¿Prefieres el look oscuro premium (fondo slate-950, textos blancos, acentos esmeralda) tipo Linear/Vercel, o prefieres un look más claro y corporativo? El oscuro impresiona más en pantalla de reunión.

> [!IMPORTANT]
> **¿Contenido de las 150 ideas del JSON?** El archivo `ideas-todas-areas.md` tiene las 150 ideas con títulos cortos. ¿Quieres que yo genere la descripción expandida, los riesgos y la dificultad (semáforo) para cada una, o prefieres revisarlas tú y que yo solo monte la estructura del JSON?

> [!IMPORTANT]
> **¿Prioridad de mini-prototipos?** De las 150 ideas, ¿cuáles son las 3 que más les impresionarían a los dueños para convertirlas en simuladores interactivos? Mi sugerencia: Alerta de Stock (01.02), Comparador de Tarifas (05.03) e Informe Lunes 9h (03.01).

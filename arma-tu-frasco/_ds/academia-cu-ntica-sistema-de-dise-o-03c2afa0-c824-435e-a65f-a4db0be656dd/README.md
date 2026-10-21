# Academia CUÁNTICA · Sistema de Diseño

Sistema de diseño para las **presentaciones HTML cinematográficas** de Academia CUÁNTICA — plataforma educativa premium fundada por **José Basgall** (Argentina). Cruzamos conocimiento ancestral, ciencia accesible y tecnología consciente.

> **Tagline manifiesto:** *No tratamos el síntoma. Ajustamos la frecuencia que lo CAUSA.*
> **Tagline principal:** *Tecnología para tu bienestar.*

---

## Para qué sirve este sistema

CUÁNTICA produce **presentaciones HTML standalone 1920×1080 (16:9)** que funcionan como **"telón de fondo visual"** mientras José explica con su voz a cámara. Cada presentación:

- Corre **full-screen sin UI**, navegación manual por flechas, **sin auto-advance nunca** — el presentador controla cuándo avanzar.
- Es una pieza para ser **GRABADA** dentro de un video más grande (cámara lateral + voz en off, luego montaje en CapCut → Skool). **No** es una web navegable por el usuario.
- Cada slide debe poder **pausarse indefinidamente** y sentirse como un **frame de película documental** (Apple TV+ *Foundation*, BBC Earth, *Cosmos*, Denis Villeneuve). Jamás PowerPoint corporativo, jamás pastel, jamás pop art.

**Audiencia:** adultos hispanoparlantes (español rioplatense) interesados en biohacking, medicina ancestral, biología cuántica, tecnología consciente y autonomía sanitaria. Compran cursos premium ($100–500 USD) en Skool y esperan calidad visual nivel streaming.

---

## El north star: L03 · Minerales del Agua de Mar

Todo este sistema está destilado de la presentación de referencia **L03** (subida en `uploads/`). Es el "north star" estético — toda presentación nueva debe sentirse **hermana de esa**: misma vibra, misma paleta, mismas fuentes, mismos efectos, adaptada a su contenido. El framework completo (`slides/cuantica-deck.css` + `slides/cuantica-deck.js`) es una versión generalizada y reutilizable de ese deck.

### Fuentes originales / materiales recibidos
- `uploads/L03-presentacion-referencia.html` — deck de referencia (bundle standalone). Extraído a markup limpio y fuentes/imágenes descomprimidas.
- `uploads/manual-marca-v2.1-dark.pdf` — Manual de Marca CUÁNTICA v2.1 (40 págs): carta del fundador, manifiesto, voz verbal, color, tipografía, plantillas, compliance.
- `uploads/logo-*.png`, `uploads/simbolo-adn-*.png` — logos y símbolo ADN oficiales (copiados a `assets/logos/`).

---

## CONTENT FUNDAMENTALS · cómo se escribe

El idioma es **SIEMPRE español rioplatense (voseo argentino)**: usar **"vos", "tenés", "querés", "mirá"** — nunca "tú", "tienes", "quieres". Tono de **experto que te respeta como adulto**: voz directa, sin marketing fluff, frases cortas, honestidad cruda sobre los trade-offs.

### Las 4 capas de la voz CUÁNTICA (conviven en un mismo párrafo)
1. **Cercana rioplatense** — "Mirá", "te cuento", "che". Como hablás con un amigo, no como escribís un informe. Cero "estimado/a".
2. **Apasionada revolucionaria** — "esto te cambia la cabeza", "reventamos el mercado". Energía de manifiesto, no de catálogo.
3. **Científica didáctica** — datos, cifras concretas, fuentes (Quinton, Ilari, Arnal). Cuando usás un tecnicismo, lo explicás en la frase siguiente con una analogía.
4. **Cálida cuidadora** — al mencionar una dolencia o miedo, con respeto: "Sé lo que es estar ahí".

### Casing y tipografía editorial en slides
- **Títulos en Cormorant SC son siempre italic**, capitalización tipo título ("Los 83 Elementos", "La Matriz").
- **Eyebrows en MAYÚSCULAS** con tracking enorme (0.4–0.62em): `NIVEL 02`, `MACROELEMENTOS · LOS 7`.
- El verbo **CAUSA va en mayúsculas** cuando aparece el manifiesto — énfasis intencional de marca.
- Números y símbolos químicos como protagonistas: `83`, `118`, `Mg`, `Se`, `Cl`.

### Ejemplos reales de copy (tono correcto)
- *"El banco mineral más completo del planeta"*
- *"Lo que te cambia la vida está acá"*
- *"El cuerpo toma lo que necesita y deja lo que no"*
- *"Ninguna pastilla puede hacer esto. Ninguna."*
- *"La sal yodada del super apenas alcanza para no enfermarte"*

### Frases sello (repetir es construir marca)
`No tratamos el síntoma · ajustamos la frecuencia que lo CAUSA` · `Distribuyendo consciencia` · `Como complemento, nunca como reemplazo` · `Se reporta` · `Ancestral + cuántico, sin contradicción`

### Prohibido (compliance — NO negociable)
- ✗ "Cura" / "curación" / "garantizado" / "100% efectivo" → riesgo legal
- ✗ "Reemplazá tu medicación" / "mejor que la medicina convencional"
- ✗ Diagnósticos directos ("vos tenés X"), promesas de resultado en tiempos específicos
- ✗ "Estimado/a cliente", "aprovechá esta oferta", anglicismos vacíos ("mindset", "growth")
- ✗ **Captions/subtítulos integrados en los slides** (la voz va en CapCut después)
- ✗ **Emojis de relleno** (🚀✨💯) — la marca no los usa en piezas visuales

> **Disclaimer médico** obligatorio en descripción de curso / pie de PDF (no dentro del slide visual): *"Toda la información compartida tiene fines educativos y de divulgación. No reemplaza diagnóstico ni tratamiento médico. Ante cualquier síntoma, consultá con tu profesional de salud de confianza."*

---

## VISUAL FOUNDATIONS · fundaciones visuales

**Vibra:** dark academia + science museum + Blue Planet documentary + esoterismo científico. **Cinematográfico siempre.** Cada slide es un frame de película premium.

### Color
Paleta cerrada de **6 colores** (`colors_and_type.css`). **Ningún otro color permitido** — sin rojos, lima, amarillos ni pastel saturado.
- `#0A0F0F` obsidiana (fondo) · `#006B64` verde mar (primario) · `#C47A35` cobre (warm) · `#3CE7E1` cyan eléctrico (glow/highlights) · `#F5EDE0` hueso pearl (texto secundario) · `#FFFFFF` blanco (títulos).
- Acentos derivados de uso medido: `#1FC9BE` teal brillante, `#2FD9A0` check OK, `#003C38` verde oscuro, `#E5A06A` cobre claro.
- El color casi nunca es plano: aparece como **glow** (text-shadow de color), no como fill.

### Tipografía
**Solo 4 fuentes** (Google Fonts, subsets latinos offline en `fonts/`):
- **Cormorant SC** italic 500/600 → títulos editoriales (siempre italic).
- **Cormorant** italic 400 → quotes y citas.
- **Inter** 300/400/500 → cuerpo, datos, eyebrows.
- **Anton** 400 → números de impacto (140–280px).

**Sistema editorial / acento** (self-hosted en `fonts/`, del Manual v2.1) — ahora en presentaciones **y** piezas no-presentación:
- **MuseoModerno** — la fuente que más representa la marca. **Usar SOLO pesos gruesos (600–900)**, nunca los finos ("palitos angostos"). Es el acento de marca: eyebrows (`.eyebrow`), labels/CTA (`.brand-tag`) y palabras de impacto (`.hook`) en slides; labels/datos/captions en PDFs y redes.
- **Cormorant Garamond** (300–700) — cuerpo editorial largo en PDFs anexos. (En slides el cuerpo sigue siendo Inter; los títulos display siguen en Cormorant SC italic, que es la firma del L03 y la única con corte small-caps + itálica.)

Jerarquía: título 80–120px · sección 172–200px · subtítulo 32–44px · cuerpo 22–30px · eyebrow 14–22px caps tracking 0.4–0.6em · número Anton 140–280px.

**Regla de título display según destino:**
- Diseño para **video / pantalla** (presentaciones) → **Cormorant SC italic** (rinde mejor full-screen, es la firma del L03). *Default.*
- Diseño para **impreso / PDF** → **Cormorant Garamond**.
- Diseño para **posts de redes** → cualquiera de las dos según el mood.

### Fondos e imágenes
- **Fotografía full-bleed** dark y cinematográfica: océano, plancton, manos, minerales, agua. Tono **frío con calidez puntual** (azules profundos + destellos cobre/cyan). Nunca ilustración plana ni flat-design.
- Cada foto lleva un **gradient overlay de protección** (`.ov-tl/.ov-center/.ov-bottom/.ov-split…`) que crea una zona oscura donde ancla el texto.
- Imágenes con **brillo bajado** (`dim30–dim50`) cuando el texto va encima.

### Movimiento (todo elegante y sutil — nunca bouncy/glitch/vaporwave)
- **Transición entre slides: fade 1100ms** `cubic-bezier(.22,.61,.36,1)`. **Nunca cortes duros.**
- **Ken Burns** lento sobre los fondos (scale 1.04→1.14, 26s); variantes `drift-slow`, `breathe`, `pulse`.
- **Entradas** por slide: `fade`, `fade-up`, `blur-in`, `rise`, `overshoot`, `scale-in`, con `--delay` escalonado. Base = oculto; se animan al entrar (`.slide.run`) y **congelan al final**.
- **Lens flare cyan** opcional al entrar a slides clave (`data-flare="strong"`).
- **Sin auto-advance.** Reduced-motion / PDF revelan el estado final.

### Efectos cinematográficos obligatorios (capa fija sobre todo el deck)
- **Vignette** sutil en bordes (`box-shadow inset`).
- **Grain film** ~5% con animación de shift (`.grain`).
- **Flare** sweep en transición.

### Profundidad, paneles y transparencia
- La profundidad viene del **glow + gradientes**, no de sombras de caja duras.
- **Panel frosted** (`.panel`) para texto denso sobre foto: `backdrop-filter: blur(8px)`, `background: rgba(10,15,15,.40)`, borde cyan a baja opacidad, radio 14px, padding 32–48px.
- `.darkpanel` (gradiente vertical + blur 6px) para imágenes brillantes.

### Bordes, radios, sombras
- **Radios:** 8px chips · 10px swatches · 14px panel · 16px darkpanel · 50% dots.
- **Bordes:** hairline de 1px en cyan/cobre a baja opacidad (.12–.25). Sin bordes pesados.
- **Sombras de texto duales obligatorias** sobre imagen: `0 2px 8px rgba(0,0,0,.85), 0 0 24px rgba(0,0,0,.55)` (más glow de color en títulos/números).

### Hover / press
No aplica al contenido (las piezas se graban, no se interactúan). El único hover es el **chrome de navegación**: los dots pasan a cyan al hover; el dot activo se alarga a cápsula con glow. Todo el chrome se **desvanece tras 3.5s de inactividad** (junto con el cursor).

### Layout
- Canvas **fijo 1920×1080**, escalado por JS y letterboxed en negro. Controles **fuera** del elemento escalado.
- Composición tipo frame de cine: texto anclado a una esquina/lado sobre la zona oscura del gradiente, mucho aire negro, un solo foco por slide. "One thousand no's for every yes" — minimalismo, sin data slop.

---

## ICONOGRAPHY · iconografía

El sistema es **deliberadamente austero en iconos** — la estética documental evita UI chrome decorativo.

- **No hay sets de iconos** (Lucide/Heroicons/FontAwesome) ni icon-font. No se usan, no se necesitan.
- **Símbolos químicos como "iconos" tipográficos**: `Mg`, `Se`, `Cl`, `Na⁺`, `Ca²⁺` compuestos en Cormorant SC/Cormorant italic con glow cyan. Son el lenguaje icónico real del contenido científico.
- **Marcas unicode mínimas**: `✓` (check, color `--ok` verde-mar) y `✗` (cruz, color cobre) en las columnas versus. `·` (punto medio) como separador omnipresente en eyebrows. `→`/`←`/`↑`/`↓` solo en el hint de teclado.
- **Símbolo ADN** (la doble hélice de marca) — único elemento gráfico de marca. Usos: marca de agua a ~18% opacidad en esquina, avatares, sellos. Variantes oficiales en `assets/logos/`: bicolor, cobre, verde mar.
- **Emoji: nunca** en piezas visuales (el manual los permite solo cuando aportan info real en redes, jamás de relleno y jamás en slides).
- **Flecha cyan dibujada** (`.arrow-line`) como recurso de animación entre dos números — se "dibuja" con `scaleX`, no es un glyph.

Regla: si necesitás un icono, casi siempre la respuesta es **un símbolo químico, un número Anton, o nada.** Nunca dibujar SVG decorativo a mano ni meter iconitos genéricos.

---

## Arquetipos de slide (14)

El deck de muestra (`slides/index.html`) demuestra los 14 patrones. Cada uno mapea a lecciones reales del curso.

| # | Arquetipo | Qué es | Uso verificado |
|---|---|---|---|
| 1 | **Hero / portada** | Eyebrow + título Cormorant SC + subtítulo, anclado a una esquina sobre foto full-bleed | Apertura de cualquier lección |
| 2 | **Número de impacto** | Anton gigante con glow + halo, centrado | Datos clave ("83", "118") |
| 3 | **Comparación** | Dos números Anton unidos por flecha cyan dibujada | 118 → 83 |
| 4 | **Tres niveles** | Bloques numéricos 01/02/03 + nombre Cormorant SC | Estructura de una lección |
| 5 | **Título de sección** | `section-title` 172–200px + lens flare fuerte al entrar | Aperturas de módulo ("La Matriz") |
| 6 | **Grid de datos** | Panel frosted con filas símbolo + nombre + función | Los 13 oligoelementos |
| 7 | **Quote grande** | Cormorant italic 100px+ con respiración (breathe) | Frases sello |
| 8 | **Versus** | Dos columnas frosted con marcas ✓/✗ | Sal marina vs agua de mar |
| 9 | **Cierre / manifiesto** | Número/frase épica + CTA pulse al próximo | Outro de lección |
| 10 | **Timeline** | Cronología horizontal: línea cyan, dots, años Anton + desc Inter | **L02** Quinton (1897·1904·1907·1925·1940) |
| 11 | **Mapa** | Graticule de globo + pins luminosos cyan (uno `hot` destacado) | **L02** dispensarios Europa · **L06** labs LATAM · **L13** anillos de distancia al mar |
| 12 | **Quote full-screen** | Cita gigante centrada + atribución autor·año; fondo sólido o imagen blurreada 30% | **L01** Quinton · **L02** Ilari · **L03** · **L12** |
| 13 | **Portada reel** | MuseoModerno Black 900 gigante (200–400px) sobre foto full-bleed, estilo Vogue/Nat Geo | **L11** "9 vías" · **L13** "Caminos" |
| 14 | **Badge compliance** | Etiqueta esquinera fija "SE REPORTA · NO ES PRESCRIPCIÓN MÉDICA" (MuseoModerno bold cobre) | **L10** clínica, fija en S3–S11 |

Clases clave (en `slides/cuantica-deck.css`): `.timeline/.tl-ev`, `.geomap/.geo-pin(.hot)`, `.quote-fs/.q-attr`, `.reel-title`, `.compliance-badge`. Para el mapa, el graticule SVG es un globo wireframe abstracto (no geografía literal) — reemplazable por una imagen de mapa real en el `.bg` si se quiere.

### Variante sepia documental (lecciones históricas)
El deck `slides/L02-quinton.html` es la referencia del mood **sepia documental Ken Burns**: fotos con `filter:sepia()` + dark, acento **cobre** dominante (override de `.eyebrow/.tl-*/.geo-pin` a cobre), cyan reservado para el highlight clave, `.sepia-wash` cálido sobre todo el deck, grano más marcado. Mantiene paleta + fuentes + base dark cinematic.

### Motivo de marca · "el fondo dialoga con el frente" (preferido de José)
Cuando tenga sentido, el **fondo debe interactuar con el texto del frente**, no ser un telón plano. La referencia es la slide del **mapa** (L06 S7): globo wireframe + costa de fondo, con el título "Del Atlántico al Pacífico" arriba y **pins de ciudades que laten/pulsan** (`.lab-pin .pulse` → animación `pinpulse`) y se relacionan entre sí. El fondo y el primer plano conversan.
Patrones reutilizables del sistema para esto: `.geomap` + `.lab-pin` (mapa con pins pulsantes), `.orbit` (símbolos en órbita rotando alrededor de un centro), `.timeline` (línea viva con eventos), `.glow-halo` detrás de números. Buscá este efecto en lecciones futuras — un fondo vivo (mapa / malla / órbita / diagrama / partículas) que dialoga con lo que se dice arriba.

### Fondos en video (módulo de framework)
`.bg-video` permite fondo en movimiento: `<video class="bg-video" autoplay muted loop playsinline poster="…">`. **Siempre muteado** (la voz va en CapCut). Mismas clases `dimNN` que `.bg`. El motor (`cuantica-deck.js`) reproduce automáticamente el video de la slide activa y pausa los demás. Usar foto como `poster` (respaldo y preview). Cuidar el techo de **30 MB** del standalone: preferir clips 1920×1080 nativos en las slides clave; el resto, intercalar en CapCut.

### Gotcha de animación
No pongas un `data-anim` que anime `transform` (`scale-in`, `rise`, `overshoot`, `fade-up`) sobre un elemento que además se centra con `transform:translate(-50%)` — la animación pisa el centrado y el bloque se corre fuera de pantalla. Centrá con `top/left` explícitos y usá `fade` (solo opacidad) en ese elemento, o animá un hijo interno.

## Índice del sistema

| Archivo / carpeta | Qué es |
|---|---|
| `colors_and_type.css` | **Fuente de verdad de tokens** — paleta de 6, fuentes offline (@font-face), escala tipográfica semántica, glows, sombras, panel. Linkealo desde cualquier pieza. |
| `fonts/` | woff2 latinos offline (presentaciones): Anton, Cormorant (italic + normal), Cormorant SC 500/600, Inter. + ttf del sistema editorial secundario: MuseoModerno 100–900, Cormorant Garamond 300–700. |
| `assets/logos/` | Logos (horizontal bicolor, vertical cobre) + símbolo ADN (bicolor, cobre, verde). |
| `assets/backgrounds/` | 12 fondos cinematográficos del L03 (océano, plancton, minerales, manos…) para reutilizar. |
| `slides/cuantica-deck.css` | Framework del deck: stage/scaling, fades, Ken Burns, overlays, entradas, FX (grain/vignette/flare), chrome, layouts (orbit, versus, grid, niveles). |
| `slides/cuantica-deck.js` | Motor vanilla: escalado, navegación manual (flechas/click/dots/F), idle-hide, lens flare, posición persistente. Sin auto-advance. |
| `slides/index.html` | **Deck de muestra navegable** — 14 arquetipos con assets reales. Plantilla de arranque para piezas nuevas. |
| `slides/L02-quinton.html` | **Deck terminado** — L02 René Quinton (16 slides). Ejemplo real del mood **sepia documental** (acentos cobre, fuentes y arquetipos del sistema). |
| `assets/L02/` | Fotografía histórica de época (retratos, dispensarios, Vichy, Ilari) para el deck L02. |
| `preview/` | Cards del tab Design System (colores, tipo, FX, componentes, marca). |
| `SKILL.md` | Manifiesto del skill (compatible con Agent Skills / Claude Code). |
| `uploads/` | Materiales originales recibidos + extracción del L03. |

### Cómo arrancar una presentación nueva
1. Copiá `slides/index.html` y reemplazá las `<section class="slide">` por tu contenido.
2. Mantené el link a `../colors_and_type.css` y `cuantica-deck.css`, y el `<script src="cuantica-deck.js">`.
3. Usá los arquetipos existentes (hero, número, sección, grid, versus, quote, cierre). Bajá fondos nuevos a `assets/backgrounds/` o reusá los del L03.
4. Cambiá `window.CUANTICA_DECK_KEY` por una clave única (p. ej. `'cuantica-l05'`).

### Variantes de mood permitidas (todas mantienen paleta + fuentes + dark cinematic)
Técnicas/científicas → variante CUÁNTICA principal (la del L03) · Históricas → sepia/Ken Burns documental · Clínicas → más sobrio · Negocio → números Anton enormes.

# Prompt para ajustar el sitio Twin Peaks (2 iteraciones)

Cómo usarlo:
1. Completá primero "MIS AJUSTES ADICIONALES" (todavía vacío, para que lo llenes vos).
2. Pegá el bloque "ITERACIÓN 1" completo como primer mensaje de la sesión nueva.
3. Cuando termine y hayas revisado el resultado vos misma, pegá el bloque "ITERACIÓN 2" en esa misma sesión.

---

## MIS AJUSTES ADICIONALES (completar antes de usar el prompt)

Revisiones propias, además de lo que pide el profesor (agregá todas las que hagan falta; podés agrupar por página o borrar las que no uses):

- Home (index.html):
  - Sacar "La mirada de David Lynch" de la home y llevarla a su propia página
    ("La Serie" en el menú), muy ampliada: producción de la serie,
    directores, por qué se retoma 25 años después en "The Return", datos
    curiosos — profundizar con pasión, hoy es un solo párrafo corto. En la
    home puede quedar una versión breve con link "conocé más" hacia esa
    página nueva.
  - En "Un mapa afectivo": sumar un mapa de Google Maps embebido (iframe)
    con la ubicación real de las locaciones de filmación. Decisión explícita:
    va como embed de verdad, no como imagen ni como simple link de salida —
    para esto puntual no hace falta que sea 100% HTML/CSS/JS puro, es una
    excepción aceptada a esa regla de CLAUDE.md. Sumar también info sobre
    recorridos reales e imágenes de cada lugar.
  - Exagerar un poco el hover de los retratos de "Rostros del misterio": hoy
    pasa de saturate(.78) a saturate(1); probar un salto más marcado (más
    saturación y/o sumar brightness o un scale más notorio) para que los
    colores se sientan más "plenos" al pasar el mouse.
  - Agregar `<strong>` en al menos una o dos palabras de cada párrafo
    narrativo (no necesariamente una frase entera), para dar énfasis visual.
  - Sumar contenido de texto en general (referencia habitual de SEO: ~300
    palabras por página); hoy varias secciones son más cortas.
  - Sumarle más impacto visual y movimiento (animaciones de entrada,
    transiciones) — hoy se siente bastante estática/triste.
- Temporadas (temporadas.html):
  - Que se pueda entrar a cada temporada y ver el detalle de sus capítulos:
    nombre de cada episodio + mini sinopsis estilo Netflix. Decidido: cada
    temporada es una página propia, accesible desde el submenú desplegable de
    "Temporadas" (ver punto 1 de "LO QUE TENÉS QUE HACER"). Los 48 episodios
    (temporada 1, 2 y The Return) ya están redactados y listos para copiar en
    contenido-episodios.md — no hace falta investigarlos de nuevo.
  - Sumar una tabla con más datos por temporada, además del `<dl>` actual de
    episodios/centro (por ejemplo año, cantidad de capítulos, tono).
  - Agregar un hero de imagen completa a esta página (hoy solo hay h1 + texto
    sin imagen destacada), aprovechando las imágenes de assets/images/temporadas/.
    Esto no es solo para Temporadas: **todas las páginas/secciones del sitio
    van con su propio hero de imagen completa** — cada temporada individual,
    Galería, Contacto y La Serie también (ver ítem general más abajo).
- Galería (galeria.html):
  - Corregir categorización: "62-Miss-Twin-Peaks.jpg" está como
    data-category="personajes" pero no es un personaje puntual — reclasificar.
  - La categoría "Locaciones" queda casi vacía (solo 1 imagen de 16 la tiene
    hoy). Reasignar imágenes que en realidad son locaciones y hoy están mal
    etiquetadas como "atmósfera", y sumar de assets/images/selección/ las que
    son señas/lugares (Double-R-Sign-02, Twin-Peaks-High-School,
    Big-Eds-Gas-Farm, Fat-Trout-Trailer-Park, No-To-Ghostwood,
    Say-No-To-Sparkwood) para que la categoría tenga contenido real.
  - Renombrar la categoría "Atmósfera" a "Estética" (decidido, por ahora —
    se puede revisar más adelante si no termina de cerrar) y sumar más fotos
    que encajen en ese grupo.
  - La grilla en sí no puede dejar huecos vacíos al final (un espacio donde
    entraría una imagen más, aunque sea chica) — no es un tema de que una
    imagen puntual no llene su celda, es que el acomodo general de la grilla
    (con las celdas "wide"/"tall") tiene que cerrar prolijo. Jugar con los
    tamaños de las celdas y, si hace falta, croppear alguna imagen con
    criterio para que la grilla quede completa sin agujeros.
  - Sumar imágenes nuevas a la galería desde assets/images/selección/ (ya
    están subidas, ~90 imágenes disponibles — ver el detalle en "ESTADO
    ACTUAL" más abajo en el prompt de Iteración 1).
- Contacto (contacto.html):
  - Agregar placeholder en los campos del formulario (hoy no tienen).
- Generales / diseño / responsive:
  - Sticky header (que el menú quede fijo arriba al scrollear).
  - `loading="lazy"` en las imágenes fuera del primer viewport (ya
    justificado en consideraciones-optimizacion-imagenes.md).
  - Revisar el interlineado en general: ni muy alto ni muy bajo.
  - Cuidar que los h1/h2 no dejen una palabra sola y suelta en la última línea
    (viudas tipográficas) — ajustar redacción o usar espacios no separables.
  - Los párrafos van siempre alineados a la izquierda, nunca centrados —
    salvo algún texto muy corto puntual, priorizando ante todo la coherencia
    visual entre páginas.
  - Mucho más impacto visual y movimiento en general: animaciones,
    transiciones, cards (retratos/temporadas) que se animen de alguna forma
    al aparecer o al interactuar.
  - Agregar un hero de imagen completa en cada página/sección del sitio, no
    solo en la home: Temporadas, cada temporada individual (1, 2, El Retorno),
    Galería, Contacto y La Serie — todas con su propio hero, aprovechando
    imágenes ya disponibles en assets/images/.
  - Sumar íconos de redes sociales al footer.
  - OJO con la coherencia visual entre páginas: mismos tamaños, misma
    tipografía, misma estética/filtro de imágenes en las 4 páginas — es lo
    más importante a cuidar con tantos agregados nuevos.
  - Logo/tipografía del título: **en pausa por ahora** (no pedirlo en esta
    iteración). La idea era usar la tipografía real de la serie (ITC Avant
    Garde Gothic Demi Condensed, o su réplica libre "National Gothic"), pero
    la descarga desde los sitios de fuentes gratuitas no salió limpia — se
    retoma más adelante si aparece una fuente bien conseguida. Por ahora el
    wordmark sigue como está, en la tipografía serif ya existente.
  - Reforzar en general el impacto cinematográfico del sitio (tono,
    movimiento, imágenes).
- Otras:

### Ideas tomadas de sitios de referencia (marcá con [x] las que querés aplicar)

Comparación de UX contra dos sitios tributo (Ultimate Spider-Man y The Witcher), sin copiar estética — solo interacción. Las dos primeras aparecen en ambos sitios, lo que las hace un patrón más probado, no una moda de uno solo:

- [x] Submenú de "Temporadas" activado por click (no solo hover), con flechita que
      gira y se mantiene abierto al scrollear. (Esta además resuelve el punto de
      la consigna que falta — conviene marcarla.)
- [x] Flechas de anterior/siguiente + contador ("3 / 16") dentro del modal de la
      galería, para pasar de imagen sin cerrarlo.
- [x] Placeholder tipo "shimmer" mientras cargan las imágenes de la galería (se
      complementa con el `loading="lazy"` de `consideraciones-optimizacion-imagenes.md`).
- [x] Botón flotante "volver arriba" que aparece al scrollear en páginas largas.
- [x] Botón flotante "volver arriba" con un ícono propio del sitio en vez de una
      flecha genérica (ellos usan su propio emblema; para este sitio podría ser
      un búho pequeño o una silueta de pino).
- [x] Título del hero más grande y con más aire vertical alrededor (arriba del
      eyebrow y abajo del párrafo), manteniendo la alineación a la izquierda
      que ya tenés. Ojo: lo "espectacular" del hero de The Witcher no parece
      venir de que esté centrado (se probó esa idea y se descartó), sino de dos
      cosas puntuales — la escala del título ocupando gran parte del alto de
      pantalla, y que la foto de fondo es una toma abierta de paisaje con un
      personaje chico mirando a lo lejos (eso da sensación de escala). Por
      ahora se mantiene `hero4.webp` (el cartel de bienvenida) tal cual —
      queda anotado que la imagen del hero se puede reconsiderar más
      adelante si se quiere ir por una toma más abierta.
- [x] Pie de página con más secciones, como en The Witcher: además de la línea
      actual, agregar columnas — (1) un bloque con el nombre del sitio y 2-3
      líneas describiendo el proyecto (ideal para aclarar que es un trabajo
      escolar), (2) un listado de los mismos links del menú a modo de mapa
      del sitio, (3) un link de contacto/"escribinos". Abajo de todo, una
      línea de copyright ampliada con la aclaración de que es un proyecto
      académico sin fines de lucro y que Twin Peaks pertenece a sus creadores
      (David Lynch y Mark Frost) — mismo espíritu que ya tiene tu footer
      actual, pero un poco más desarrollado. (Se descarta la columna de
      temporadas/personajes destacados.)

---

## PROMPT — ITERACIÓN 1 (ajustar el sitio)

```
Estoy migrando un proyecto ya iniciado. No re-explores el sitio de cero: usá el
inventario que te doy acá abajo y andá directo a los cambios. Solo abrí (Read)
los archivos puntuales que vayas a modificar.

CONTEXTO DEL PROYECTO
Sitio escolar sobre Twin Peaks, estilo editorial, para la materia Programación 4.
Carpeta conectada: twin_peaks. Las reglas de mantenimiento ya están en CLAUDE.md
(HTML/CSS/JS puro sin dependencias, preservar assets/images/, enfoque de
escritorio, un solo h1 por página, h2 consistentes) — no hace falta que te las
repita, se cargan solas.

CONSIGNA DEL PROFESOR (textual)
"El mismo debe tener una home y un mínimo de 4 links en un primer nivel (sin
contar la home), 2 de esos links deberán ser un formulario de contacto y una
galería de imágenes funcional. Además una de las secciones del menú debe tener
opciones desplegables (submenús) no menos de 3 en un segundo nivel. El sitio
debe ser RESPONSIVE."

ESTADO ACTUAL (para que no lo tengas que auditar de nuevo)
- Páginas: index.html (home), temporadas.html, galeria.html, contacto.html.
- Menú actual: Inicio | Temporadas | Galería | Contacto — 3 links de primer
  nivel sin contar la home (FALTA al menos 1 más) y ninguno tiene submenú
  desplegable (FALTA: una sección con 3 o más opciones de segundo nivel).
- Galería (galeria.html): ya funcional — filtro por categoría
  (Todo/Personajes/Locaciones/Atmósfera) + modal propio en js/main.js, sin
  librerías externas.
- Contacto (contacto.html): formulario con validación front-end en
  js/main.js (nombre, email, asunto, mensaje), sin backend, es una demo local.
- CSS: css/styles.css, variables en :root (colores --night/--pine/--mist/
  --cherry/--amber, tipografías --serif/--sans), breakpoint responsive en 760px.
- JS: js/main.js maneja: toggle "red room" (botón búho), filtro + modal de
  galería, validación del formulario de contacto, efecto de aparición por
  scroll en la sección #the-return de temporadas.html.
- 32 imágenes en assets/images/ (hero, personajes, locaciones, temporadas,
  galeria), ~3.9 MB en total.
- También hay un archivo contenido-episodios.md en la raíz del proyecto con
  los nombres y mini sinopsis de los 48 episodios (temporadas 1, 2 y The
  Return), listo para copiar en las páginas nuevas de cada temporada.
- Además hay una carpeta nueva, assets/images/selección/, con ~90 imágenes sin
  usar todavía: varias señas/lugares (Double-R-Sign-02, Twin-Peaks-High-School,
  Big-Eds-Gas-Farm, Fat-Trout-Trailer-Park, No-To-Ghostwood, Say-No-To-Sparkwood
  — perfectas para llenar la categoría "Locaciones" de la galería, que hoy está
  casi vacía), varias del Red Room / The Return (ZtoA_Square_Redroom...),
  retratos sueltos (Jack-Nance, Audrey, Donna-and-Laura, Bob, Cooper, etc.) y
  un par de candidatas a hero más "de escala/paisaje" (hero1.jpg,
  twin-peaks-1-1200x675.webp) — vale la pena mirarlas si se busca más impacto
  en el hero de la home. Ojo con un archivo cuyo nombre quedó mal:
  "Laura%27s_dead.webp" — renombrarlo (sacar el %27) antes de usarlo, para que
  no rompa como ruta de archivo.

LO QUE TENÉS QUE HACER EN ESTA ITERACIÓN
1. Cerrar la brecha con la consigna con esta estructura ya decidida (no hay
   que elegir un enfoque, es este):
   - Menú final: Inicio | Temporadas (con submenú) | Galería | Contacto | La
     Serie. Eso da 4 links de primer nivel sin contar la home.
   - "Temporadas" pasa a ser desplegable con 3 opciones de segundo nivel:
     Temporada 1, Temporada 2, Temporada 3: El Retorno. Cada una es una
     página nueva propia (temporada-1.html, temporada-2.html,
     temporada-3.html o los nombres que te parezcan más prolijos), con el
     detalle de sus capítulos: nombre de cada episodio + mini sinopsis estilo
     Netflix. temporadas.html se mantiene como resumen/overview de las 3, con
     un link "ver capítulos" hacia cada página nueva.
   - "La Serie" es una página nueva (sobre-la-serie.html o similar) con el
     apartado ampliado de producción/directores/por qué se retoma 25 años
     después/datos curiosos/la mirada de David Lynch — no va dentro de la
     home, va aparte (ver el detalle en "MIS AJUSTES ADICIONALES > Home").
   - Los nombres y mini sinopsis de los 48 episodios ya están redactados en
     contenido-episodios.md — usalos directo, no hace falta investigar nada.
2. Leé el archivo prompt-ajustes-sitio.md en la raíz del proyecto (está en la
   carpeta conectada) y aplicá todo lo que figura en su sección "MIS AJUSTES
   ADICIONALES", incluyendo del apartado "Ideas tomadas de sitios de
   referencia" únicamente las que estén marcadas con [x]. Las que queden sin
   marcar, ignoralas.
3. Mantené la coherencia visual editorial y el enfoque de escritorio ya
   existente: el submenú y el 4° link tienen que verse como si siempre hubieran
   sido parte del diseño, no agregados encima.
4. Verificá que el sitio siga siendo responsive después de los cambios (revisá
   el breakpoint de 760px que ya existe, y ajustalo si el nuevo menú lo rompe).
5. No toques archivos que no necesites tocar para esto.
6. Es una lista larga. Sugerencia de orden para no perderte: primero la
   brecha de la consigna (punto 1), después estructura/contenido nuevo
   (páginas o secciones nuevas, tabla de temporadas, galería), después
   coherencia visual y pulido (hover, tipografía, alineación, sticky, lazy),
   y al final animaciones/impacto cinematográfico general.

AL TERMINAR
Dame solo una lista de archivos modificados y qué cambiaste en cada uno (2-3
líneas por archivo). No repitas el HTML completo en tu respuesta.
```

---

## PROMPT — ITERACIÓN 2 (solo revisión, después de la Iteración 1)

```
No hagas cambios todavía. Primero auditá el sitio actual (todos los HTML que
existan a esta altura — incluidas las páginas nuevas de temporadas y "La
Serie" si se crearon en la Iteración 1 — más css/styles.css y js/main.js)
contra estos puntos y devolveme un checklist con lo que cumple y lo que no:

1. La consigna del profesor: home + mínimo 4 links de primer nivel sin
   contarla, uno de esos con submenú desplegable de al menos 3 opciones de
   segundo nivel, un formulario de contacto y una galería funcional, todo el
   sitio responsive.
2. Mis ajustes adicionales (los mismos de la Iteración 1 — repasalos vos
   mismo desde el historial de esta sesión, no hace falta que te los repita).
3. Consistencia: un solo h1 por página, estilos de h2 uniformes entre
   páginas, sin dependencias externas agregadas, todos los archivos de
   assets/images/ siguen estando.
4. Cualquier problema de responsive, accesibilidad (foco, contraste, aria) o
   visual que haya quedado pendiente.

Presentá el resultado como una lista de estado (cumple / no cumple / parcial)
por cada punto. Recién después de que yo lo revise y te confirme, aplicá los
ajustes puntuales que hagan falta — no los hagas todavía.
```

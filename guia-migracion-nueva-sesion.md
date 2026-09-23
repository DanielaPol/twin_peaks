# Guía: migrar el trabajo a una sesión nueva de Claude (gastando el mínimo de tokens)

Objetivo: que la próxima sesión no tenga que releer ni re-explorar el sitio desde cero — que reciba el estado actual ya resumido y vaya directo a los cambios.

## Por qué conviene abrir una sesión nueva

Esta conversación ya acumuló bastante contexto (lectura de los 4 HTML, el CSS, el JS y el PDF completo de la clase). Si seguís acá, cada mensaje nuevo arrastra ese historial aunque no lo necesites. Una sesión nueva arranca liviana; el truco es que no tenga que "redescubrir" el sitio por su cuenta — para eso está el prompt de `prompt-ajustes-sitio.md`.

## Paso a paso

1. **Terminá tus revisiones primero.** Completá la sección "MIS AJUSTES ADICIONALES" de `prompt-ajustes-sitio.md` antes de abrir la sesión nueva. Si vas completando eso a medida que se te ocurre dentro de la sesión nueva, vas a generar varias idas y vueltas (= más tokens gastados en aclaraciones).

2. **Abrí una sesión nueva** en esta misma carpeta (`twin_peaks`) conectada. El `CLAUDE.md` del proyecto se carga automático — no hace falta repetirle ahí las reglas de mantenimiento (HTML/CSS/JS puro, preservar `assets/images/`, enfoque de escritorio, un `h1` por página, `h2` consistentes).

3. **Primer mensaje de la sesión nueva: pegá el bloque "ITERACIÓN 1" completo de `prompt-ajustes-sitio.md`**, tal cual está. Ese prompt ya incluye la consigna del profesor, qué falta para cumplirla, el inventario de archivos y funcionalidades actuales, y tus ajustes. No hace falta que le cuentes de nuevo cómo es el sitio ni le pidas que "revise todo primero": el prompt ya le da el mapa.

4. **Pedile explícitamente que no explore de más.** El prompt ya incluye la línea "no re-explores el sitio de cero", pero si querés reforzarlo agregá: *"Solo abrí los archivos puntuales que vayas a modificar."*

5. **No adjuntes el PDF de optimización de imágenes** salvo que en esa misma sesión también le vayas a pedir cambios de imágenes o de la galería. Si lo vas a hacer, mencionalo en el primer mensaje (no en uno aparte), así lo lee una sola vez.

6. **Cerrá la Iteración 1 pidiendo un resumen corto**, no una re-explicación completa: el prompt ya pide "lista de archivos modificados y qué cambiaste en cada uno, sin repetir el HTML completo".

7. **Para la Iteración 2 (revisión), pegá el segundo bloque de prompt** en un mensaje nuevo de esa *misma* sesión — no abras otra sesión para esto, porque ya tiene el contexto de lo que acaba de cambiar. Ese bloque le pide auditar y listar hallazgos antes de tocar nada más.

8. **Esta sesión actual la podés cerrar** una vez que tengas los tres archivos. No hace falta traspasar contexto a mano: `prompt-ajustes-sitio.md` cumple esa función.

## Qué NO hacer

- No pidas en la sesión nueva "revisá todo el sitio y decime qué le falta" como primer mensaje: eso la obliga a re-descubrir todo lo que ya sabemos y quema tokens en diagnóstico en vez de en el ajuste.
- No repitas la consigna del profesor dos veces (una tuya suelta, otra dentro del prompt armado): usá solo el prompt de `prompt-ajustes-sitio.md`.
- No mezcles ajustes y revisión en el mismo pedido: son dos pasadas separadas a propósito, para que la revisión sea corta y puntual.

# Consideraciones de optimización de imágenes (según el PDF de la clase) aplicadas a este sitio

Base: `05 - Optimización_de_imágenes_y_galerías.pdf` (Programación 4, Mariano Ingerto) + auditoría del estado actual de `assets/images/`.

## Estado actual del sitio

- 32 imágenes, **3.9 MB en total** en `assets/images/`.
- Formatos: 25 `.jpg`, 6 `.webp`, 1 `.avif` — ya hay uso parcial de formatos modernos, buen punto de partida.
- Las más pesadas hoy: `Diane-tulpa1.webp` (312 KB), y varios `.jpg` de `galeria/` y `personajes/` entre 228–276 KB.
- Ningún `<img>` del HTML actual tiene `width`/`height` ni `loading="lazy"`.
- La galería (`galeria.html`) ya tiene filtro por categoría y un modal propio armado en `js/main.js` — cumple el requisito de "galería funcional" sin depender de librerías externas.

## Lo que dice el PDF y cómo aplica acá

**Formato de archivo (págs. 10–14).** Para fotografías (personajes, locaciones, atmósfera) lo recomendado es JPEG o, mejor, WebP: 25–35% más liviano que JPEG/PNG con calidad similar, y ya con ~96% de soporte en navegadores. Como ya usás `.webp` en varios lugares, tiene sentido migrar también los 25 `.jpg` restantes, priorizando los de `galeria/` y `personajes/` que son los más pesados. PNG solo si hiciera falta transparencia real (no es el caso hoy). SVG solo serviría para íconos o logos, y el sitio no tiene ninguno (el búho está resuelto con un emoji).

**Peso objetivo (págs. 15–19).** El PDF ubica una foto "aceptable" en calidad media en torno a 150 KB, y sugiere mantener el peso total de una página por debajo de 1–2 MB. La home carga hero + 6 retratos + 4 lugares = 11 imágenes en una sola vista: conviene que cada una ronde 80–150 KB, no los 200–300 KB que tienen hoy algunas.

**Exportar para web (págs. 20–34).** El método que enseña el PDF es Photopea.com → "Exportar como" (o el atajo `Ctrl+Mayús+Alt+S`) → elegir formato WebP → calidad entre 60 y 80 → ajustar ancho/alto en píxeles antes de exportar. Si preferís no hacerlo imagen por imagen, en la próxima sesión se puede automatizar una conversión batch a WebP (calidad 75–80, respetando nombres y carpetas) — es una opción, no un reemplazo obligatorio del método de la clase.

**Lightbox / galerías (págs. 36–44).** El PDF compara Lightbox2 (clásica, requiere jQuery), GLightbox (~11 KB, JS puro, sin dependencias) y PhotoSwipe (la más completa, pensada para mobile). Como `CLAUDE.md` pide no agregar dependencias, no correspondería instalar ninguna de las tres: el modal propio en `main.js` ya resuelve lo mismo. Lo que sí vale la pena tomar de esas librerías —escrito a mano, sin sumar peso— son dos ideas puntuales: navegación con flechas de teclado entre imágenes dentro del modal, y lazy loading de las miniaturas de la grilla (cargar la miniatura liviana y pedir la imagen grande recién al abrir el modal, la idea de la pág. 37).

## Puntos a decidir antes de tocar las imágenes

- `CLAUDE.md` exige "preservar todos los archivos de `assets/images/`". Si se convierte a `.webp`, hay que definir si los `.jpg` originales se mantienen igual (se suman archivos nuevos) o se reemplazan — conviene decidirlo antes de pedir la conversión para no interpretar mal la regla.
- Si cambian los nombres de archivo (`.jpg` → `.webp`), hay que actualizar las referencias en los 4 HTML a la vez, como un solo paso, no imagen por imagen.

## Checklist opcional para sumar al prompt de ajustes

- [ ] Agregar `width`/`height` a los `<img>` para evitar salto de layout (buena práctica general — no viene del PDF, pero es gratis implementarlo).
- [ ] Agregar `loading="lazy"` a las imágenes fuera del primer viewport (todo menos el hero de la home).
- [ ] Convertir los `.jpg` restantes a `.webp` con calidad 70–80.
- [ ] Revisar que ninguna imagen individual supere ~150 KB.

\# Landing de ventas (WhatsApp-first)

Landing estática de alta conversión enfocada en generar mensajes de WhatsApp (CTA único). Hecha con React + Vite + TailwindCSS, mobile-first y lista para editar contenido con **Decap CMS**.

## Stack

- React + Vite (build estático deploy-friendly)
- TailwindCSS
- Contenido editable desde `public/content/content.json` (CMS-ready)
- Decap CMS (panel en `/admin`)

## Desarrollo

```bash
npm install
npm run dev
```

## Build (Static)

```bash
npm run build
npm run preview
```

## Configuración WhatsApp (crítico)

Hay dos formas (prioridad 1 > 2):

1) Variable de entorno (recomendado):

```powershell
$env:VITE_WHATSAPP_NUMBER="5491100000000"
```

2) Desde contenido (CMS): edita `public/content/content.json`:

```json
{ "client": { "whatsappNumber": "5491100000000" } }
```

Formato requerido para `wa.me`: **solo números**, con código de país (sin `+`).

## Contenido editable

La landing consume `public/content/content.json` en runtime (sin rebuild) mediante `fetch('/content/content.json')`.

Incluye:

- Textos: hero / CTA final / beneficios
- Videos: links TikTok (máx 6)
- Productos: nombre, precio, imagen, activo/inactivo
- Testimonios: texto corto, imagen opcional
- Branding: nombre y logo

Archivo:

- `public/content/content.json`

## Decap CMS

El panel vive en:

- `/admin` (archivos en `public/admin`)

Config:

- `public/admin/config.yml`

### Producción (Netlify)

1) Habilita **Netlify Identity** y **Git Gateway** en tu sitio.
2) Deploy.
3) Entra a `/admin` y autentícate.

Nota: ya existe un redirect en `netlify.toml` para que funcione el router hash de Decap.

### Local (opcional)

Para probar el CMS localmente con `local_backend: true`:

```bash
npm run dev
npm run cms:dev
```

Luego abre:

- http://localhost:5173/admin/

## Estructura

- `src/components/sections/*`: secciones obligatorias
- `src/components/ui/*`: UI reutilizable
- `src/content/*`: tipos + loader + defaults
- `public/content/content.json`: contenido editable
  - `src/lib/*`: helpers (WhatsApp, TikTok)

  ## Deploy

  Funciona en Netlify/Vercel como sitio estático:

  - Build command: `npm run build`
  - Output directory: `dist`

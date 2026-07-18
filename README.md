# MERAKI - Página web para entrenador personal

MERAKI es un sitio web estático desarrollado con Eleventy (11ty) para presentar los servicios de un entrenador personal. El proyecto incluye secciones para la misión, visión, servicios de alimentación, antropometría, asesorías, entrenamientos grupales, entrenamiento personalizado, contacto y una página de agradecimiento.

## ¿Qué incluye este proyecto?

- Sitio web moderno y responsive
- Páginas informativas para servicios y especialidades
- Integración de contacto por WhatsApp y formulario
- Diseño preparado para una marca enfocada en fitness y bienestar
- Arquitectura basada en Eleventy con plantillas reutilizables

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js
- npm

## Instalación

Instala las dependencias del proyecto con:

```bash
npm install
```

## Desarrollo local

Para iniciar el entorno de desarrollo y ver el sitio en tu navegador, ejecuta:

```bash
npm run dev
```

La vista previa estará disponible en:

```text
http://localhost:4000
```

La URL local está configurada en el archivo .lightserverrc.

## Construcción para producción

Para generar la versión lista para publicar, ejecuta:

```bash
npm run build
```

Esto compilará el sitio y dejará los archivos listos en la carpeta dist.

## Estructura principal

- src/: contiene las páginas y contenido del sitio
- src/_includes/: plantillas, layouts y componentes reutilizables
- src/assets/: imágenes, videos, estilos y scripts

## Tecnologías utilizadas

- Eleventy (11ty)
- Nunjucks
- HTML, CSS y JavaScript
- Light Server para vista previa local


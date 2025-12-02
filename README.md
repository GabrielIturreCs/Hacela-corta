# HacelaCorta Pro

**HacelaCorta Pro** es una herramienta web para el procesamiento masivo de imágenes. Permite eliminar fondos con IA, recortar y comprimir imágenes localmente en el navegador, sin subir archivos a servidores externos.

## Características

-   **Procesamiento Local**: Todo el procesamiento se realiza en tu navegador. Tus fotos nunca salen de tu dispositivo.
-   **Eliminación de Fondo con IA**: Utiliza inteligencia artificial para eliminar el fondo de tus imágenes automáticamente.
-   **Recorte Profesional**: Herramienta de recorte integrada para ajustar tus imágenes.
-   **Compresión y Conversión**: Convierte a WebP, JPEG o PNG y ajusta la calidad para reducir el tamaño del archivo.
-   **Descarga Masiva**: Descarga todas tus imágenes procesadas en un archivo ZIP.
-   **Modo Oscuro Premium**: Interfaz moderna y agradable a la vista con soporte para modo oscuro.

## Estructura del Proyecto

El proyecto ha sido refactorizado para seguir una estructura profesional:

```
hacelacorta/
├── css/
│   └── style.css       # Estilos CSS personalizados
├── js/
│   └── app.js          # Lógica de la aplicación en JavaScript
├── index.html          # Estructura HTML principal
└── README.md           # Documentación del proyecto
```

## Tecnologías Utilizadas

-   **HTML5 & CSS3**: Estructura y estilos modernos.
-   **Tailwind CSS**: Framework de CSS para un diseño rápido y responsivo.
-   **JavaScript (ES6+)**: Lógica del lado del cliente.
-   **Librerías Externas**:
    -   `jszip`: Para la generación de archivos ZIP.
    -   `cropperjs`: Para la funcionalidad de recorte de imágenes.
    -   `@imgly/background-removal`: Para la eliminación de fondos con IA.
    -   `lucide`: Para los iconos.

## Cómo Usar

1.  Abre `index.html` en tu navegador web.
2.  Arrastra y suelta tus imágenes en el área designada o haz clic para seleccionarlas.
3.  Usa las herramientas de la barra lateral para ajustar la calidad, formato y tamaño.
4.  Selecciona una imagen de la tira de miniaturas para editarla individualmente (recortar, quitar fondo).
5.  Haz clic en "Descargar Todo (ZIP)" para guardar tus imágenes procesadas.

## Créditos

Desarrollado con ❤️ para ahorrar tiempo.

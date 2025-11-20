
# app-trading

Aplicación Angular principal que utiliza la librería `shared-lib` para componentes, servicios y utilidades compartidas.

## Estructura
- **src/app/**: Código fuente principal de la app
  - **pages/**: Componentes de página (Home, Acciones, Cartera)
  - **app.routes.ts**: Configuración de rutas
  - **app.config.ts**: Configuración global de la app
  - **app.ts**: Componente raíz con layout y router-outlet

## Páginas principales
- **Home**: Página de inicio con cards de navegación y control de visibilidad por rol
- **Consulta de acciones**: Página con tabla de acciones y paginación
- **Gestión de cartera**: Página para administración de cartera (solo admin)

## Navegación y rutas
- Configuradas en `app.routes.ts` usando rutas standalone
- Uso de `routerLink` en los templates para navegación entre páginas

## Autenticación y roles
- Integración con `AuthService` de `shared-lib` para gestionar sesión y roles
- Visibilidad de cards y acceso a páginas restringido por rol (`isAdmin`, `isUser`)

## Ejemplo de integración de componentes
```html
<!-- En HomeComponent -->
<button class="card card-btn" routerLink="/acciones">...</button>
<div *ngIf="user?.isAdmin" class="card" routerLink="/cartera">...</div>
```

## Estilos y UI
- Uso de Angular Material para componentes visuales
- Layout principal con `sl-layout` y títulos dinámicos
- Tabla con paginación, cabecera personalizada y efecto hover en filas

## Cómo ejecutar
1. Instala dependencias: `npm install`
2. Ejecuta la app: `ng serve` o `npm start`
3. Accede en el navegador a `http://localhost:4200`

## Contribución
- Añade nuevas páginas en `src/app/pages/`
- Usa componentes y servicios de `shared-lib` para reutilización
- Documenta cada página y flujo relevante

## Licencia
MIT

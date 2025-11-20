# SharedLib

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.0.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build shared-lib
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/shared-lib
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## shared-lib: Documentación de la librería

### Estructura
- **components/**: Componentes reutilizables (ej. TableComponent, LayoutComponent)
- **services/**: Servicios globales (ej. LayoutService)
- **public-api.ts**: Exporta los elementos públicos de la librería

### Componentes principales
#### TableComponent
Tabla genérica con Angular Material, paginación, ordenación y estilos personalizables.
- Inputs: `columns`, `data`, `paginator`, `pageSize`, `pageSizeOptions`
- Ejemplo:
```html
<sl-table [columns]="columns" [data]="data" [paginator]="true" [pageSize]="5" [pageSizeOptions]="[5, 10, 20]"></sl-table>
```

#### LayoutComponent
Layout para estructurar la app y mostrar títulos dinámicos.

### Servicios principales
#### LayoutService
Permite establecer el título de la página dinámicamente.
- Métodos: `setPageTitle(title: string)`, observable `pageTitle$`

### Autenticación

#### AuthService
Servicio para gestionar autenticación y usuario en la app.
- Métodos principales:
  - `login(credentials)`: Inicia sesión y guarda el usuario en localStorage
  - `logout()`: Elimina la sesión y usuario
  - `getUser()`: Obtiene el usuario actual
  - `getToken()`: Obtiene el token actual
  - `isAuthenticated()`: Devuelve si el usuario está autenticado
- Propiedades:
  - `usuarioSubject`: Observable del usuario actual
- Uso recomendado:
```typescript
import { AuthService } from 'shared-lib';

constructor(private auth: AuthService) {
  this.auth.usuarioSubject.subscribe(user => {
    // lógica con el usuario
  });
}
```
- El servicio gestiona persistencia en localStorage y roles (`isAdmin`, `isUser`).

### Uso
1. Importa desde `'shared-lib'` en tu app.
2. Usa los componentes en templates standalone o NgModules.
3. Consulta los ejemplos en los componentes.

### Requisitos
- Angular 16+
- Angular Material

### Contribución
- Añade componentes en `components/` y servicios en `services/`.
- Exporta en `public-api.ts`.
- Documenta con comentarios JSDoc.

### Licencia
MIT

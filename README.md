
# Angular Multiproyecto: app-trading & shared-lib

Este workspace contiene una solución multiproyecto Angular generada con [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.10.

## Estructura

- **projects/shared-lib**: Librería compartida para componentes y utilidades reutilizables.
- **projects/app-trading**: Aplicación principal que consume la librería y utiliza PrimeNG.

PrimeNG y PrimeIcons están instalados y disponibles para ambos proyectos.


## Servidor de desarrollo

Para iniciar la aplicación principal:

```bash
ng serve app-trading
```

Luego abre tu navegador en `http://localhost:4200/`.


## Generación de código

Para agregar componentes compartidos:

```bash
ng generate component nombre-componente --project=shared-lib
```

Para agregar vistas o lógica de negocio a la app:

```bash
ng generate component nombre-componente --project=app-trading
```

Para ver todos los esquemáticos disponibles:

```bash
ng generate --help
```


## Compilación

Para compilar la librería:

```bash
ng build shared-lib
```

Para compilar la aplicación:

```bash
ng build app-trading
```


## Pruebas unitarias

Para ejecutar pruebas unitarias:

```bash
ng test
```


## Pruebas end-to-end

Para pruebas e2e:

```bash
ng e2e
```


## Recursos adicionales

Para más información sobre Angular CLI y PrimeNG, consulta:
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [PrimeNG Documentación](https://primeng.org/)

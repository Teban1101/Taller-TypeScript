# Taller TypeScript - Gestión de Series de TV

Este proyecto implementa una aplicación web interactiva para gestionar series de televisión usando TypeScript, HTML y Bootstrap.

## Características

### Punto 1 (65%)
- **Clase Serie**: Implementada en `serie.ts` con atributos completos (id, name, channel, seasons, description, image, website)
- **Datos de series**: Archivo `data.ts` con conjunto completo de datos de 6 series populares
- **Tabla Bootstrap**: Visualización de las series en una tabla estilizada con Bootstrap 4

### Punto 2 (35%)
- **Promedio de temporadas**: Cálculo y visualización del promedio de temporadas de todas las series al final de la tabla

### Funcionalidad Adicional
- **Vista detallada interactiva**: Al hacer clic en el nombre de una serie se muestra información detallada
- **Layout de dos columnas**: Tabla de series a la izquierda, detalle a la derecha
- **Card de Bootstrap**: Información detallada con imagen, descripción y enlace web

## Estructura del Proyecto

```
Taller-TypeScript/
├── serie.ts            # Clase Serie con propiedades completas
├── data.ts             # Datos completos de las series
├── main.ts             # Lógica principal con interactividad
├── dist/               # Archivos JavaScript compilados
├── index.html          # Página principal con layout responsivo
├── package.json        # Configuración de npm
└── tsconfig.json       # Configuración de TypeScript
```

## Tecnologías Utilizadas

- **TypeScript**: Lenguaje de programación tipado
- **HTML5**: Estructura de la página web
- **Bootstrap 4**: Framework CSS para estilos y componentes
- **ES6 Modules**: Sistema de módulos para JavaScript

## Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Taller-TypeScript
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Compilar TypeScript**:
   ```bash
   npm run build
   ```

4. **Ejecutar la aplicación**:
   ```bash
   npm start
   ```

5. **Abrir en el navegador**:
   Ir a `http://localhost:8080`

## Scripts Disponibles

- `npm run build`: Compila los archivos TypeScript
- `npm start`: Compila y ejecuta el servidor HTTP
- `npm run dev`: Modo desarrollo con compilación automática

## Funcionalidades

### Tabla de Series
La aplicación muestra una tabla con las siguientes columnas:
- **#**: ID de la serie
- **Name**: Nombre de la serie (como enlace clickeable)
- **Channel**: Canal de transmisión
- **Seasons**: Número de temporadas

### Promedio de Temporadas
Al final de la tabla se muestra el promedio de temporadas de todas las series listadas.

### Vista Detallada Interactiva
- Haz clic en el nombre de cualquier serie para ver su información detallada
- Se muestra un card de Bootstrap en la columna derecha con:
  - Imagen de la serie
  - Descripción completa
  - Enlace al sitio web oficial

## Series Incluidas

1. **Breaking Bad** (AMC) - 5 temporadas
2. **Orange Is the New Black** (Netflix) - 6 temporadas  
3. **Game of Thrones** (HBO) - 7 temporadas
4. **The Big Bang Theory** (CBS) - 12 temporadas
5. **Sherlock** (BBC) - 4 temporadas
6. **A Very English Scandal** (BBC) - 2 temporadas

**Promedio de temporadas: 6**

## Autor

Desarrollado como parte del Taller de TypeScript - Desarrollo de Software en Equipo
# Conversor de JSON a YAML / YAML a JSON

Este proyecto es una herramienta web que permite convertir de JSON a YAML y de YAML a JSON de manera rápida y sencilla. Es útil para quienes trabajan con archivos de configuración como Kubernetes o Docker Compose, donde se utilizan ambos formatos.

## Características

- **Conversión de JSON a YAML:** Convierte archivos o bloques de texto JSON a formato YAML.
- **Conversión de YAML a JSON:** Convierte archivos o bloques de texto YAML a formato JSON.
- **Interfaz simple y amigable:** Dos áreas de texto, una para la entrada y otra para el resultado.
- **Soporte de errores:** Muestra mensajes de error cuando el formato de entrada es incorrecto.

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **[js-yaml](https://github.com/nodeca/js-yaml):** Librería de JavaScript para convertir YAML a JSON y viceversa.

## Cómo usar

1. Clona este repositorio o descarga el código fuente.
2. Abre el archivo `index.html` en tu navegador web.
3. En el área de texto de la izquierda, introduce el contenido en formato JSON o YAML.
4. Usa los botones para convertir el contenido:
    - **Convertir a YAML:** Si introduces un JSON, este botón convertirá el contenido a YAML.
    - **Convertir a JSON:** Si introduces un YAML, este botón lo convertirá a JSON.
5. El resultado aparecerá en el área de texto de la derecha.

## Ejemplos de uso

### JSON a YAML

- **Entrada (JSON):**

    ```json
    {
        "name": "Proyecto",
        "version": "1.0",
        "dependencies": {
            "js-yaml": "^4.1.0"
        }
    }
    ```
- **Salida (YAML):**

    ```yaml
    name: Proyecto
    version: '1.0'
    dependencies:
      js-yaml: ^4.1.0
    ```

### YAML a JSON

- **Entrada (YAML):**

    ```yaml
    name: Proyecto
    version: '1.0'
    dependencies:
      js-yaml: ^4.1.0
    ```

- **Salida (JSON):**

    ```json
    {
        "name": "Proyecto",
        "version": "1.0",
        "dependencies": {
            "js-yaml": "^4.1.0"
        }
    }
    ```

## Instalación de Dependencias (Opcional)

Si deseas modificar o extender el proyecto, puedes instalar las dependencias localmente utilizando npm.

1. Asegúrate de tener [Node.js](https://nodejs.org/) y npm instalados.
2. Ejecuta el siguiente comando para instalar `js-yaml`:

   ```bash
   npm install js-yaml

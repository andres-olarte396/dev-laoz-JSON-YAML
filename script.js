document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('inputArea');
    const outputArea = document.getElementById('outputArea');
    const convertToYAMLButton = document.getElementById('convertToYAML');
    const convertToJSONButton = document.getElementById('convertToJSON');

    // Función para convertir de JSON a YAML
    convertToYAMLButton.addEventListener('click', () => {
        const inputText = inputArea.value.trim();
        try {
            const jsonObject = JSON.parse(inputText);
            const yamlText = jsyaml.dump(jsonObject);
            outputArea.value = yamlText;
        } catch (error) {
            outputArea.value = `Error: Entrada inválida para JSON. Verifica el formato.\n\n${error}`;
        }
    });

    // Función para convertir de YAML a JSON
    convertToJSONButton.addEventListener('click', () => {
        const inputText = inputArea.value.trim();
        try {
            const yamlObject = jsyaml.load(inputText);
            const jsonText = JSON.stringify(yamlObject, null, 2);
            outputArea.value = jsonText;
        } catch (error) {
            outputArea.value = `Error: Entrada inválida para YAML. Verifica el formato.\n\n${error}`;
        }
    });
});

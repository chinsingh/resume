async function fetchYAMLData(filePath) {
    try {
        const response = await fetch(filePath);
        const yamlText = await response.text();
        return jsyaml.load(yamlText); 
    } catch (error) {
        console.error('Error fetching the YAML file:', error)
    }
}

// Parse query params to get the template
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

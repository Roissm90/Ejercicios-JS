const baseUrl = 'https://breakingbadapi.com/api/';

async function fetchApi() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    console.log(result);
}
fetchApi();
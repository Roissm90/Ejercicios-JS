/*
Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
*/
const baseUrl = 'https://api.nationalize.io?name=';

const nameInput = document.querySelector('input');
const consultButton = document.querySelector('button');
const containerResult = document.createElement('div');
document.body.appendChild(containerResult);
const nationalityh2 = document.createElement('h2');
nationalityh2.textContent= 'Resultados';
containerResult.appendChild(nationalityh2);
const nationalitiesDiv = document.createElement('div');
containerResult.appendChild(nationalitiesDiv);

consultButton.addEventListener('click', fetchApi);

async function fetchApi() {
    let url = baseUrl + nameInput.value;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}

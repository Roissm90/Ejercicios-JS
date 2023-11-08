/*
En base al ejercicio anterior, crea un botón con el texto 'X' 
para cada uno de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.
*/

const baseUrl = 'https://api.nationalize.io?name=';

const nameInput = document.querySelector('input');
const consultButton = document.querySelector('button');

consultButton.addEventListener('click', function() {
    let inputValue = nameInput.value;
    if (inputValue !== '') {
        const apiUrl = baseUrl + inputValue;
        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let countryProbability of data.country) {
                    const myDynamicP = document.createElement('p');
                    myDynamicP.textContent = `El nombre ${inputValue} tiene un ${countryProbability.probability * 100}% de ser de ${countryProbability.country_id}`;
                    document.body.appendChild(myDynamicP);
                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'X';
                    myDynamicP.appendChild(removeButton);
                    removeButton.addEventListener('click', function() {
                        myDynamicP.remove();
                    });
                }
            })
            .catch(error => {
                console.error(error.message);
            });
    } 
    else {
        console.log('Introduzca un nombre válido')
    }
    
});
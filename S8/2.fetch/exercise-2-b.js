/*
En base al ejercicio anterior. 
Crea dinamicamente un elemento <p> por cada petición a la api que diga...
'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
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
                console.log(data);
                console.log(data.country);
                
                const myDynamicP = document.createElement('p');
                myDynamicP.textContent = `El nombre ${inputValue}`;
                let countryInfo = ''; 

                for (let i = 0; i < data.country.length; i++) {
                    let countryProbability = data.country[i].probability * 100;
                    let countryId = data.country[i].country_id;
                    countryInfo += ` tiene un ${countryProbability}% de ser de ${countryId}`;
                    
                    if (i < data.country.length - 1) {
                        countryInfo += ',y ';
                    } else {
                        countryInfo += '.'
                    }
                }

                myDynamicP.textContent += countryInfo;
                document.body.appendChild(myDynamicP);
            })
            .catch(error => {
                console.error(error.message);
            });
    } else {
        console.log('Introduzca un nombre válido')
    }
    
});
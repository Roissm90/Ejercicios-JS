/*
Dado el siguiente html y javascript. 
Utiliza el array para crear dinamicamente una lista ul > li 
de elementos en el div de html con el atributo data-function="printHere".
*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let carsList = document.createElement('ul');
let containerCarsList = document.querySelector('div[data-function="printHere"]');
containerCarsList.appendChild(carsList);

for (let car of cars) {
    let itemCarsList = document.createElement('li');
    itemCarsList.textContent = car;
    carsList.appendChild(itemCarsList);
}
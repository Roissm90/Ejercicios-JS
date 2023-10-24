function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return 'No hay coincidencias';
}

let arrayAnimals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let textAnimal = 'Salamandra';

let arrayCities = ['Madrid', 'Lugo', 'Toledo'];
let textCity = 'Madrid';

let arrayConsoles = ['PS5', 'Xbox', 'Switch'];
let textConsole = 'PS4';

console.log(findArrayIndex(arrayAnimals, textAnimal));
console.log(findArrayIndex(arrayCities, textCity));
console.log(findArrayIndex(arrayConsoles, textConsole));

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== 'No hay coincidencias') {
        array.splice(index, 1);
    }
    return array;
}

console.log(removeItem(arrayAnimals, textAnimal));
console.log(removeItem(arrayCities, textCity));
console.log(removeItem(arrayConsoles, textConsole));
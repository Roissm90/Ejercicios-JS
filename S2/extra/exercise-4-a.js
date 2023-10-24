
function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
}

let arrayAnimals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let textAnimal = 'Salamandra';

let arrayCities = ['Madrid', 'Lugo', 'Toledo'];
let textCity = 'Madrid';

let arrayConsoles = ['PS5', 'Xbox', 'Switch'];
let textConsole = 'Xbox';

console.log(findArrayIndex(arrayAnimals, textAnimal));
console.log(findArrayIndex(arrayCities, textCity));
console.log(findArrayIndex(arrayConsoles, textConsole));
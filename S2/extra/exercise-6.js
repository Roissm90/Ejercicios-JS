let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, indexOfArray1, indexOfArray2) {

    let playerChanged = array[indexOfArray1];
    array[indexOfArray1] = array[indexOfArray2];
    array[indexOfArray2] = playerChanged;

    return array;
}

console.log(swap(players, 1, 3));

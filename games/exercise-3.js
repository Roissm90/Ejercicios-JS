/*## Who is who

Dado el html `exercise-2.html` y el css `exercise-2.css`, crea un archivo de javascript (recuerda que el javascript que
proporcionamos nosotros es el que contiene la solución propuesta) para crear el famoso juego de Quien es quien!

Para ello abre el fichero `exercise-2.html` en tu navegador y verás el resultado final de lo que queremos conseguir. 
Como ves, tenemos una serie de personas con diferentes caracteristicas fisicas y, debajo una serie de preguntas a
realizar a nuestro programa. El cometido del programa que hagas será comparar la pregunta seleccionada que haga el
usuario (botones) y deshabilitar personas en base a si concuerdan con las caracteristicas de la persona a adivinar
que escogerá aleatoriamente el juego al iniciarse.

Deberás programar todas las condiciones partiendo de los **dos arrays que te dejamos al final del README**.

##Condiciones

6. Por último para nota, resetea el juego cuando el usuario elija una persona como respuesta. Para que pueda volver
   a jugar, basicamente :)
   ##Recursos
*/

const questionsType = [
  {
    title: "Gender",
    key: "gender",
    questions: ["Man", "Woman"],
  },
  {
    title: "Hair Color",
    key: "hairColor",
    questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
  },
  {
    title: "Moustache",
    key: "moustache",
    questions: ["Yes", "No"],
  },
  {
    title: "Glasses",
    key: "glasses",
    questions: ["Yes", "No"],
  },
  {
    title: "Hat or Cap",
    key: "hatOrCap",
    questions: ["Yes", "No"],
  },
  {
    title: "Clothes color",
    key: "clothesColor",
    questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
  },
  {
    title: "Skin color",
    key: "skinColor",
    questions: ["Light", "Dark"],
  },
  {
    title: "Long Hair",
    key: "longHair",
    questions: ["Yes", "No"],
  },
];

const persons = [
  {
    img: "public/exercise-3/001-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/002-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/003-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/004-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/005-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/006-man.svg",
    gender: "Man",
    hairColor: "Brown",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/007-man.svg",
    gender: "Man",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/008-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/009-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/010-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/011-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/012-woman.svg",
    gender: "Woman",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/013-woman.svg",
    gender: "Woman",
    hairColor: "White",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/014-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/015-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/016-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/017-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/018-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/019-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/020-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/021-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/022-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/023-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/024-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/025-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/026-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/027-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/028-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/029-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/030-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/031-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/032-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/033-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/034-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/035-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/036-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/037-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/038-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/039-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/040-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/041-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/042-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/043-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/044-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/045-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
];
//cojo los elementos del index h2, div tablero, y div questions
const h2Span$$ = document.querySelector('[data-function="clueCount"]');
const divBoardGame$$ = document.querySelector('[data-function="boardGame"]');
const divQuestions$$ = document.querySelector('[data-function="questions"]');

/*
1. Selecciona aleatoriamente una persona del array. Esta es la persona que deberá adivinar el usuario en base a las
   preguntas que haga al juego.
*/
let randomPerson = null;

function personToGuess() {
    randomPerson = persons[Math.floor(Math.random() * persons.length)];
}
personToGuess();
console.log(randomPerson);
/*
2. Crea un tablero de juego en el que recorras todas las personas y pinta un `<img>` por cada una de ellas con
   la imagen que cada persona tiene en la propiedad `.img` dentro
   del `<div data-function="boardGame">`
*/
for (let i = 0; i < persons.length; i++) {
    const imgPerson$$ = document.createElement('img');
    imgPerson$$.src = persons[i].img;
    divBoardGame$$.appendChild(imgPerson$$);
}
/*
3. Crea un tablero de preguntas con el array de `questionsType` que tendrás al final del README. Por cada uno de
   los objetos de este array deberás pintar un `<h2>` con el valor de la propiedad `.title` y tantos botones como
   strings tenga el array de la propiedad `.questions`. Como consejo, podrás usar la propiedad `.key` para
   posteriormente comparar las respuestas con la persona seleccionada por el juego aleatoriamente.
*/
for (let i = 0; i < questionsType.length; i++) {
    const h2Person$$ = document.createElement('h2');
    h2Person$$.textContent = questionsType[i].title;
    console.log(h2Person$$);
    divQuestions$$.appendChild(h2Person$$);
    for (let j = 0; j < questionsType[i].questions.length; j++) {
        const questionsPerson$$ = document.createElement('button');
        questionsPerson$$.textContent = questionsType[i].questions[j];
        divQuestions$$.appendChild(questionsPerson$$);
        //Crea un evento `click` en los botones para comprobar si la persona seleccionada aleatoriamente por el juego coincide con la opción seleccionada por el usuario.
        questionsPerson$$.addEventListener('click', function() {
            checkCoincidence(questionsType[i].key, questionsType[i].questions[j]);
            questionsPerson$$.style.pointerEvents = 'none';
            questionsPerson$$.style.opacity = '0.2';
        });
    }
}
/*
4. Recorre el array de personas y deshabilita aquellas que no
   coincidan afirmativamente con la comparación. 
   Ej: Si el usuario selecciona la opción `Yes` de la pregunta ``Glasses tendremos que comprobar que el usuario seleccionado 
   aleatoriamente por el juego tiene gafas...en caso de que las tenga. Deshabilitamos todos las personas que no tengan gafas y,
   en caso de que no la tenga, lo contrario. 
   Para deshabilitar te recomendamos que añadas el estilo `pointers-events: 'none'`y`opacity: '0.2'`. 
   Deshabilita también el botón al que el usuario ha hecho click con las mismas propiedades para que no pueda volver a darle. 
   Finalmente, suma 1 al contador de pistas que estará en el `<span data-function="clueCount""`.
*/
function checkCoincidence(key, selectedOption) {
    // Comprobamos si la opción seleccionada por el usuario coincide con la del jugador aleatorio
    if (randomPerson[key] === selectedOption) {
        for (let i = 0; i < persons.length; i++) {
            if (persons[i][key] !== selectedOption) {
                // Deshabilitar la persona
                let imagePerson$$ = divBoardGame$$.querySelector('img:nth-child(' + (i + 1) + ')');
                imagePerson$$.style.pointerEvents = 'none';
                imagePerson$$.style.opacity = '0.2';
            }
        }
    } else {
        clueCount++;
        h2Span$$.textContent = clueCount;
    }
}

let clueCount = 0;
/*
5. Una vez hecho esto el usuario tendrá la capacidad de jugar hasta que decida que sabe quien es la persona
   seleccionada aleatoriamente por el juego. Para que el usuario seleccione la persona que cree que es, añade un
   evento `click` a las imagenes que comprueben si esa persona es realmente la persona que el juego ha seleccionado
   . Si es, crea una alerta felicitando al usuario por ganar con el numero de pistas usadas y si no...saca una
   alerta pero con un mensaje un poco menos optimo...you lose :(. Este evento sería lo ideal que lo hicieras
   al crear el tablero de juego con las personas...por optimizar jeje.
*/
const imgElements = divBoardGame$$.querySelectorAll('img');
for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].addEventListener('click', function () {
        if (persons[i] === randomPerson) {
            // El usuario ha adivinado correctamente
            alert(`¡Felicitaciones! Has ganado con ${clueCount} pistas.`);
        } else {
            // El usuario ha adivinado incorrectamente
            alert('¡Perdiste! :(');
        }
    });
}
/*
Este juego es el típico juego de memoria por pareja en el que tendremos que **seleccionar dos tarjetas y si ambas tarjetas
ocultan la misma imagen, la jugada será correcta** y, si por el contrario **las tarjetas son diferentes entre sí, sus
imágenes se volverán a ocultar**.

##Pasos a seguir

1.  Pintar un tablero con las doce imágenes del array y el `src` apuntando al svg de `public/exercise/universe.svg`.
    Ten en cuenta que como es un juego de parejas, las imágenes y nombres están repetidas en el array.
2.  Añadir a cada una de las imágenes un evento click para comprobar si la jugada realizada por el usuario es correcta.
    Para ello, tendremos que guardar cada dos click en tarjetas que haga el usuario y comparar uno con otro siguiendo
    las siguientes condiciones:
    1. Si el usuario hace click en la misma tarjeta dos veces, la jugada no es valida.
    2. Si el usuario hace click en una tarjeta previamente validada, la jugada no es valida.
    3. Si el usuario hace click en dos tarjetas con el nombre diferente, la jugada no es valida.
    4. Si ninguna de estas condiciones se cumple y, el usuario hace click en dos tarjetas con diferentes nombres. la
       jugada será validada y tendremos que almacenar las tarjetas para posteriores comprobaciones. Además, el `src ` de la imagen debería de cambiar a `public/exercise-1/tick.svg`.
3.  Por cada una de las jugadas deberemos validar el score y sumar 1 por cada jugada validada correctamente al span
    de `score`. Si el
    usuario ha resuelto el juego completo, muestralé un mensaje de felicitaciones.
4.  Por último, para medir la calidad del juego, podríamos crear un contador de intentos e introducir el numero de
    intentos que el usuario ha llevado a cabo en el span de `attempts`. Realmente este punto es bastante fácil, suma
    simplemente uno por cada vez que hagas una comprobación de jugada.

Si has cumplido todas las condiciones...Enhorabuena! tienes un juego de memoría bastante resultón! Además si te
interesa subir la dificultad no tienes más que hacer el array más grande y meter más imagenes...¿te atreves? :D
*/

let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
];

let grid = document.querySelector('[data-function="grid"]');
let firstCard = null;
let secondCard = null;
let score = 0;
let attempts = 0;

function createCard(cardData) {
  const card = document.createElement('div');
  card.textContent = '';
  card.classList.add('card');
  grid.appendChild(card);

  card.addEventListener('click', function () {
      if (!card.classList.contains('disabled')) {
          showImage(cardData, card);
          checkWinner(cardData, card);
      }
  });
}

for (let i = 0; i < cardArray.length; i++) {
  createCard(cardArray[i]);
}

function showImage(arrayCards, itemCard) {
  const image = document.createElement('img');
  image.src = arrayCards.img;
  itemCard.innerHTML = ' ';
  itemCard.appendChild(image);
  itemCard.classList.add('disabled');
}

function checkWinner(arrayCards, itemCard) {
  if (firstCard === null) {
      firstCard = arrayCards.name;
      firstCardElement = itemCard;
  } else if (secondCard === null) {
      secondCard = arrayCards.name;
      secondCardElement = itemCard;
      attempts++;
      document.querySelector('[data-function="attempts"]').textContent = attempts;

      if (firstCard === secondCard) {
          setTimeout(() => {
              const imageOne = document.createElement('img');
              imageOne.src = 'public/exercise-1/tick.svg';
              const imageTwo = document.createElement('img');
              imageTwo.src = 'public/exercise-1/tick.svg';
              firstCardElement.innerHTML = ' ';
              firstCardElement.appendChild(imageOne);
              secondCardElement.innerHTML = ' ';
              secondCardElement.appendChild(imageTwo);
              document.querySelector('[data-function="score"]').textContent = score;
          }, 500);
          score++;
      } else if (firstCard !== secondCard) {
          setTimeout(() => {
              firstCardElement.textContent = '';
              secondCardElement.textContent = '';
              enableCards();
          }, 500);

      }
      firstCard = null;
      secondCard = null;
  }
  theEnd();
}

function theEnd() {
  console.log(score);
  if (score === 6) {
    setTimeout(() => {
      let containerWinner = document.createElement('div');
      containerWinner.textContent = '¡HAS GANADO!';
      containerWinner.classList.add('container-winner');
      document.body.appendChild(containerWinner);
    }, 1000)
  }
}

function enableCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('disabled'));
}

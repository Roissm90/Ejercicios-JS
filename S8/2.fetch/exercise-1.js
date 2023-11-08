/*
Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' 
para hacer un .fetch() y recibir los datos que devuelve. 
Imprimelo mediante un console.log(). 
Para ello, es necesario que crees un .html y un .js.
*/

const apiUrl = 'https://api.agify.io?name=michael';

fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message);
  });
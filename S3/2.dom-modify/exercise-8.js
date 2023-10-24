let newParagraph = document.createElement('p');
newParagraph.textContent = 'Voy en medio!';

let divReference = document.body.querySelector('div:nth-child(2)')
document.body.insertBefore(newParagraph, divReference);

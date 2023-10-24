let selectedDiv = document.querySelectorAll('.fn-insert-here');


for (let div of selectedDiv) {
    let newP = document.createElement('p');
    newP.textContent = 'Voy dentro!';
    div.appendChild(newP);
}
let newDiv = document.createElement('div'); 
for (i = 0; i < 6; i++) {
    let contentDiv = document.createElement('p');
    contentDiv.textContent = 'texto' + (i +1);
    newDiv.appendChild(contentDiv);
}
document.body.appendChild(newDiv);
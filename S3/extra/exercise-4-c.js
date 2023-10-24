const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let country of countries) {
    let containerDiv = document.createElement('div');

    for (let property in country) {
        if (property === 'title') {
            let title = document.createElement('h4');
            title.textContent = country[property];
            containerDiv.appendChild(title);
        } else if (property === 'imgUrl') {
            let img = document.createElement('img');
            img.src = country[property];
            containerDiv.appendChild(img);
        }
    }

    let buttonToRemove = document.createElement('button');
        buttonToRemove.textContent = 'Bórrame';
        containerDiv.appendChild(buttonToRemove);
        buttonToRemove.addEventListener('click', function() {
            containerDiv.remove();
        })

    document.body.appendChild(containerDiv);

}


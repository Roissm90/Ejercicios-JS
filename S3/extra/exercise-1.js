let countriesList = document.createElement('ul');
document.body.appendChild(countriesList);

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
for (let country of countries) {
    let countriesListItem = document.createElement('li');
    countriesListItem.textContent = country;
    countriesList.appendChild(countriesListItem);
}

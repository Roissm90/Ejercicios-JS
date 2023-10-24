let newList = document.createElement('ul');

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (i = 0; i < apps.length; i++) {
    let newItemList = document.createElement('li');
    newItemList.textContent = apps[i];
    newList.appendChild(newItemList);
    
}

document.body.appendChild(newList);
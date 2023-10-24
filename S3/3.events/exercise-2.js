let myInput = document.querySelector('input');

myInput.addEventListener('focus', function() {
    console.log(this.value);
})

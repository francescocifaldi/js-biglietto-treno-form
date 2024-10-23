const form = document.querySelector('form');
const km = document.getElementById('kilometers');
const age = document.getElementById('age');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('inviato')
    console.log(km.value);
    console.log(age.value)
})
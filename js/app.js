const form = document.querySelector('form');
const fullName = document.getElementById('fullName');
const km = document.getElementById('kilometers');
const age = document.getElementById('age');
const result = document.getElementById('result');
const pricePerKm = 0.21;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let inputName = fullName.value;
    let inputKm = km.value;
    let inputAge = age.value
    let today = new Date()
    let stringToday = today.getDate().toString()+(today.getMonth()+1).toString() +today.getFullYear().toString()
    let ticketNumber = stringToday+(Math.floor(Math.random() * 9999) +1).toString()
    let coach = Math.floor(Math.random() * 10) +1

    let price = inputKm*pricePerKm;
    let discount = 0;
    let rate = ''
    
    if(inputAge<18){
        discount = 20;
        rate = 'Young'
    }
    else if(inputAge>65){
        discount=40;
        rate = 'Senior'
    }
    else {
        rate = 'Regular'
    }
    
    price = price - ((price * discount)/100);

    result.innerHTML = `Tariffa: ${rate}`;
    result.innerHTML += `<br>Importo dovuto: €${price.toFixed(2)}`;
    result.innerHTML += `<br>Numero biglietto: ${ticketNumber}`;
    result.innerHTML += `<br>Carrozza: ${coach}`;
    result.innerHTML += `<br>Titolare: ${inputName}`;
})


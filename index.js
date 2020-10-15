const input = document.getElementById('name');
const namePlace = document.getElementById('namePlace');

input.addEventListener('input',updateValue);

function updateValue(e){
    namePlace.textContent=e.target.value;
}

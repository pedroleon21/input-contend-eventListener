const input = document.getElementById('name');
const namePlace = document.getElementById('namePlace');

input.addEventListener('input',updateValue);

function updateValue(e){
    namePlace.textContent=e.target.value;
}


/* const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
} */
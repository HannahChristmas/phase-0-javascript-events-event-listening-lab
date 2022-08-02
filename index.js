
const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
}

const steve = document.getElementById('steve');

function addMoreEventListeners() {
    steve.addEventListener('click', function(event){
        console.log('BOOOOOOOOOO');
    });
}
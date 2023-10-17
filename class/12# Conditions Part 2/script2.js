Age = window.document.querySelector('#AgeNumber')
OkButtonElement = window.document.querySelector('#okbutton')
resultElement = window.document.querySelector('#result')

OkButtonElement.addEventListener('click', clicked);

function clicked() {
    Age = Number(Age.value);
    let message = '';

    switch (true) {
        case Age >= 18 && Age < 65:
            message = 'mandatory <span class="mandatory"> vote</span>!';
            console.log('Age > 18 = Yes');
            break;
        case Age >= 16 && Age < 18:
            message = 'optional <span class="optional">vote</span>!';
            break;
        case Age >= 65:
            message = 'optional <span class="optional">vote</span>!';
            break;
        case Age < 16:
            message = 'not <span class="notvote">vote</span>!';
            break;
        default:
            message = 'Error ☠, Say a number';
            break;
    }

    resultElement.innerHTML = message;
}
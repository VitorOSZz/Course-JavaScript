Age = window.document.querySelector('#AgeNumber')
OkButtonElement = window.document.querySelector('#okbutton')
resultElement = window.document.querySelector('#result')

OkButtonElement.addEventListener('click', clicked)

function clicked () {
    Age = Number(Age.value)
    if (Age >= 18 && Age < 65) {
        resultElement.innerHTML = 'mandatory <span class="mandatory"> vote</span>!'
        console.log('Age > 18 = Yes')
    }
    else if (Age >= 16 && Age < 18) {
        resultElement.innerHTML = 'optional <span class="optional">vote</span>!'
    }
    else if (Age >= 65) {
        resultElement.innerHTML = 'optional <span class="optional">vote</span>!'
    }
    else if (Age < 16) {
        resultElement.innerHTML = 'not <span class="notvote">vote</span!'
    }

    else {
        resultElement.innerHTML = 'Error ☠, Say a number'
    }

    console.log('function clicked actived')
}
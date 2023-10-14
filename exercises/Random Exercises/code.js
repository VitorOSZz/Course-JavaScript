P = Number(0)
I = Number(0)
function PorI () {
    Random_Number = Math.floor(Math.random() * 2);
    n1 = Number(Random_Number)
    if (n1 == 1) {
        I += 1
        console.log(`I = ${I}`)
        console.log (n1)
        console.log('---')
    }
    if (n1 !== 1) {
        P += 1
        console.log (`P = ${P}`)
        console.log (n1)
        console.log ('---')
    }
}
PorI()
PorI()
PorI()
paragraphElement = window.document.querySelector('p#PorI')
paragraphElement.innerHTML = `Result : <br> even  : ${P} <br> odd : ${I}`

if (P > I) {
    resultElement = window.document.querySelector('#result')
    resultElement.innerHTML = 'So result is : <strong> even </strong>'
    window.document.body.style.backgroundColor = 'lightgray'
}
else {
    resultElement = window.document.querySelector('#result')
    resultElement.innerHTML = 'So result is : <strong> odd </strong>'
    window.document.body.style.backgroundColor = 'gray'
}
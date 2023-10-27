/*
        var n1 = window.prompt('Say a number') // Here script ask a number
        var n1 = Number(n1) // Here script transform number into Number( String > Number )

        var n2 = window.prompt('Say another number') // Here is the same
        var n2 = Number(n2)

        var n3 = n1 + n2 
        window.alert(`Your first number plus your second number is ${n3}`) // if in () have '' or "" dont is possible use ${var}
*/
var name = window.prompt('Say your name') // Here script ask your name
var number_of_name = name.length
var nameUpper = name.toUpperCase();
var nameLower = name.toLowerCase();
document.write(' Você tem que voltar na sexta aula no tempo 34 <br>')
document.write(`Your name is ${name} and its have ${number_of_name} letters, in uppercase is ${nameUpper} and in lowercase is ${nameLower}`)
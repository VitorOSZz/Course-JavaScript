Yes_or_No = false
number1 = window.prompt('Say a number')
number1 = Number(number1)
if (number1 > 2) {
    Yes_or_No = true
    document.write(`<p>${number1} > 2 = ${Yes_or_No}}</p>`)
}
if (number1 < 2) {
    Yes_or_No = false
    document.write(`<p>${number1} > 2 = ${Yes_or_No}</p>`)
}

document.write('<hr>')

if (number1 == 2) {
    Yes_or_No = true
    document.write(`<p>${number1} == 2 ${Yes_or_No}</p>`)
}
if (number1 !== 2) {
    Yes_or_No = true
    document.write(`<p>${number1} !== 2 = ${Yes_or_No}`)
}

document.write('<hr>')

if (number1 === 2) {
    Yes_or_No = true
    document.write(`<p> ${number1} === 2 = ${Yes_or_No}`)
}
else {
    Yes_or_No = false
    document.write(`<p> ${number1} === 2 = ${Yes_or_No}`)
}

/*if (!(number1 === 2)) { /* JS dont have !===
    Yes_or_No = true
    document.write(`<p> ${number1} !=== 2 = ${Yes_or_No }</p>`)
}*/

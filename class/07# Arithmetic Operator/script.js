var number1 = window.prompt('Say a number')
        var number1 = Number(number1)

        /* For easy code I do this, if dont have this I write many times same code*/
        function next_line() {
            document.write("<br>");
        }
        /* Arithmetic Operators */
        document.write(`${number1} + 2 = ${number1 + 2}<br>`)
        document.write(`${number1} - 2 = ${number1 - 2}<br>`)
        document.write(`${number1} * 2 = ${number1 * 2}<br>`)
        document.write(`${number1} / 2 = ${number1 / 2}<br>`)
        document.write(`${number1} % 2 = ${number1 % 2}<br>`)
        document.write(`${number1} ** 2 = ${number1 ** 2}<br>`)
        number2= number1
        document.write(`${number1} ++ = ${++number2}<br>`)
        number2= number1
        document.write(`${number1} -- = ${--number2}<br>`)
        /* Now with money */
        document.write('<br> Now with money <br>')
        number1Money = number1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        numberCalculate = number1 * 1.01
        number2Money = numberCalculate.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        document.write(`${number1Money} * 1.01 = ${number2Money}`)
f1 = window.document.querySelector('p#First-Mounth')
        f2 = window.document.querySelector('p#Second-Mounth')
        f3 = window.document.querySelector('p#Third-Mounth')

        HowMuchMoney = window.document.querySelector('#HowManyMoney')

        EnterElement = window.document.querySelector('input#EnterButton')
        EnterElement.addEventListener('click', EnterClicked);

        function EnterClicked () {
            result1 = Number(HowMuchMoney.value) * 1.01 ** 1
            result2 = Number(HowMuchMoney.value) * 1.01 ** 2
            result3 = Number(HowMuchMoney.value) * 1.01 ** 3

            /* Int to String */
            result1 = result1.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            result2 = result2.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            result3 = result3.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            
            /* */
            f1.innerHTML = `<p>${result1}</p>`
            f2.innerHTML = `<p>${result2}</p>`
            f3.innerHTML = `<p>${result3}</p>`

        }
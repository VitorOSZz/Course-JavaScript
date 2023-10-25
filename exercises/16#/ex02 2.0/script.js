OkButton = window.document.querySelector('#OkButton')
ResultElement = window.document.querySelector('#ResultElement')

var select = window.document.createElement('select')
select.setAttribute('id', 'ResultInSelect')
select.setAttribute('size', '10')
var InitialOption = window.document.createElement('option')
InitialOption.text = 'Say a number up here'
ResultElement.appendChild(select)
select.appendChild(InitialOption)


ResultInSelect = window.document.querySelector('#ResultInSelect')
result = ''

function Calculate(){
    ResultInSelect.item = ''
    NumberForMultiplication = window.document.querySelector('#Number_For_Multiplication')
    if (Number_For_Multiplication.value == '') {
        window.alert('Say a number')
        Calculate.stop()
    }
    else {
        NumberForMultiplication = Number(NumberForMultiplication.value)
    }


    console.log(NumberForMultiplication)
    
    ResultInSelect.innerHTML = ''

    /*for(HowManyCalculate =0; HowManyCalculate <=10; HowManyCalculate++) {

        var optionForSelect = window.document.createElement('option')
        optionForSelect.text = `${NumberForMultiplication}x ${HowManyCalculate}: ${NumberForMultiplication * HowManyCalculate}`
        ResultInSelect.appendChild(optionForSelect)
    }*/
    HowManyCalculate =0
    /*while (HowManyCalculate <= 10) {
        HowManyCalculate++
        var optionForSelect = window.document.createElement('option')
        optionForSelect.text = `${NumberForMultiplication}x ${HowManyCalculate}: ${NumberForMultiplication * HowManyCalculate}`
        ResultInSelect.appendChild(optionForSelect)
    }*/
    do {
        HowManyCalculate++
        var optionForSelect = window.document.createElement('option')
        optionForSelect.text = `${NumberForMultiplication}x ${HowManyCalculate}: ${NumberForMultiplication * HowManyCalculate}`
        ResultInSelect.appendChild(optionForSelect)
    } while (HowManyCalculate <= 10)
}
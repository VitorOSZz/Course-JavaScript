OkButton = window.document.querySelector('#OkButton')
resultElement = window.document.querySelector('#resultElement')
ResultInSelect = window.document.querySelector('#ResultInSelect')

function Calculate(){
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

    for(HowManyCalculate =0; HowManyCalculate <=10; HowManyCalculate++) {

        var optionForSelect = window.document.createElement('option')
        optionForSelect.text = `${NumberForMultiplication}x ${HowManyCalculate}: ${NumberForMultiplication * HowManyCalculate}`
        ResultInSelect.appendChild(optionForSelect)
    }
}
var Counted = 1
var ResultElement = window.document.querySelector('#Result')

var Result2Elemnet = window.document.createElement('p')
function Count () {
    // Get all values
    var StartNumber = window.document.querySelector('#StartNumber')
    var StartNumber = Number(StartNumber.value)
    // 
    var EndNumber = window.document.querySelector('#EndNumber')
    var EndNumber = Number(EndNumber.value)
    //
    var JumpsNumber = window.document.querySelector('#JumpsNumber')
    var JumpsNumber = Number(JumpsNumber.value)
    //
    console.log(StartNumber, EndNumber, JumpsNumber)
    
    // End- Start = X
    // X / JumpsNumber

    End_Minus_Start = EndNumber - StartNumber
    HowMany_Counts = End_Minus_Start / JumpsNumber
    RealNumber = StartNumber

    /*while (Counted <= HowMany_Counts) {
        Counted+++
        console.log(`Real Number: ${RealNumber = RealNumber+JumpsNumber}`)
    }*/

    var resultString = ""

    for(Counted= 0; Counted <= HowMany_Counts; Counted++) {
        console.log (RealNumber)
        resultString += RealNumber + " "
        RealNumber = RealNumber+JumpsNumber

        if (RealNumber > EndNumber) {
            RealNumber = RealNumber - JumpsNumber
            console.log (`Real Real Number: ${RealNumber}`)
        }
    }
    ResultElement.innerHTML = resultString

}

var ResultElement = window.document.querySelector('#Result');
var Result2Element = window.document.querySelector('#Result2');
var Counted = 0

function Count() {
    // Get all values
    var StartNumber = window.document.querySelector('#StartNumber');
    StartNumber = Number(StartNumber.value);
    
    var EndNumber = window.document.querySelector('#EndNumber');
    EndNumber = Number(EndNumber.value);
    
    var JumpsNumber = window.document.querySelector('#JumpsNumber');

    // End - Start = X
    // X / JumpsNumber
    if (JumpsNumber.value !== '' && JumpsNumber.value !== '0') {
        JumpsNumber = Number(JumpsNumber.value);

        console.log(StartNumber, EndNumber, JumpsNumber);

        var End_Minus_Start = EndNumber - StartNumber;
        var HowMany_Counts = End_Minus_Start / JumpsNumber;
        var RealNumber = StartNumber;
    } else {
        console.log('Error')
        ResultElement.innerHTML = 'Error, say a Jump Number!'
        Count.stop()
    }

    /*while (Counted <= HowMany_Counts) {
        Counted++;
        console.log(`Real Number: ${RealNumber = RealNumber + JumpsNumber}`);
    }*/

    var resultString = "";

    if (StartNumber < EndNumber) {
        for (Counted = 0; Counted <= HowMany_Counts; Counted++) {
            console.log(RealNumber);
            resultString += RealNumber + " 👉 ";
            RealNumber = RealNumber + JumpsNumber;

            if (RealNumber > EndNumber) {
                RealNumber = RealNumber - JumpsNumber;
                console.log(`Real Real Number: ${RealNumber}`);
            }
        }
    } else if (StartNumber > EndNumber) {

        console.log('Start > End')

        var End_Minus_Start = StartNumber - EndNumber;
        var HowMany_Counts = End_Minus_Start / JumpsNumber;
        var RealNumber = StartNumber;

        for (Counted = 0; Counted <= HowMany_Counts; Counted++) {
            console.log(RealNumber);
            resultString += RealNumber + " 👉 ";
            RealNumber = RealNumber - JumpsNumber;
        }
    }
    if ( StartNumber == EndNumber) {
        ResultElement.innerHTML = ' Error please dont say the same number';
    } else if (StartNumber !== EndNumber ) {
        ResultElement.innerHTML = resultString + "🏴";
    }

}

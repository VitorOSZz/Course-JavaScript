var result = window.document.querySelector('#result')
var ResultSelect = window.document.querySelector('#ResultSelect')
var Number1_100 = window.document.querySelector('#Number1_100')

AllNumbers = []

function addNumber() {
    RealNumber = Number(Number1_100.value)

    if (RealNumber > 100 || RealNumber <= 0) {
        window.alert('Number Error!')
        addNumber.stop()
    } else if (AllNumbers.includes(RealNumber) == true) {
        window.alert('Number Error, Number in list now.')
        addNumber.stop()
    }    
    // Remove the option default and Print in the *HTML*
    if (ResultSelect.options[0].text === "say a number up here") {
        ResultSelect.remove(0);
    }
    printNumber(RealNumber)
    // Add numbers to array
    AllNumbers.push(RealNumber)
    console.log(AllNumbers)
}

function OkChecked() {
    // Reset ALL
    result.innerHTML = ''
    // Get all datas
    AllNumbersOrganized = AllNumbers.slice()
    // How Many Numbers
    HowManyNumbers = AllNumbersOrganized.length
    // Greatest & Smallest
    AllNumbersOrganized.sort((a, b) => b - a)
    GreatestNumber = AllNumbersOrganized[0]
    // Media of all Number
    var Media_Number = 0
    for(HowManyCounted=0; HowManyCounted !== HowManyNumbers; HowManyCounted++) {
        NumberNow = AllNumbersOrganized[HowManyCounted]
        Media_Number += NumberNow
        console.log (`Media Number => ${Media_Number}`)
    }
    Media_Number = Media_Number / Number(AllNumbersOrganized.length)
    // Console.log()
    console.log(`How Many Numbers in list => ${HowManyNumbers}`)    
    console.log(`Greatest Number => ${GreatestNumber}`)
    console.log(`Smallest Number => ${AllNumbersOrganized[(AllNumbersOrganized.length)-1]}`)
    console.log(`All Numbers Media is => ${Media_Number}`)
    // print datas
    result.innerHTML = `
    How Many Numbers in list => ${HowManyNumbers.toFixed(1)} <br>
    Greatest Number => ${GreatestNumber.toFixed(2)} <br>
    Smallest Number => ${AllNumbersOrganized[(AllNumbersOrganized.length)-1].toFixed(2)} <br>
    All Numbers Media is => ${Media_Number.toFixed(2)} <br>
    `
}

function printNumber(n1=0) {
    var option = window.document.createElement('option')
    option.text = n1
    ResultSelect.appendChild(option)
    console.log(`option: ${option}`)
}
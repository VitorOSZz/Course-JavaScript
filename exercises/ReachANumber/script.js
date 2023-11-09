console.log('JavaScript Check')



function OkButton() {
    console.log('Ok Button Check')

    var How_Many_Have_Number = Number(window.document.querySelector('#How_Many_Have_Number').value)
    var Percent_Number = Number(window.document.querySelector('#Percent_Number').value)
    var Real_Percent_Number = (Percent_Number / 100)+1
    var How_Many_Months = Number(window.document.querySelector('#How_Many_Months').value)
    var Add_Number = Number(window.document.querySelector('#Add_Number').value)
    var FinalNumber = Number(window.document.querySelector('#FinalNumber').value)
    
    console.log(`Money: ${How_Many_Have_Number}`)
    console.log(`Percent: ${Percent_Number}`)
    console.log(`Month: ${How_Many_Months}`)
    Money = How_Many_Have_Number
    /*console.log(`Month: ${How_Many_Months} Money: ${Money = (Money*1.01)+200}`)*/

    var TableInfo = window.document.querySelector('#TableInfo')
    var Tbody = window.document.querySelector('#TableInfo_Tbody')
    var result_div = window.document.querySelector('#result_div')
    Tbody.innerHTML = ''
    for(Month = 1; Month < How_Many_Months+1; Month++) {
        console.log('===')
        console.log(`Month: ${Month}`)
        console.log(`Money: ${Money = ((Money*Real_Percent_Number)+Add_Number).toFixed(2)}`)
        if (((FinalNumber-Money)/Add_Number) < Month) {
            IsPossible = 'SIM'
        }
        else {
            IsPossible = 'Não'
        }
        Tbody.innerHTML += `
        <tr>
            <td>${Month}</td>
            <td>${Percent_Number}%</td>
            <td>R$ ${Money}</td>
            <td>Quanto falta: ${QtFatla = ((FinalNumber-Money)/Add_Number).toFixed(1)}
            <td>Já dá? ${IsPossible} </td>
        </tr>
        `
    }
    result_div.innerHTML = `
    <p>LOL</p>
    `
    Tbody.innerHTML += `
    <tr>
        <td>LOl </td>
    </tr>
    `
}
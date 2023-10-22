// Variables for DOM elements
var img = window.document.createElement('img')
var YearBornElement = window.document.querySelector('#YearBorn')
var CheckButtonElement = window.document.querySelector('#CheckButton')
var ResultElement = window.document.querySelector('#Result')
var Result_imageElement = window.document.querySelector('#Result-Image')
var SexButtonElement = ''

// Add an event listener to the "Check" button
CheckButtonElement.addEventListener('click', clicked)

// Get the current year
var Date = new Date()
var NowYear = Date.getFullYear()

// Function to check the selected sex
function SexChecker() {
    var Sex = window.document.getElementsByName('Sex')
    if (Sex[0].checked) {
        SexButtonElement = 'Male'
        console.log('Sex: Male')
    } else if (Sex[1].checked) {
        SexButtonElement = 'Female'
        console.log('Sex: Female')
    } else {
        ResultElement.innerHTML = 'Error in Sex'
        console.log('Sex: Error')
    }
}

// Function to handle button click
function clicked() {

    // Clear previous results
    SexButtonElement = ''
    ResultElement.innerHTML = ''
    Result_imageElement.innerHTML = ''

    // Check the selected sex
    SexChecker()

    // Get the year of birth and calculate the age
    var YearBorn = Number(YearBornElement.value)
    var Age = NowYear - YearBorn
    console.log(Age)

    // Validate the year of birth
    if (YearBorn > NowYear || YearBorn == 0) {
        img.setAttribute('src', 'https://cdn.oantagonista.com/cdn-cgi/image/fit=contain,width=960,format=auto/uploads/2023/06/Jair-Bolsonaro-29.jun_.2023-scaled.jpg')
        ResultElement.innerHTML = 'Error :/ your Year is incorrect'
    }
    else {
        switch (true) {
            case Age >= 0 && Age < 4:
                if (SexButtonElement == 'Male') {
                    ResultElement.innerHTML = `He has ${Age} years old`
                    img.setAttribute('src', 'photos/baby/baby man.jpg')
                } else if (SexButtonElement == 'Female') {
                    ResultElement.innerHTML = `She has ${Age} years old`
                    img.setAttribute('src', 'photos/baby/Baby girl.jpg')
                }
                break

            case Age >= 4 && Age < 14:
                if (SexButtonElement == 'Male') {
                    ResultElement.innerHTML = `He has ${Age} years old`
                    img.setAttribute('src', 'photos/kid/Kid man.jpg')
                } else if (SexButtonElement == 'Female') {
                    ResultElement.innerHTML = `She has ${Age} years old`
                    img.setAttribute('src', 'photos/kid/Kid Girl.jpeg')
                }
                break

            case Age >= 14 && Age < 20:
                if (SexButtonElement == 'Male') {
                    ResultElement.innerHTML = `He has ${Age} years old`
                    img.setAttribute('src', 'photos/young/Young Man.jpg')
                } else if (SexButtonElement == 'Female') {
                    ResultElement.innerHTML = `She has ${Age} years old`
                    img.setAttribute('src', 'photos/young/Young Girl.jpg')
                }
                break

            case Age >= 20 && Age < 60:
                if (SexButtonElement == 'Male') {
                    ResultElement.innerHTML = `He has ${Age} years old`
                    img.setAttribute('src', 'photos/adult/Adult Man.jpg')
                } else if (SexButtonElement == 'Female') {
                    ResultElement.innerHTML = `She has ${Age} years old`
                    img.setAttribute('src', 'photos/adult/Adult Girl.jpeg')
                }
                break

            case Age >= 60:
                if (SexButtonElement == 'Male') {
                    ResultElement.innerHTML = `He has ${Age} years old`
                    img.setAttribute('src', 'photos/old/Old Man.jpg')
                } else if (SexButtonElement == 'Female') {
                    ResultElement.innerHTML = `She has ${Age} years old`
                    img.setAttribute('src', 'photos/old/Old Woman.jpg')
                }
                break

            default:
                SexButtonElement = ''
                img.setAttribute('src', 'https://cdn.oantagonista.com/cdn-cgi/image/fit=contain,width=960,format=auto/uploads/2023/06/Jair-Bolsonaro-29.jun_.2023-scaled.jpg')
                ResultElement.innerHTML = 'Error :/'
                break
        }
    }
    Result_imageElement.appendChild(img)

    console.log(NowYear)
}

YearBornElement = window.document.querySelector('#YearBorn')
SexButtonMaleElement = window.document.querySelector('#SexButtonMale')
SexButtonFemaleElement = window.document.querySelector('#SexButtonFemale')
CheckButtonElement = window.document.querySelector('#CheckButton')
ResultElement = window.document.querySelector('#Result')
Result_imageElement = window.document.querySelector('#Result-Image')

CheckButtonElement.addEventListener('click', clicked)
SexButtonMaleElement.addEventListener('click', genderMale)
SexButtonFemaleElement.addEventListener('click', genderFemale)

Data = new Date()
NowYear = Data.getFullYear()

function genderMale () {
    SexButtonElement = 'Male'
    console.log('Male')
}
function genderFemale () {
    SexButtonElement = 'Female'
    console.log('Female')
}
function clicked () {
    YearBornElement = Number(YearBornElement.value)
    Age = NowYear - YearBornElement
    console.log(Age)


    switch (true){

        case Age >=0 && Age < 4:
            if (SexButtonElement == 'Male') {
                ResultElement.innerHTML = `He have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/baby/Baby Man.jpg" alt="">`
            }
            if (SexButtonElement == 'Female') {
                ResultElement.innerHTML = `She have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/baby/Baby Girl.jpg" alt="">`
            }
        break

        case Age >=4 && Age < 14:
            if (SexButtonElement == 'Male') {
                ResultElement.innerHTML = `He have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/kid/Kid man.jpg" alt="">`
            }
            if (SexButtonElement == 'Female') {
                ResultElement.innerHTML = `She have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/kid/Kid Girl.jpeg" alt="">`
            }
        break

        case Age >=14 && Age < 20:
            if (SexButtonElement == 'Male') {
                ResultElement.innerHTML = `He have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/young/Young Man.jpg" alt="">`
            }
            if (SexButtonElement == 'Female') {
                ResultElement.innerHTML = `She have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/young/Young Girl.jpg" alt="">`
            }
        break

        case Age >=20 && Age < 60:
            if (SexButtonElement == 'Male') {
                ResultElement.innerHTML = `He have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/adult/Adult Man.jpg" alt="">`
            }
            if (SexButtonElement == 'Female') {
                ResultElement.innerHTML = `She have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/adult/Adult Girl.jpeg" alt="">`
            }
        break

        case Age >=60:
            if (SexButtonElement == 'Male') {
                ResultElement.innerHTML = `He have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/old/Old Man.jpg" alt="">`
            }
            if (SexButtonElement == 'Female') {
                ResultElement.innerHTML = `She have ${Age} years old`
                Result_imageElement.innerHTML = `<img src="photos/old/Old Woman.jpg" alt="">`
            }
        break

        default:
            ResultElement.innerHTML = 'Error :/'
            break
    }


    console.log(NowYear)
}
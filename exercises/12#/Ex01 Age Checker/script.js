// Variables for DOM elements
var YearBornElement = window.document.querySelector('#YearBorn');
var CheckButtonElement = window.document.querySelector('#CheckButton');
var ResultElement = window.document.querySelector('#Result');
var ResultImageElement = window.document.querySelector('#Result-Image');
var SexButtonElement = '';

// Add an event listener to the "Check" button
CheckButtonElement.addEventListener('click', clicked);

// Get the current year
var Date = new Date();
var NowYear = Date.getFullYear();

// Function to check the selected sex
function SexChecker() {
    var Sex = window.document.getElementsByName('Sex');
    if (Sex[0].checked) {
        SexButtonElement = 'Male';
        console.log('Sex: Male');
    } else if (Sex[1].checked) {
        SexButtonElement = 'Female';
        console.log('Sex: Female');
    } else {
        ResultElement.innerHTML = 'Error in Sex';
        console.log('Sex: Error');
    }
}

// Function to handle button click
function clicked() {
    // Clear previous results
    SexButtonElement = '';
    ResultElement.innerHTML = '';
    ResultImageElement.innerHTML = '';

    // Check the selected sex
    SexChecker();

    // Get the year of birth and calculate the age
    var YearBorn = Number(YearBornElement.value);
    var Age = NowYear - YearBorn;
    console.log(Age);

    // Validate the year of birth
    if (YearBorn > NowYear || YearBorn === 0) {
        ResultElement.innerHTML = 'Error :/ your Year is incorrect';
    } else {
        // Based on the age, display appropriate information and images
        switch (true) {
            case Age >= 0 && Age < 4:
                var ageLabel = SexButtonElement === 'Male' ? 'He' : 'She';
                ResultElement.innerHTML = ageLabel + ' has ' + Age + ' years old';
                var babyImage = SexButtonElement === 'Male' ? 'Baby Man.jpg' : 'Baby Girl.jpg';
                ResultImageElement.innerHTML = '<img src="photos/baby/' + babyImage + '" alt="">';
                break;

            case Age >= 4 && Age < 14:
                var kidLabel = SexButtonElement === 'Male' ? 'He' : 'She';
                ResultElement.innerHTML = kidLabel + ' has ' + Age + ' years old';
                var kidImage = SexButtonElement === 'Male' ? 'Kid Man.jpg' : 'Kid Girl.jpeg';
                ResultImageElement.innerHTML = '<img src="photos/kid/' + kidImage + '" alt="">';
                break;

            case Age >= 14 && Age < 20:
                var youngLabel = SexButtonElement === 'Male' ? 'He' : 'She';
                ResultElement.innerHTML = youngLabel + ' has ' + Age + ' years old';
                var youngImage = SexButtonElement === 'Male' ? 'Young Man.jpg' : 'Young Girl.jpg';
                ResultImageElement.innerHTML = '<img src="photos/young/' + youngImage + '" alt="">';
                break;

            case Age >= 20 && Age < 60:
                var adultLabel = SexButtonElement === 'Male' ? 'He' : 'She';
                ResultElement.innerHTML = adultLabel + ' has ' + Age + ' years old';
                var adultImage = SexButtonElement === 'Male' ? 'Adult Man.jpg' : 'Adult Girl.jpeg';
                ResultImageElement.innerHTML = '<img src="photos/adult/' + adultImage + '" alt="">';
                break;

            case Age >= 60:
                var oldLabel = SexButtonElement === 'Male' ? 'He' : 'She';
                ResultElement.innerHTML = oldLabel + ' has ' + Age + ' years old';
                var oldImage = SexButtonElement === 'Male' ? 'Old Man.jpg' : 'Old Woman.jpg';
                ResultImageElement.innerHTML = '<img src="photos/old/' + oldImage + '" alt="">';
                break;

            default:
                ResultElement.innerHTML = 'Error :/';
                break;
        }
    }

    console.log(NowYear);
}

var ButtonOK = window.document.querySelector('#ButtonOK');
ButtonOK.addEventListener('click', clicked);

var f1 = window.document.querySelector('#FirstNumber');
var f2 = window.document.querySelector('#SecondNumber');
var f3 = window.document.querySelector('#ThirdNumber');
var Result1 = window.document.querySelector('#Result1');
var Result2 = window.document.querySelector('#Result2');
var Result3 = window.document.querySelector('#Result3');

function clicked() {
    var f1Value = parseFloat(f1.value);
    var f2Value = parseFloat(f2.value);
    var f3Value = parseFloat(f3.value);

    if (!isNaN(f1Value) && !isNaN(f2Value) && !isNaN(f3Value)) {
        if (f1Value > f2Value && f1Value > f3Value) {
            Result1.innerHTML = `Result: <br> Greatest number is first number: ${f1Value}`;
            if (f2Value > f3Value) {
                Result2.innerHTML = `<p> Second Greatest number is second number: ${f2Value}</p>`;
                Result3.innerHTML = `<p> Third Greatest number is third number: ${f3Value}</p>`;
            } else {
                Result2.innerHTML = `<p> Second Greatest number is third number: ${f3Value}</p>`;
                Result3.innerHTML = `<p> Third Greatest number is second number: ${f2Value}</p>`;
            }
            console.log('f1 > f2 && f1 > f3');
        } else if (f2Value > f1Value && f2Value > f3Value) {
            Result1.innerHTML = `Result: <br> Greatest number is second number: ${f2Value}`;
            if (f1Value > f3Value) {
                Result2.innerHTML = `<p> Second Greatest number is first number: ${f1Value}</p>`;
                Result3.innerHTML = `<p> Third Greatest number is third number: ${f3Value}</p>`;
            } else {
                Result2.innerHTML = `<p> Second Greatest number is third number: ${f3Value}</p>`;
                Result3.innerHTML = `<p> Third Greatest number is first number: ${f1Value}</p>`;
            }
            console.log('f2 > f1 && f2 > f3');
        } else if (f3Value > f1Value && f3Value > f2Value) {
            Result1.innerHTML = `Result: <br> Greatest number is third number: ${f3Value}`;
            if (f1Value > f2Value) {
                Result2.innerHTML = `<p> Second Greatest number is first number: ${f1Value}</p>`;
                Result3.innerHTML = `<p> Third Greatest number is second number: ${f2Value}</p>`;
            } else {
                Result2.innerHTML = `<p> Second Greatest number is second number: ${f2Value}</p>`;
                Result3.innerHTML = `<p> Third Greatest number is third number: ${f1Value}</p>`;
            }
            console.log('f3 > f1 && f3 > f2');
        } else {
            Result1.innerHTML = `All numbers are equal: ${f1Value}`;
            Result2.innerHTML = '';
            Result3.innerHTML = '';
            console.log('All numbers are equal');
        }
        console.log('Ok Button [✅]');
    } else {
        Result1.innerHTML = `Error ☠ - Please enter valid numbers`;
    }
}
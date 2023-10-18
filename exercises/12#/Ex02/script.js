ResultElement = window.document.querySelector('#Result')
ResultImageElement = window.document.querySelector('#Result-Image')

var ResultElement = window.document.querySelector('#Result');
var ResultImageElement = window.document.querySelector('#Result-Image');

var Data = new Date();
var Hours = Data.getHours();
console.log(Hours);

Hours = 12

switch (true) {
    case Hours <= 6:
        ResultElement.innerHTML = 'Early morning';
        ResultImageElement.innerHTML = `<img src="photos/Madrugada.jpg" alt="" id="photo">`
        console.log('Early morning');
        break;
    case Hours > 6 && Hours < 12:
        ResultElement.innerHTML = 'Morning';
        ResultImageElement.innerHTML = `<img src="photos/Morning.jpg" alt="" id="photo">`
        console.log('Morning');
        break;
    case Hours === 12:
        ResultElement.innerHTML = 'ESCANOR';
        ResultImageElement.innerHTML = `<img src="https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2023/04/escanor.webp" alt="" id="photo">`
        console.log('ESCANOR');
        break;
    case Hours > 12 && Hours < 18:
        ResultElement.innerHTML = 'Afternoon';
        ResultImageElement.innerHTML = `<img src="photos/Afternoon.jpg" alt="" id="photo">`
        console.log('Afternoon');
        break;
    case Hours >= 18 && Hours <= 24:
        ResultElement.innerHTML = 'Night';
        ResultImageElement.innerHTML = `<img src="photos/Night.jpg" alt="" id="photo">`
        console.log('Night');
        break;
    default:
        console.log('Error')
        break;
}
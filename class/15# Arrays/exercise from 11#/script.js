result = window.document.querySelector('#result')

function OkChecked() {
    result.innerHTML = ''
    Number1 = Number(window.document.querySelector('#Number1').value)
    Number2 = Number(window.document.querySelector('#Number2').value)
    Number3 = Number(window.document.querySelector('#Number3').value)

    array = [Number1, Number2, Number3]
    array2 = array.slice() // Faz uma cópia do array original
    array.sort((a, b) => b - a); // Compara A e B, se b - a der negativo ele organiza decrescente se fosse a - b ele iria fazer uma lista crescente

    result.innerHTML += `The 1º Biggest number is ${array[0]} and position is: ${array2.indexOf(array[0]) + 1} <br>`;
    result.innerHTML += `The 2º Biggest number is ${array[1]} and position is: ${array2.indexOf(array[1]) + 1} <br>`;
    result.innerHTML += `The 3º Biggest number is ${array[2]} and position is: ${array2.indexOf(array[2]) + 1} <br>`;

    console.log(array);
}

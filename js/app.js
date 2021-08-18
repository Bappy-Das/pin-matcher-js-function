// function getPin() {
//     const generate = Math.round(Math.random() * 10000);
//     const pinString = generate + '';
//     if (pinString.length == 4) {
//         return pinString;
//     }
//     else {
//         return getPin();
//     }
// }

// function generatePin() {
//     const pin = getPin();
//     document.getElementById("pinId").value = pin;
// }

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const number = event.target.innerText;
//     const calc = document.getElementById('typed-numbers');
//     if (isNaN(number)) {
//         if (number == 'C') {
//             calc.value = '';
//         }
//     } else {
//         const previousCalc = calc.value;
//         const newCalc = previousCalc + number;
//         calc.value = newCalc;
//     }

// })


// let a = Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9);
// console.log(a);



const category = 'pen';
const performer = category + '-teller';
console.log(performer);








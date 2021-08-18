function getPin() {
    const generate = Math.round(Math.random() * 10000);
    const pinString = generate + '';
    if (pinString.length == 4) {
        return pinString;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById("pinId").value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    } else {
        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }

})


function checkPin() {
    const generatePin = document.getElementById('pinId').value;
    const currentPin = document.getElementById('typed-numbers').value;
    const errorPin = document.getElementById('error-pin');
    const succesPin = document.getElementById('succes-pin');
    if (generatePin == currentPin) {
        succesPin.style.display = "block";
        errorPin.style.display = 'none';
    }
    else {
        succesPin.style.display = "none";
        errorPin.style.display = 'block';
    }
}










const inputNumber1 = document.querySelector('[name="number1"]');

inputNumber1.addEventListener('change', handleInputNumber1Change);

inputNumber1.classList.remove("input-error");

function handleInputNumber1Change(event) {
    if (isNumeric(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }  
}


const inputNumber2 = document.querySelector('[name="number2"]');

inputNumber2.addEventListener('change', handleInputNumber2Change);

inputNumber2.classList.remove("input-error");

function handleInputNumber2Change(event) {
    if (isNumeric(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }  
}

//https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const btnPlus = document.querySelector('[id="btn-plus"]');
btnPlus.addEventListener('click', btnPlusClick);


function btnPlusClick(event) {
    event.preventDefault();
    const resultBox = parseFloat(inputNumber1.value) + parseFloat(inputNumber2.value);
    document.getElementById('result-box').innerHTML = resultBox;
    
}

const btnTimes = document.querySelector('[id="btn-times"]');
btnTimes.addEventListener('click', btnTimesClick);

function btnTimesClick(event) {
    event.preventDefault();
    const resultBox = parseFloat(inputNumber1.value) * parseFloat(inputNumber2.value);
    document.getElementById('result-box').innerHTML = resultBox;
    
}

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', btnClearClick);

function btnClearClick(event) {
    event.preventDefault();
    inputNumber1.value = ""
    inputNumber1.classList.remove("input-error");
    inputNumber2.value = ""
    inputNumber2.classList.remove("input-error");
    document.getElementById('result-box').innerHTML = 0;
}


const { calculateWeight } = require('./weight-calculator.js');

function getCheckedElement(inpursGroup) {
    for(let i = 0; i < inpursGroup.length; i++) {
        if(inpursGroup[i].checked){ 
            return inpursGroup[i].value;
        }
    }

    return '';
}

function getData() {
    let data = {
        gender: getCheckedElement(document.getElementsByName('gender')),
        activity: getCheckedElement(document.getElementsByName('activity')),
        age: parseInt(document.getElementById('age').value),
        height: parseInt(document.getElementById('height').value),
        weight: parseInt(document.getElementById('weight').value),
    }

    return data
}

// TODO: wrap calculateWeight with try-catch block

function normWeight(data) {
    return calculateWeight(data);
}

function loseWeight(data) {
    return calculateWeight(data) * 0.85;
}

function putWeight(data) {
    return calculateWeight(data) * 1.15;
}

function changeCalculateEnableState() {
    const data = getData();
    if(!isNaN(data.age) && !isNaN(data.height) && !isNaN(data.weight)) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
};

function changeResetEnableState() {
    const data = getData();
    if(!isNaN(data.age) || !isNaN(data.height) || !isNaN(data.weight)) {
        reset.disabled = false;
    } else {
        reset.disabled = true;
    }
};

function resetFields() {
    let result = document.querySelector('.counter__result');
    result.classList.add("counter__result--hidden");

    document.getElementById('gender-male').checked = true;
    document.getElementById('activity-minimal').checked = true;
    let inputsWrapper = document.querySelectorAll('.input__wrapper');
    inputsWrapper
        .forEach(element => {
            const input = element.firstElementChild;
            input.value = "";
            input.dispatchEvent(new Event('input'));
        });
};

let inputs = document.querySelectorAll('.input__wrapper');
inputs.forEach(element => {
    element.firstElementChild.addEventListener('input', (e) => {
        changeCalculateEnableState();
        changeResetEnableState();
    });
});

const submit = document.querySelector('.form__submit-button');
submit.addEventListener('click', e => {
    e.preventDefault();
    let result = document.querySelector('.counter__result');
    result.classList.remove("counter__result--hidden");

    let weight = document.getElementById('calories-norm');
    weight.textContent = normWeight(getData()).toFixed(0);

    let lose = document.getElementById('calories-minimal');
    lose.textContent = Math.round(loseWeight(getData()));

    let put = document.getElementById('calories-maximal');
    put.textContent = putWeight(getData()).toFixed(0);
})

const reset = document.querySelector('.form__reset-button');
reset.addEventListener('click', e => {
    e.preventDefault();

    resetFields();
})
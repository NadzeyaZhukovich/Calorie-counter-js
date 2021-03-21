const { normWeight, loseWeight, putWeight, IllegalArgumentError } = require('./weight-calculator.js');

const submit = document.querySelector('.form__submit-button');
const reset = document.querySelector('.form__reset-button');
const inputs = document.querySelectorAll('.input__wrapper');
const result = document.querySelector('.counter__result');
const errorContainer = document.querySelector('.incorrect__data');

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
};

function changeCalculateEnableState() {
    const data = getData();
    const isDataFilled = !isNaN(data.age) && !isNaN(data.height) && !isNaN(data.weight);
    submit.disabled = !isDataFilled;
};

function changeResetEnableState() {
    const data = getData();
    const isDataFilled = !isNaN(data.age) || !isNaN(data.height) || !isNaN(data.weight);
    reset.disabled = !isDataFilled;
};

function resetFields() {
    result.classList.add("counter__result--hidden");
    errorContainer.classList.add("incorrect__data--hidden");

    document.getElementById('gender-male').checked = true;
    document.getElementById('activity-minimal').checked = true;
    inputs
        .forEach(element => {
            const input = element.firstElementChild;
            input.value = "";
            input.dispatchEvent(new Event('input'));
        });
};


inputs.forEach(element => {
    element.firstElementChild.addEventListener('input', (e) => {
        changeCalculateEnableState();
        changeResetEnableState();
    });
});


submit.addEventListener('click', e => {
    e.preventDefault();
    try {
        const weight = document.getElementById('calories-norm');
        weight.textContent = normWeight(getData());
        
        const lose = document.getElementById('calories-minimal');
        lose.textContent = loseWeight(getData());

        const put = document.getElementById('calories-maximal');
        put.textContent = putWeight(getData());

        result.classList.remove("counter__result--hidden");
        errorContainer.classList.add("incorrect__data--hidden");
    } catch (error) {
        result.classList.add("counter__result--hidden");
        errorContainer.classList.remove("incorrect__data--hidden");
    }
})

reset.addEventListener('click', e => {
    e.preventDefault();

    resetFields();
})
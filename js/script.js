const {calculateWeightForMan, calculateWeightForWomen} = require('./weight-calculator.js');

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

function maintainingWeight(data) {
    if(data.gender === 'male') {
        return calculateWeightForMan(data);
    } else {
        return calculateWeightForWomen(data);
    }
}

// TODO: wrap calculateWeightForMan and calculateWeightForWomen with try-catch block
function activityCoefficient() {
    const data = getData();
    let weight = maintainingWeight(data);

    switch(data.activity) {
        case 'min':
           return weight * 1.2;
        case 'low':
            return weight * 1.375;
        case 'medium':
            return weight * 1.55;
        case 'high': 
            return weight * 1.725;
        case 'max':
            return weight * 1.9;
        default:
            return 'something went wrong';

    }
}

function loseWeight() {
    return activityCoefficient() - activityCoefficient() * 0.15;
}

function putWeight() {
    return activityCoefficient() + activityCoefficient() * 0.15;
}

function changeCalculateEnableState() {
    const data = getData();
    if(!isNaN(data.age) && !isNaN(data.height) && !isNaN(data.weight)) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}

function changeResetEnableState() {
    const data = getData();
    console.log(data);
    if(!isNaN(data.age) || !isNaN(data.height) || !isNaN(data.weight)) {
        reset.disabled = false;
    } else {
        reset.disabled = true;
    }
}



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
            input.dispatchEvent(new Event('change'));
        });
}


let inputs = document.querySelectorAll('.input__wrapper');
inputs.forEach(element => {
    element.firstElementChild.addEventListener('change', (e) => {
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
    weight.textContent = activityCoefficient().toFixed(0);

    let lose = document.getElementById('calories-minimal');
    lose.textContent = loseWeight().toFixed(0);

    let put = document.getElementById('calories-maximal');
    put.textContent = putWeight().toFixed(0);

    console.log('data =>', activityCoefficient());
})

const reset = document.querySelector('.form__reset-button');
reset.addEventListener('click', e => {
    e.preventDefault();

    resetFields();
})
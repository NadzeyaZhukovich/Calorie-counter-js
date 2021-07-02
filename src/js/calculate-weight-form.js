const { InputData } = require('./models/input-data.js');
const { WeightCalculator } = require('./weight-calculator.js');

class CalculateWeightForm {
    constructor() {
        this.submit = document.querySelector('.form__submit-button');
        this.reset = document.querySelector('.form__reset-button');
        this.inputs = document.querySelectorAll('.input__wrapper');
        this.result = document.querySelector('.counter__result');
        this.errorContainer = document.querySelector('.incorrect__data');

        this.registerUiElementEvents()
    }

    registerUiElementEvents() {
        this.submit.addEventListener('click', e => {
            this.onSubmitClick(e);
        });

        this.reset.addEventListener('click', e => {
            this.onResetClick(e);
        })

        this.inputs.forEach(element => {
            element.firstElementChild.addEventListener('input', (e) => {
                this.changeCalculateEnableState();
                this.changeResetEnableState();
            });
        });
    }

    onSubmitClick(e) {
        e.preventDefault();

        try {
            const weight = document.getElementById('calories-norm');
            const lose = document.getElementById('calories-minimal');
            const put = document.getElementById('calories-maximal');

            const weightOutput = new WeightCalculator().calculateWeight(this.getData());
            weight.textContent = weightOutput.normal;
            lose.textContent = weightOutput.lost;
            put.textContent = weightOutput.put;

            this.result.classList.remove("counter__result--hidden");
            this.errorContainer.classList.add("incorrect__data--hidden");
        } catch (error) {
            this.result.classList.add("counter__result--hidden");
            this.errorContainer.classList.remove("incorrect__data--hidden");
        }
    }

    onResetClick(e) {
        e.preventDefault();

        this.result.classList.add("counter__result--hidden");
        this.errorContainer.classList.add("incorrect__data--hidden");

        document.getElementById('gender-male').checked = true;
        document.getElementById('activity-minimal').checked = true;
        this.inputs.forEach(element => {
            const input = element.firstElementChild;
            input.value = "";
            input.dispatchEvent(new Event('input'));
        });
    }

    getCheckedElement(inputsGroup) {
        for(let i = 0; i < inputsGroup.length; i++) {
            if(inputsGroup[i].checked){
                return inputsGroup[i].value;
            }
        }
        return '';
    }

    getData() {
        return new InputData(
            this.getCheckedElement(document.getElementsByName('gender')),
            this.getCheckedElement(document.getElementsByName('activity')),
            parseInt(document.getElementById('age').value),
            parseInt(document.getElementById('height').value),
            parseInt(document.getElementById('weight').value),
        )
    }

    changeCalculateEnableState() {
        const data = this.getData();
        const isDataFilled = !isNaN(data.age) && !isNaN(data.height) && !isNaN(data.weight);
        this.submit.disabled = !isDataFilled;
    };

    changeResetEnableState() {
        const data = this.getData();
        const isDataFilled = !isNaN(data.age) || !isNaN(data.height) || !isNaN(data.weight);
        this.reset.disabled = !isDataFilled;
    };
}

exports.CalculateWeightForm = CalculateWeightForm;

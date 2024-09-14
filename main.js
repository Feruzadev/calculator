const numbers = [...document.querySelectorAll('.btn')];
const displey = document.querySelector('.calc-in');
const signs = [...document.querySelectorAll('.sign')];
const dot = document.querySelector('.dot');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');
const equel = document.querySelector('.equal');

class Calculator {
    displey;
    signView;
    signOperator;
    oprators = ['+', '-', '✕', '÷'];

    setDispley(value) {
        displey.value = displey.value + value;
    }

    get firstValue() {
        return displey.value[0];
    }

    get lastValue() {
        return displey.value[displey.value.length - 1];
    }

    numbers(event) {
        const num = event.target.textContent;
        if (this.lastValue == 0 && displey.value.length == 1) return displey.value = num;

        if (this.lastValue == 0 && this.signView) return displey.value = displey.value.slice(0, -1) + num;

        this.setDispley(num);
    }

    signs(event) {
        const signView = event.target.textContent;
        const signOperator = event.target.dataset.sign;

        if (!displey.value || this.lastValue === "." || this.signOperator) {
            return;
        }

        if (this.oprators.includes(this.lastValue)) return displey.value = displey.value.slice(0, -1) + signView;

        this.setDispley(signView);
        this.signOperator = signOperator;
        this.signView = signView;
    }

    dot() {
        if (!displey.value || this.oprators.includes(this.lastValue)) return displey.value = displey.value + "0.";

        if (this.lastValue == ".") return;

        this.setDispley('.');
    }

    reset() {
        displey.value = '';
    }

    del() {
        let deleted = displey.value.split('');
        let newVal = deleted.slice(0, -1).join("");
        displey.value = newVal;
    }

    equel() {
        if (!this.signView) return;

        let expression = displey.value.replace('✕', '*').replace('÷', '/');
        const [num1, num2] = expression.split(this.signView);
        displey.value = eval(num1 + this.signOperator + num2);
         console.log(displey.value)
        // this.setDisplay()

        this.signView = null;
        this.signOperator = null;
    }
}

const calc = new Calculator();

for (const btn of numbers) {
    btn.addEventListener('click', (event) => {
        return calc.numbers(event);
    });
}

for (const sign of signs) {
    sign.addEventListener('click', (event) => {
        return calc.signs(event);
    });
}

dot.addEventListener('click', () => {
    return calc.dot();
});

reset.addEventListener('click', () => {
    calc.reset();
});

del.addEventListener('click', () => {
    calc.del();
});

equel.addEventListener('click', () => {
    calc.equel();
});

const numbers = [...document.querySelectorAll('.btn')]
const displey = document.querySelector('.calc-in')
const signs =[...document.querySelectorAll('.sign')]
const dot = document.querySelector('.dot')

class Calculator {

    displey

    setDispley (value) {
        displey.value = displey.value + value
    }

    numbers  (event) {
        // console.log(event.target.textContent)

       const num = event.target.textContent
       this.setDispley(num)
    }

    signs (event) {
        // console.log(event.target.textContent)

        const signView = event.target.textContent
        this.setDispley(signView)
    }

    dot () {
        this.setDispley('.')
    }

    del () {

    }

    clear () {

    }

    equel () {

    }


}

const calc = new Calculator();


for (const btn of numbers) {
    // console.log(btn)

    btn.addEventListener('click',() => {
       return calc.numbers(event)
    })
}

for (const sign of signs) {
    // console.log(sign)

    sign.addEventListener('click',() => {
       return calc.signs(event)
    })
}

dot.addEventListener('click', () => {
    return calc.dot()
})
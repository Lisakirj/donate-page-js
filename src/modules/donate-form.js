import { Settings } from "../core/constans/settings"

export class DonateForm {
    constructor(totalAmount, newDonate) {
        this.formContainer = document.createElement('form')
        this.formContainer.className = 'donate-form'
        this.totalAmount = totalAmount
        this.createNewDonate = newDonate
    }

    updateTotalAmount(newAmount) {
        return `${newAmount}${Settings.currency}`
    }

    render() {
        const totalAmounth1 = document.createElement('h1')
        totalAmounth1.id = 'total-amount'
        totalAmounth1.textContent = this.updateTotalAmount(this.totalAmount)

        const inputLabel = document.createElement('label')
        inputLabel.className = 'donate-form__input-label'
        inputLabel.textContent = `Введіть суму в ${Settings.currency}`

        const input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.name = 'amount'
        input.type = 'number'
        input.max = '100'
        input.min = '0'
        input.required = ''

        const btn = document.createElement('button')
        btn.className = 'donate-form__submit-button'
        btn.type = 'submit'
        btn.textContent = 'Задонатити'

        inputLabel.append(input)

        this.formContainer.append(totalAmounth1, inputLabel, btn)

        this.formContainer.addEventListener('submit', (event) => {
            event.preventDefault()
            const { target } = event
            const newDonate = {
                amount: Number(target.amount.value),
                date: new Date()

            }
            this.createNewDonate(newDonate)
            target.amount.value = ''
        })


        return this.formContainer
    }

}
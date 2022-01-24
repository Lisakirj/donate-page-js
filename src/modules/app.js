import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"
import { mockDonates } from '../core/utils/consts'
import { calculateSumOfNumbers } from "../core/utils/index";
import { Settings } from "../core/constans/settings";

export default class App {

    constructor(donates) {
        this.state = {
            donates: donates,
            totalAmount: 0,
        }
        this.state.donates = [...mockDonates]
        this.state.totalAmount = this.createTotalAmount()

        this.donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.donateList = new DonateList(this.state.donates)
    }

    createTotalAmount() {
        const allAmount = this.state.donates.map(el => el.amount)
        let sum = calculateSumOfNumbers(allAmount)
        console.log(sum)
        return sum

    }
    createNewDonate(newDonate) {
        const currentDonates = [...this.state.donates]
            // console.log(currentDonates)
        const updatedDonatesList = [...currentDonates, newDonate]
        this.state.donates = updatedDonatesList

        this.state.totalAmount = this.createTotalAmount()

        const amountNumEl = document.querySelector('#total-amount')
        amountNumEl.textContent = `${this.state.totalAmount}${Settings.currency}`

        this.donateForm.updateTotalAmount(this.state.totalAmount)
        this.donateList.updateDonates(updatedDonatesList)

    }

    run() {
        const formHTML = this.donateForm.render()
        const donateHTML = this.donateList.render()

        document.body.append(formHTML, donateHTML)
    }
}
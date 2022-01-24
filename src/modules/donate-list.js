import { getFormattedTime } from "../core/utils/index"
import { Settings } from "../core/constans/settings";

export class DonateList {
    constructor(donates) {
        this.donates = donates
        this.donatesContainer = document.createElement('div')
        this.donatesContainer.className = 'donates-container'
    }

    updateDonates(updatedDonates) {
        const donatesListContainer = document.querySelector('.donates-container__donates')
        donatesListContainer.innerHTML = ''
        const updatedItems = this.createDonatesElements(updatedDonates)
        return donatesListContainer.append(...updatedItems)

    }

    createDonatesElements(donates) {
        const donatesElements = donates.map((el) => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.textContent = getFormattedTime(el.date)

            const b = document.createElement('b')
            b.textContent = ` - ${el.amount}${Settings.currency}`

            donateItem.append(b)

            return donateItem
        })
        return donatesElements
    }
    render() {
        const donatesTitle = document.createElement('h2')
        donatesTitle.className = 'donates-container__title'
        donatesTitle.textContent = 'Список донатів'

        const donatesList = document.createElement('div')
        donatesList.className = 'donates-container__donates'

        const donatesElements = this.createDonatesElements(this.donates)

        donatesList.append(...donatesElements)

        this.donatesContainer.append(donatesTitle, donatesList)

        return this.donatesContainer
    }
}

//зробити суму донатів при вході дорівнюючою сумі донатів
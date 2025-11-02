import { faker } from '@faker-js/faker'

export function getRandomNumber() {
    return faker.number.bigInt()
}

export function getRandomEmail() {

    return faker.internet.email({ firstName: 'qa-pgtas', getRandomNumber, provider: 'gmail.com' })
}

Cypress.Commands.add('validateProductDetails', (details) => {
    if (details.availability) {
        cy.contains('b', 'Availability:')
            .parent()
            .invoke('text')
            .then((text) => {
                const availability = text.replace('Availability:', '').trim()
                cy.log(`Availability: ${availability}`)
                expect(availability).to.equal(details.availability)
            })
    }
    if (details.brand) {
        cy.contains('b', 'Brand:')
            .parent()
            .invoke('text')
            .then((text) => {
                const brand = text.replace('Brand:', '').trim()
                cy.log(`Brand: ${brand}`)
                expect(brand).to.equal(details.brand)
            })
    }

    if (details.state) {
        cy.contains('b', 'Condition:')
            .parent()
            .invoke('text')
            .then((text) => {
                const condition = text.replace('Condition:', '').trim()
                cy.log(`Condition: ${condition}`)
                expect(condition).to.equal(details.state)
            })
    }

})

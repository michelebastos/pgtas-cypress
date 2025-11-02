import { faker } from "@faker-js/faker"

export function IncludePaymentDetails() {
cy.get('li.active').should('have.text', 'Payment')
cy.get('[name="name_on_card"]').should('be.visible').type(faker.person.fullName())
cy.get('[name="card_number"]').should('be.visible').type(faker.finance.creditCardNumber())
cy.get('[name="cvc"').should('be.visible').type(faker.finance.creditCardCVV())
cy.get('[name="expiry_month"]').should('be.visible').type(faker.date.month({length: '2'}))
cy.get('[name="expiry_year"]').should('be.visible').type(faker.date.future({refDate: new Date(), years: 5}).getFullYear().toString() )
cy.get('#submit').should('be.visible').click();
}

export function confirmOrder() {
    cy.get('[data-qa="order-placed"]').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
}
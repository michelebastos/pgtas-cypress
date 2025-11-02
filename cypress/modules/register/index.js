import { faker } from "@faker-js/faker"
import UserData from '../../fixtures/registeredUser.json';

const userName = faker.person.firstName()
const email = faker.internet.email()

export function fillRegistration() {
    cy.get('[placeholder="Name"]').type(userName)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender2').click()
    cy.get('#password').type('123456', { log: false })
    cy.get('#days').select('21')
    cy.get('#months').select('December')
    cy.get('#years').select('1987')
    cy.get('#first_name').type(userName)
    cy.get('#last_name').type(faker.person.lastName())
    cy.get('#company').type(faker.company.name())
    cy.get('#address1').type(faker.location.streetAddress())
    cy.get('#country').select('Canada')
    cy.get('#state').type(faker.location.state())
    cy.get('#city').type(faker.location.city())
    cy.get('#zipcode').type(faker.location.zipCode())
    cy.get('#mobile_number').type(faker.phone.number())
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Continue').should('be.visible').click()
    cy.contains(`Logged in as ${userName}`).should('be.visible')
}
export function RegisterPreExistingUser() {
    cy.get('[placeholder="Name"]').type(UserData.name)
    cy.get('[data-qa="signup-email"]').type(UserData.email)
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('Email Address already exist!').should('be.visible')
}
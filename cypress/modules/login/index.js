import { faker } from "@faker-js/faker"

    const userName = faker.person.firstName()
    const email = faker.internet.email()

export function login(email, password) {
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
}

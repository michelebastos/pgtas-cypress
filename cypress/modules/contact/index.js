
import UserData from '../../fixtures/contact.json';

export function registerContactUsForm() {
    cy.get('[data-qa="name"]').should('be.visible').type(UserData.name)
    cy.get('[data-qa="email"]').should('be.visible').type(UserData.email)
    cy.get('[data-qa="subject"]').should('be.visible').type(UserData.subject)
    cy.get('#message').should('be.visible').type(UserData.message)

    cy.fixture('imageContact').as('imagem')
    cy.get('[name="upload_file"]').selectFile('@imagem')
    cy.get('[data-qa="submit-button"]').should('be.visible').click()
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
}
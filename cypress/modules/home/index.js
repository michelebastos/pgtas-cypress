import { faker } from '@faker-js/faker';

export function navigateToLogin() {
    cy.get('a[href="/login"').click()
}

export function navigateToProducts() {
    cy.get('a[href="/products"').click()
}

export function logout() {
    cy.get('a[href="/logout"').click()  
}

export function registerEmail() {
    cy.get('h2').should('contains.text', 'Subscription')
    cy.get('#susbscribe_email').should('be.visible').type(faker.internet.email())
    cy.get('#subscribe').click()
}

export function deleteUser() {
    cy.get('a[href="/delete_account"]').should('be.visible').click()
    cy.get('[data-qa="account-deleted"]').should('have.text', 'Account Deleted!')
    cy.contains('Your account has been permanently deleted!').should('be.visible')
    cy.contains('You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
        .should('be.visible')
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
}

export function navigateToContactUs() {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
}

export function CheckItemsInCart() {
    cy.get('a[href="/view_cart"]').first().should('be.visible').click();
    cy.get('.active').should('have.text', 'Shopping Cart')
    cy.get('a.btn.btn-default.check_out').should('be.visible').click();
}

export function viewDetailsAddress() {
    cy.get('li.active').should('have.text', 'Checkout')
    cy.contains('Address Details').should('be.visible')
    cy.get('#address_delivery').should('be.visible')
    cy.get('#address_invoice').should('be.visible')
}

export function includeDetails() {
    cy.get('.form-control').type('Please deliver between 8am and 6pm.')
    cy.get('a[href="/payment"]').should('be.visible').click();

}
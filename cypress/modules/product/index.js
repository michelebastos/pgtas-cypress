
export function consultProduct(product) {
    cy.get('#search_product').should('be.visible').type(product)
    cy.get('#submit_search').should('be.visible').click()
    cy.contains('p', product).should('be.visible')
}

export function addProducttoCart() {
    cy.get('img[src="/get_product_picture/1"]').trigger('mouseover')
    cy.contains('Add to cart').should('be.visible').click();
    cy.contains('Continue Shopping').should('be.visible').click()
}

export function seeBrands() {
    cy.get('.brands_products').should('be.visible')
    cy.get('.brands-name a[href="/brand_products/Polo"]').should('contain.text', 'Polo')
    cy.get('.brands-name a[href="/brand_products/H&M"]').should('contain.text', 'H&M')
    cy.get('.brands-name a[href="/brand_products/Madame"]').should('contain.text', 'Madame')
    cy.get('.brands-name a[href="/brand_products/Mast & Harbour"]').should('contain.text', 'Mast & Harbour')
    cy.get('.brands-name a[href="/brand_products/Babyhug"]').should('contain.text', 'Babyhug')
    cy.get('.brands-name a[href="/brand_products/Allen Solly Junior"]').should('contain.text', 'Allen Solly Junior')
    cy.get('.brands-name a[href="/brand_products/Kookie Kids"]').should('contain.text', 'Kookie Kids');
    cy.get('.brands-name a[href="/brand_products/Biba"]').should('contain.text', 'Biba');
}

export function navigateToBrand(brand) {
    cy.get('a[href="/brand_products/'+brand+'"]').click()
    cy.get('h2.title.text-center').should('have.text', `Brand - ${brand} Products`);
}

import { navigateToProducts } from '../modules/home';
import { consultProduct } from '../modules/product';

describe('Product Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it.only('8- Verify All Products and product detail page', () => {
        navigateToProducts()
        cy.get('h2.title.text-center')
            .should('have.text', 'All Products')
        cy.get('a[href="/product_details/1"').should('be.visible').click()
        cy.get('.product-details').should('be.visible')
        cy.get('.product-information').should('be.visible')
        cy.get('h2').should('contain.text', 'Blue Top')
        cy.get('p').should('contain.text', 'Category: Women > Tops')
        cy.get('span').should('contain', 'Rs. 500')
        cy.validateProductDetails({
            category: 'Women > Tops',
            availability: 'In Stock',
            brand: 'Polo',
            state: 'New'
        })
    });
    it('Test Case 9: Search Product', () => {
        navigateToProducts()
        cy.get('h2.title.text-center')
            .should('have.text', 'All Products')
        consultProduct('Men Tshirt')
    });
});


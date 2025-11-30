
import { navigateToLogin } from '../modules/home';
import { login } from '../modules/login/'
describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
        navigateToLogin()
    });
    it('2 - Login User with correct email and password', () => {
        login(Cypress.env('valid_email'), Cypress.env('valid_password'))
    });

    it('Login with the correct email address but incorrect password', () => {
        login(Cypress.env('valid_email'), Cypress.env('invalid_password'))
        cy.contains('Your email or password is incorrect!').should('be.visible')
    });

    it('Login with incorrect email and correct password.', () => {
        login(Cypress.env('invalid_email'), Cypress.env('valid_password'))
        cy.contains('Your email or password is incorrect!').should('be.visible')
    });

    it('Login with incorrect email and password', () => {
        login(Cypress.env('invalid_email'), Cypress.env('invalid_password'))
        cy.contains('Your email or password is incorrect!').should('be.visible')
    });
});

import { navigateToLogin, logout } from '../modules/home';
import { login } from '../modules/login';

describe('Logout Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
        navigateToLogin()
    });


    it('4 - Logout User', () => {
        login(Cypress.env('valid_email'), Cypress.env('valid_password'))
        logout()

    });

});

import { navigateToLogin } from '../modules/home';
import { RegisterPreExistingUser, fillRegistration } from '../modules/register';

describe('Register Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
        navigateToLogin()
    });

    it('1 - Register User', () => {
        fillRegistration()
    });

    it('5- Register User with existing email', () => {
        RegisterPreExistingUser()
    });
});
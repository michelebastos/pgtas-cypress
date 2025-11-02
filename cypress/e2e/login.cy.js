
import { navigateToLogin } from '../modules/home';
import { login } from '../modules/login/'
describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
        navigateToLogin()
    });
    it('2 - Login User with correct email and password', () => {
        login('midsa.cardoso@gmail.com', '123456')
    });

    it('3 - Login User with incorrect email and password', () => {
        login('midsa.cardoso@gmail.com', '16')
        cy.contains('Your email or password is incorrect!').should('be.visible')
    });
});
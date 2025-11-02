
import  { registerEmail } from '../modules/home';

describe('Subsciption Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
    });
 
    it('Test Case 10: Verify Subscription in home page', () => {
        registerEmail()
    });
   
})
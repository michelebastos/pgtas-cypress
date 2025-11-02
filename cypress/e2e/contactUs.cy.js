
import  { navigateToContactUs } from '../modules/home';
import { registerContactUsForm } from '../modules/contact/';

describe('Subsciption Test Cases', () => {

    beforeEach(() => {
        cy.visit('/');
    });
 
    it('Test Case 6- Contact Us Form', () => {
    navigateToContactUs()   
    registerContactUsForm()
    });
   
})
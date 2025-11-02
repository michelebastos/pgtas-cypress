
import  { deleteUser, navigateToLogin, navigateToProducts} from '../modules/home';
import {consultProduct, addProducttoCart, seeBrands,navigateToBrand} from '../modules/product';
import { fillRegistration  } from '../modules/register';
import { CheckItemsInCart, viewDetailsAddress, includeDetails } from '../modules/cart';
import { IncludePaymentDetails, confirmOrder } from '../modules/pagament';

describe('Purchase order test cases', () => {

    beforeEach(() => {
        cy.visit('/');
        
    });
 
    it.only('Test Case 15: Place Order: Register before Checkout', () => {
        navigateToLogin()
        fillRegistration()
        navigateToProducts()
        consultProduct('Blue Top')
        addProducttoCart()
        CheckItemsInCart()
        viewDetailsAddress()
        includeDetails()
        IncludePaymentDetails()
        confirmOrder()
        deleteUser()     
    });

    it.only('Test Case 19: View & Cart Brand Products', () => {
        navigateToProducts()
        seeBrands()
        navigateToBrand('Polo')
        navigateToBrand('H&M')
        
    });
   
})
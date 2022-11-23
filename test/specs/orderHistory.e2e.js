const signUpPage = require('../pageobjects/SignUp.page');
const orderHistoryPage = require('../pageobjects/orderHistory.page');
const productPurchasePage = require('../pageobjects/productPurchase.page');



describe('Purchase product history', async () => {

    it('Should view purchase in order history', async () => {
        let newEmail = Math.random().toString(12) + "@gmail.com";
        await browser.url('https://magento.softwaretestingboard.com/breathe-easy-tank.html')
        await productPurchasePage.productPurchase(newEmail,'Kayla', 'Crossdale', 'Salt', 'WallStreet', 'Spain', 'Alabama', 'United States','35004', '8768222715');
        const orderNumber= await productPurchasePage.getOrderNumber();
        await productPurchasePage.createAccount.click();
        await signUpPage.inputPassword.setValue('Password@1');
        await signUpPage.inputConfirmPassword.setValue('Password@1');
        await signUpPage.btnSubmit.click();
        //add Assertion for success message

        //click my orders 
        await orderHistoryPage.myOrders.click()
    
        await expect(orderHistoryPage.orderNumber).toHaveTextContaining(orderNumber)

    });

});

const productPurchasePage = require('../pageobjects/productPurchase.page');

describe.skip('Check Out', () => { 
     
    it('Should Purchase a product', async()=> {
        await browser.url('https://magento.softwaretestingboard.com/breathe-easy-tank.html')
        await productPurchasePage.productPurchase('Romeo-noaccount@gmail.com','Kayla', 'Crossdale', 'Salt', 'WallStreet', 'Spain', 'Alabama', 'United States','35004', '8768222715');
        await expect(productPurchasePage.confirmationMessage).toHaveTextContaining('Thank you for your purchase');
    });

});
   

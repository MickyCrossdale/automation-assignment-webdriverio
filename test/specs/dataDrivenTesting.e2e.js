const SecurePage = require('../pageobjects/secure.page');
const SignupPage = require('../pageobjects/SignUp.page');
const { faker } = require('@faker-js/faker');
  

describe('Luma Signup', () => {
    it('should attempt to signup using values provided by client', async () => {
        await SignupPage.SignUp.open('https://magento.softwaretestingboard.com/customer/account/create/');
        await SignupPage.SignUp(faker.name.firstName(), faker.name.lastName(), faker.internet.password(), faker.internet.confirmpassword(),faker.internet.email(undefined,undefined,'gmail.com',pass));
        await expect(SecurePage.myAccountTitle).toBeExisting();
        await expect(SecurePage.myAccountTitle).toHaveTextContaining(
            'My Account');
        browser.debug();
    });
})


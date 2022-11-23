const SecurePage = require('../pageobjects/secure.page');
const SignUpPage = require('../pageobjects/signUp.page');

describe.skip('My Sign Up application', () => {

    it('should sign up with valid credentials', async () => {

        await browser.reloadSession();
        await SignUpPage.open();
        let newEmail = Math.random().toString(12) + "@gmail.com";

        await SignUpPage.signup('Kayla','Crossdale', newEmail,'Password@1','Password@1');
        await expect(SecurePage.myAccountTitle).toBeExisting();
        await expect(SecurePage.myAccountTitle).toHaveTextContaining(
            'My Account');

    })

    it('should not sign up with incorrect confirm password', async () => {
        await browser.reloadSession();

        await SignUpPage.open();

        let newEmail = Math.random().toString(12) + "@gmail.com";

        await SignUpPage.signup('Kayla','Crossdale', newEmail,'Password@1','Password');
        await expect(SignUpPage.passwordConfirmErrorMessage).toBeExisting();
        await expect(SignUpPage.passwordConfirmErrorMessage).toHaveTextContaining("Please enter the same value again.")
    })

});
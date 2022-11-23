
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productPurchasePage extends Page {
    /**
     * define selectors using getter methods
     */

     get topSizeXS () {
        return $('[option-label="XS"]');
    }
    
    get topColor () {
        return $('[option-label="Purple"]')
    }

    get btnAddToCart () {
        return $('#product-addtocart-button')
    }
    
    get shoppingCart () {
        return $('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"] a')
    };
    get proceedToCheckOut () {
        return $('button[title="Proceed to Checkout"] span')
    };

    get inputEmail() {
        return $('#customer-email-fieldset #customer-email')
    };

    get inputfirstname () {
        return $('[name="firstname"]');
    }

    get inputlastname() {
        return $('[name="lastname"]')
    }

    get inputcompanyName() {
        return $('[name="company"]')
    }

    get inputstreetName () {
        return $('[name="street[0]"]');
    }

    get city () {
        return $('[name="city"]')
    }

    get stateName () {
        return $('[name="region_id"]')
    }

    get zipCode () {
        return $('[name="postcode"]')
    }

    get country () {
        return $('[name="country_id"]')
    }

    get phoneNumber () {
        return $('[name="telephone"]')
    }

    get shippingMethod () {
        return $('input[value="flatrate_flatrate"]')
    }

    get nextButton () {
        return $('[class="button action continue primary"]')
    }

    get placeOrder () {
        return $('[title="Place Order"]')
    }

    get confirmationMessage () {
        return $('[data-ui-id="page-title-wrapper"]')
    }

    get createAccount() {
        return $('[class="action primary"]')
    }

    get orderNumber() {
        return $('.checkout-success p span')
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async productPurchase (email, firstname, lastname, companyName, streetName, city, stateName, country, zipcode, phoneNumber) {

        await this.topSizeXS.click();
        await this.topColor.click();
        await this.btnAddToCart.click();
        await this.shoppingCart.click();
        await this.proceedToCheckOut.waitForClickable();
        await this.proceedToCheckOut.click();
        await this.inputEmail.setValue(email);
        await this.inputfirstname.setValue(firstname);
        await this.inputlastname.setValue(lastname);
        await this.inputcompanyName.setValue(companyName);
        await this.inputstreetName.setValue(streetName);
        await this.city.setValue(city)
        await this.stateName.selectByAttribute('data-title', stateName);
        await this.zipCode.setValue(zipcode);
        await this.country.selectByAttribute('data-title', country);
        await this.phoneNumber.setValue(phoneNumber);
        await this.shippingMethod.click();
        await this.nextButton.waitForClickable();
        await this.nextButton.click();
        await this.placeOrder.waitForClickable();
        await this.placeOrder.click();

    };
    async getOrderNumber(){
        await this.orderNumber.waitForDisplayed();
        return await this.orderNumber.getText();
    }
    /**
     * overwrite specific options to adapt it to page object
     */

    async open () {
        await super.open('checkout/cart/');
    }
    
};

module.exports = new productPurchasePage();


const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchasePage extends Page {
    /**
     * define selectors using getter methods
     */
     get topSizeXS() {
        return $('[option-label="XS"]')
    }
    
    get topColor() {
        return $('[option-label="Purple"]')
    }

    get btnAddToCart () {
        return $('#product-addtocart-button')
    }
    get cartIcon () {
        return $('.counter-number')
    }

    get cartSuccessMessage () {
        return $('.message-success')
    }

    async Purchase () {
        await this.topSizeXS.click();
        await this.topColor.click();
        await this.btnAddToCart.click();

    };

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        await super.open('breathe-easy-tank.html');
    }

};

module.exports = new PurchasePage();
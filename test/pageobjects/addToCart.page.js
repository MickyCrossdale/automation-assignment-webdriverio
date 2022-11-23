
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class addToCartPage extends Page {

    get breatheEasyTank () {
        return $('[title="Breathe-Easy Tank"]')
    }

    get topSizeXS () {
        return $('[option-label="XS"]');
    }
    
    get topColor () {
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
      
    async addToCart () {
        await this.breatheEasyTank.scrollIntoView();
        await this.breatheEasyTank.click();
        await this.topSizeXS.click();
        await this.topColor.click();
        await this.btnAddToCart.click();
        
    };


    async open () {
        await super.open('checkout/cart/');
    }
};



module.exports = new addToCartPage();

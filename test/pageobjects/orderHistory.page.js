
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class orderHistoryPage extends Page {
    /**
     * define selectors using getter methods
     */
   
    get confirmMessage() {
        return $('[class="message-success success message"]')
    }

    get myOrders() {
        return $('main[id="maincontent"] li:nth-child(2) a:nth-child(1)')
    }

    get orderNumber() {
        return $('td.col.id')
    }


   

    async orderHistory () {

        await this.confirmMessage.click();
        await this.myAccountdropDown.click();
        await this.myOrders.click(email);
        
    }

    
    async open () {
        await super.open('customer/account/');
    }
}

module.exports = new orderHistoryPage();

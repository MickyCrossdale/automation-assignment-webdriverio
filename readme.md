# Project Title- LUMA
Auomated testing of the Luma application focusing on the following features:
*SignUp (Happy and Unhappy path) -
const SecurePage = require('../pageobjects/secure.page');
const SignUpPage = require('../pageobjects/signUp.page');

*Adding a Product to Cart - const addToCartPage = require('../pageobjects/addToCart.page');

*Purchasing a Product - const productPurchasePage = require('../pageobjects/productPurchase.page');

*Verify Purchase in Order History - 
const signUpPage = require('../pageobjects/SignUp.page');
const orderHistoryPage = require('../pageobjects/orderHistory.page');
const productPurchasePage = require('../pageobjects/productPurchase.page');

*Data-Driven Testing (SignUp) - const SignupPage = require('../pageobjects/SignUp.page');
 

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
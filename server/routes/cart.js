const { Router } = require('express');
const cartHandler = require('../logicHandlers/cartHandlers');
const router = Router();

router.get('/cart/:id', cartHandler.getCartItems);//fetches all the items in the cart of a user with the help of the user id

router.post('/cart/:id', cartHandler.addCartItem);//adding item to cart

router.delete('/cart/:userId/:itemId', cartHandler.deleteItem);//to remove a particular item from the cart of a user

module.exports = router;
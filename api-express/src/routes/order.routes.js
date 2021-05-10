const { Router } = require('express');
const router = Router();

const orderController = require('../controllers/order.controller');

router.get('/getOrder/:id', orderController.getOrder);
router.get('/getOrders/:state', orderController.getOrders);
router.post('/generateOrder', orderController.generateOder);
router.put('/changeOrderState/:id/:newState', orderController.changeOrderState);
router.put('/updateOrder/:id', orderController.updateOrder);

module.exports = router;

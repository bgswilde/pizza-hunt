const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes.js');

router.use('/pizzas', pizzaRoutes);

module.exports = router;
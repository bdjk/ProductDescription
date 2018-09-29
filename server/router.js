const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .post(controller.post)
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router;
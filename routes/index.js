const express = require('express');
const productRouter = require('./productsRouter');
//const userRouter = require('./productsRouter');
//const categoryRouter = require('./productsRouter');
function routerApi(app){
  const router = express.Router();
  app.use('/api1/v1', router);

  router.use('/products', productRouter);
  //app.use('/users', productRouter);
  //app.use('/categories', productRouter);
}

module.exports = routerApi;

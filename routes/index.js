const express = require('express');
const productRouter = require('./productsRouter');
const userRouter = require('./usersRouter');
//const categoryRouter = require('./productsRouter');

const apiVersion = '/api/v1';
function routerApi(app){
  const router = express.Router();
  app.use(apiVersion, router);
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  //app.use('/categories', productRouter);
}

module.exports = routerApi;

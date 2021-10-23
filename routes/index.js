const productRouter = require('./productsRouter');
//const userRouter = require('./productsRouter');
//const categoryRouter = require('./productsRouter');
function routerApi(app){
  app.use('/products', productRouter);
  //app.use('/users', productRouter);
  //app.use('/categories', productRouter);
}

module.exports = routerApi;

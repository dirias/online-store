const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

routerApi(app);

app.get('/', (request, response) =>{
  response.send('This is the home page');
});

app.get('/about', (request, response) =>{
  response.send('This is about');
});
/*


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;

  res.json({
    categoryId,
    productId
  });
});
//GET: parámetros query

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros');

  }
});*/
app.listen(port, () =>{
  console.log('Running on port ' + port);
});


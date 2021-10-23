const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) =>{
  response.send('This is the home page');
});

app.get('/about', (request, response) =>{
  response.send('This is about');
});
app.get('/products', (request, response) =>{
  response.json({
    name: 'Product 1',
    price: 3500
  });
});

app.listen(port, () =>{
  console.log('Running on port ' + port);
});

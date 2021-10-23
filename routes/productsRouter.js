const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (request, response) => {
  const products = [];
  const { size } = request.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: '$' + parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  response.json(products);
});
// Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name: 'Product 2',
    price: '2500'
  });
});

module.exports = router;

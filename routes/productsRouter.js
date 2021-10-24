const express = require('express');
const ProductsService = require('../services/productService');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (request, response) => {
  const products = await service.find();
  response.json(products);

});
// Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const product = await service.findOne(id);

  response.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    message: 'Created',
    data: newProduct
  });

});
//Recibe objetos de forma parceal
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'Updated',
      data: product,
      id
    });

  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});
//Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json({
    message: 'Deleted',
    rta
  });
});
module.exports = router;

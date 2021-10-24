const express = require('express');
const ProductsService = require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProducSchema, updateProducSchema, getProducSchema } = require('../schemas/producSchema');

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

router.get('/:id', validatorHandler(getProducSchema, 'params'), async (request, response, next) => {
  try {
    const { id } = request.params;
    const product = await service.findOne(id);

    response.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createProducSchema, 'params'), async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    message: 'Created',
    data: newProduct
  });

});
//Recibe objetos de forma partial
router.patch('/:id',
  validatorHandler(getProducSchema, 'params'),
  validatorHandler(updateProducSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);

    } catch (error) {
      next(error);
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

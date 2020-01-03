const express = require('express');
const router = express.Router();

const Warehouse = require('../models/Apartment.model');

router.get('/', async (req, res) => {

  const warehouses = await Warehouse.find();
  res.json(warehouses)

});

router.post('/', async (req, res) => {

  const warehouse = new Warehouse({
    id : req.body.id,
    codigo :req.body.codigo,
    estado: req.body.estado
  })
  await warehouse.save();
  res.json({ status: 'New Warehouse Saved' });
});


module.exports = router;
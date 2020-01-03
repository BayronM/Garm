const express = require('express');
const router = express.Router();

const HouseComplex = require('../models/Apartment.model');

router.get('/', async (req, res) => {

  const housecomplexs = await HouseComplex.find();
  res.json(housecomplexs)

});

router.post('/', async (req, res) => {

  const housecomplex = new HouseComplex({
    id: req.body.id,
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    direccion: req.body.direccion,
    comuna : req.body.comuna,
    estado: req.body.estado
  })
  await housecomplex.save();
  res.json({ status: 'New HouseComplex Saved' });
});


module.exports = router;
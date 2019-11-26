const express = require('express');
const router = express.Router();

const Owner = require('../models/Owner.model');

router.get('/', async (req, res) => {

  const owners = await Owner.find();
  res.json(owners)

});

router.post('/', async (req, res) => {

  const owner = new Owner({
    rut: req.body.rut,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email : req.body.email,
    estado: req.body.estado
  })
  await owner.save();
  res.json({ status: 'New Owner Saved' });
});


module.exports = router;
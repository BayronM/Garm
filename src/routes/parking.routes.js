const express = require('express');
const router = express.Router();

const Parking = require('../models/Parking.model');

router.get('/', async (req, res) => {

  const parkings= await Parking.find();
  res.json(parkings)

});

router.post('/', async (req, res) => {

  const parking = new Parking({
    id : req.body.id,
    codigo :req.body.codigo,
    estado: req.body.estado
  })
  await parking.save();
  res.json({ status: 'New Parking Saved' });
});


module.exports = router;
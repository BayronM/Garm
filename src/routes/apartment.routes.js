const express = require('express');
const router = express.Router();

const Apartment = require('../models/Apartment.model');

router.get('/', async (req, res) => {

  const apartments = await Apartment.find();
  res.json(apartments)

});

router.post('/', async (req, res) => {

  const apartment = new Apartment({
    codigo: req.body.codigo,
    com: req.body.com,
    bod: req.body.bod,
    est: req.body.est,
    estado: req.body.estado,
    
  })
  await apartment.save();
  res.json({ status: 'New Apartment Saved' });
});


module.exports = router;
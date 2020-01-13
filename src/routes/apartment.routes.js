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

router.get('/:id', async (req, res) => {
  const apartments = await Apartment.findById(req.params.id);
  res.json(apartments);
});

router.delete('/:id', async (req, res) => {
  await Apartment.findByIdAndRemove(req.params.id);
  res.json({ status: 'Apartment   Deleted' });
});

router.put('/:id', async (req, res) => {
  const { codigo, com, bod, est, estado } = req.body;
  const newapartment = {
    codigo,
    com,
    bod,
    est,
    estado,
  }
  await Apartment.findByIdAndUpdate(req.params.id, newapartment);
  res.json({ status: 'Apartment Updated' });
});


module.exports = router;
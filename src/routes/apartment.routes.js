const express = require('express');
const router = express.Router();

const Apartment = require('../models/Apartment.model');

router.get('/', async (req, res) => {

  const apartments = await Apartment.find();
  res.json(apartments)

});

router.post('/', async (req, res) => {

  const apartment = new Apartment({
    code: req.body.code,
    owner: {
      ownerid: req.body.ownerid,
      ownername: req.body.ownername,
      ownerlastname: req.body.ownerlastname,
      ownerphone: req.body.ownerphone
    }
  })
  await apartment.save();
  res.json({ status: 'New Apartment Saved' });
});


module.exports = router;
const express = require('express');
const router = express.Router();

const Employee = require('../models/Apartment.model');

router.get('/', async (req, res) => {

  const employees = await Employee.find();
  res.json(employees)

});

router.post('/', async (req, res) => {

  const employee = new Employee({
    rut: req.body.rut,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email : req.body.email,
    tipo : req.body.tipo,
    estado: req.body.estado
  })
  await employee.save();
  res.json({ status: 'New Employee Saved' });
});


module.exports = router;
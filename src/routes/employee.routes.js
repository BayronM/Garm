const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee.model');

router.get('/', async (req, res) => {

  const employees = await Employee.find();
  res.json(employees)

});

router.put('/:id', async (req, res) => {
  const { rut, nombre, apellido, telefono, email, tipo, estado, } = req.body;
  const newemployee = {
    rut,
    nombre,
    apellido,
    telefono,
    email,
    tipo,
    estado,
  }
  await Employee.findByIdAndUpdate(req.params.id, newemployee);
  res.json({ status: 'Employee Updated' });
});

router.post('/', async (req, res) => {

  const employee = new Employee({
    rut: req.body.rut,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email: req.body.email,
    tipo: req.body.tipo,
    estado: req.body.estado
  })
  await employee.save();
  res.json({ status: 'New Employee Saved' });
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: 'Employee   Deleted' });
});

router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});


module.exports = router;
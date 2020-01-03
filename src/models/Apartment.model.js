//const Sequelize = require('sequelize')
const mongoose = require('mongoose');
const { Schema } = mongoose;


const HouseComplexSchema = new Schema({
    id: { type: String, required: true},
    nombre : {type : String },
    tipo : {type : String},
    direccion : {type : String},
    comuna : {type : String},
    estado : {type : String }
});
 var HouseComplex= mongoose.model('HouseComplex', HouseComplexSchema);

const ParkingSchema = new Schema({
    id: { type: Number , required: true},
    codigo : {type : String },
    estado : {type : String}
});
 var Parking = mongoose.model('Parking', ParkingSchema);

const WarehouseSchema = new Schema({
    id: { type: Number , required: true},
    codigo : {type : String },
    estado : {type : String}
});

 var Warehouse = mongoose.model('Warehouse', WarehouseSchema);


 //Conectar
const ApartmentSchema = new Schema({
    codigo: { type: String, required: true },
    com: {type:String},
    est: {type:String},
    bod: {type:String},
    estado: {tpye: String}
});
var Apartment = mongoose.model('Apartment', ApartmentSchema);


const OwnerSchema = new Schema({
    rut: { type: String, required: true },
    nombre : {type : String },
    apellido : {type : String},
    telefono : {type : String},
    email : {type : String},
    estado : {type : String }
});
var Owner = mongoose.model('Owner', OwnerSchema);

const EmployeeSchema = new Schema({
    rut: { type: String, required: true },
    nombre : {type : String },
    apellido : {type : String},
    telefono : {type : String},
    email : {type : String},
    tipo : {type : String},
    estado : {type : String }
});
var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = HouseComplex;
module.exports = Parking;
module.exports = Warehouse;
module.exports = Apartment;
module.exports = Owner;
module.exports = Employee;
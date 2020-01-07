//const Sequelize = require('sequelize')
const mongoose = require('mongoose');
const { Schema } = mongoose;



 //Conectar
const ApartmentSchema = new Schema({
    codigo: { type: String, required: true },
    com: {type:String},
    est: {type:String},
    bod: {type:String},
    estado: {tpye: String}
});
var Apartment = mongoose.model('Apartment', ApartmentSchema);


module.exports = Apartment;

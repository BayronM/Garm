const mongoose = require('mongoose');
const { Schema } = mongoose;




const HouseComplexSchema = new Schema({
    id: { type: String, required: true },
    nombre : {type : String },
    tipo : {type : String},
    direccion : {type : String},
    comuna : {type : String},
    estado : {type : String }
});



module.exports = mongoose.model('HouseComplex', HouseComplexSchema);
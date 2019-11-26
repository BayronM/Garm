const mongoose = require('mongoose');
const { Schema } = mongoose;




const OwnerSchema = new Schema({
    rut: { type: String, required: true },
    nombre : {type : String },
    apellido : {type : String},
    telefono : {type : String},
    email : {type : String},
    estado : {type : String }
});



module.exports = mongoose.model('Owner', OwnerSchema);
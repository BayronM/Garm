const mongoose = require('mongoose');
const { Schema } = mongoose;




const EmployeeSchema = new Schema({
    rut: { type: String, required: true },
    nombre : {type : String },
    apellido : {type : String},
    telefono : {type : String},
    email : {type : String},
    tipo : {type : String},
    estado : {type : String }
});



module.exports = mongoose.model('Employee', EmployeeSchema);
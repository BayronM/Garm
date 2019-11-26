const mongoose = require('mongoose');
const { Schema } = mongoose;




const WarehouseSchema = new Schema({
    id: { type: Number, required: true },
    codigo : {type : String },
    estado : {type : String}
});



module.exports = mongoose.model('Warehouse', WarehouseSchema);
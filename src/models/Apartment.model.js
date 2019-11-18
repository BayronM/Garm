const mongoose = require('mongoose');
const { Schema } = mongoose;




const ApartmentSchema = new Schema({
    code: { type: String, required: true },
    owner: {
        ownerid: { type: String },
        ownername: { type: String },
        ownerlastname: { type: String },
        ownerphone: { type: String }
    }
});



module.exports = mongoose.model('Apartment', ApartmentSchema);
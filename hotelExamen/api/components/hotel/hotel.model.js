const mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    'nombreHotel' : { type: String, required: true },
    'foto' : { type: Image, required: true },
    'latitud' : { type: String, required: true },
    'longitud' : { type: String, required: true },
    'provincia' : { type: Object, required: true },
    'canton' : { type: Object, required: true },
    'distrito' : { type: Object, required: true },
    'direccion' : { type: String, required: true },
    'telefonoServicioCliente' : { type: String, required: true },
    'correoServicioCliente' : { type: String, required: true },
    'telefonoReservacion' : { type: String, required: true },
    'correoReservacion' : { type: String, required: true}
    
});

module.exports = mongoose.model('Hotel', HotelSchema);
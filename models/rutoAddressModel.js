var mongoose = require('mongoose');

var Schema= mongoose.Schema;

var rutoAddressSchema= new Schema({
    personName:String,
    contactNo:Number,
    location:{
        latitude:String,
        longitude:String
    },
    doorNo:String,
    buliding: String,
    landmark:String,
    note:String
});

var RutoAddress = mongoose.model('RutoAddress',rutoAddressSchema);

module.exports = RutoAddress;
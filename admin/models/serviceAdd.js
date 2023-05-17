const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({

    stype:{
        type:String,
        required:true
    },

    discription:{
        type:String,
        required:true
    },
    retal:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('ServicesAdd', servicesSchema)
const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({

    stype:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    rental:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('ServicesAdd', servicesSchema)
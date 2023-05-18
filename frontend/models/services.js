const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    servicetype:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Services', servicesSchema)
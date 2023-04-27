const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const pySchema = new mongoose.Schema({
    email:{
        type:String,
        required:true

    },features: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    
      count_limit: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      
      package_code: {
        type: String,
        required: false,
      },
   
});

const PaySchema = mongoose.model('PAYMENT', pySchema);

module.exports = PaySchema;
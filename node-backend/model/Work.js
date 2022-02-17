const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Work = new Schema({

  name:{
    type: String
  },

  detail: {
    type: String
  }

},{
  collection:'works'
})

module.exports = mongoose.model('Work', Work);

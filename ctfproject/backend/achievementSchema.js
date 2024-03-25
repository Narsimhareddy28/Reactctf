
const mongoose = require('mongoose');

const achievementSchema=new mongoose.Schema({
    ctfname : String,
    rank : String,
    Date : {type:Date, default:Date.now },
    ctfpoints : String
  
  })
  const Achievement = mongoose.model('Achievement', achievementSchema);
  module.exports = Achievement; // Export the model

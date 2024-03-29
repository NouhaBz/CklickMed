const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const docSchema = new Schema({
    docname: { type :String ,  require : true   },
  docnum :{   type : Number ,   require :true },
    docemail: {type :String ,   require : true   },   
    docsp: { type :String ,require : true     },
},{
timestamps :true,

    
});
const doctor = mongoose.model('doctor',docSchema);

module.exports =doctor ;
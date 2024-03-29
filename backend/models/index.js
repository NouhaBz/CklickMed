const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.patient = require("./patient")(mongoose);



module.exports = db;
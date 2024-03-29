module.exports = mongoose => {

const ptSchema = mongoose.Schema(
    {
    patientname: {type :String ,require : true },
   patientage :{type : Number , require :true  },
    patientadress: {type :String ,require : true  },
    patienttel: {type :Number ,  require : true },
    patientmail: { type :String },
    patientnumcard: { type :Number , require :true },
    chronicdisease: {type :String }, 
    published: Boolean
},{

timestamps :true ,

  
});

ptSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
const patient = mongoose.model('patient',ptSchema);
return patient;
};

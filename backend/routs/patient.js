const patient = require("../models/patient.js");

module.exports = app => {
    const patients = require("../controller/patients.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", patients.create);
  
    // Retrieve all Tutorials
    router.get("/", patients.findAll);
  
    
  
    // Retrieve a single Tutorial with id
    router.get("/:id", patients.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", patients.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", patients.delete);
  
    // Create a new Tutorial
    router.delete("/", patients.deleteAll);
  
    app.use("/api/patients", router);
  };
  
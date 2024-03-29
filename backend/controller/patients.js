const db = require("../models");
const patient = db.patient;

// Create and Save a new patient 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a patient 
  const patient = new patient({
    patientname :req.body.patientname,
    patientage  :Number(req.body.patientage),
    patientadress :req.body.patientnadress,
    patienttel :Number(req.body.patienttel),
    patientmail  :req.body.patientmail,
    patientnumcard :Number(req.body.patientnumcard),
    chornicdisease :req.body.chornicdisease,
    published: req.body.published ? req.body.published : false

  });

  // Save patient in the database
  patient
    .save(patient)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all patients from the database.
exports.findAll = (req, res) => {
  const patientname = req.query.patientname;
  var condition = patientname  ? { patientname: { $regex: new RegExp(patientname), $options: "i" } } : {};

  patient.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  patient.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found patient with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving patient with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  patient.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update patient  with id=${id}. Maybe patient was not found!`
        });
      } else res.send({ message: "patient  was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating patient  with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  patient.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete patient with id=${id}. Maybe patient was not found!`
        });
      } else {
        res.send({
          message: "patient was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete patient with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  patient.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} patient were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

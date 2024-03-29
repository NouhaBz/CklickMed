const router =require('express').Router();
let doctorinfo = require('../models/doctor');


router.route('/').get((req,res) => {
 doctorinfo.find()
 .then(doctor => res.json(doctor))
 .catch(err => res.status(400).json('ERROR: ' +err));
});

router.route('/add').post((req,res) =>{
    const docname =req.body.docname;
    const docnum  = Number(req.body.docnum);
    const docemail=req.body.docemail;
    const docsp =req.body.docsp; 

    const newdoctorinfo =new doctorinfo({
        docname,
        docemail,  
        docnum,
        docsp,
        
    });

    newdoctorinfo.save()
    .then(() => res.json('doctor add'))
    .catch(err => res.status(400).json('ERROR: ' +err));
});



router.route('/:id').get((req,res) => {
    doctorinfo.findById(req.params.id)
    .then(doctorinfo => res.json(doctorinfo))
    .catch(err => res.status(400).json('ERROR : ' + err));
});

router.route('/:id').delete((req ,res) =>{
    doctorinfo.findByIdAndDelete(req.params.id)
    .then(()=> res.json('doctor deleted.'))
    .catch(err => res.status(400).json('ERROR:' + err));
}) ;

router.route('/update/:id').post((req ,res) =>{
    doctorinfo.findById(req.params.id)
    .then(doctorinfo => {
         doctorinfo.docname =req.body.docname;
        doctorinfo.docnum  = Number(req.body.docnum);
        doctorinfo.docemail=req.body.docemail;
        doctorinfo.docsp =req.body.docsp;
    doctorinfo.save()
    .then(() => res.json('doctor updated.'))
    .catch(err => res.status(400).json('ERROR: ' +err)); 
    })
    .catch(err => res.status(400).json('ERROR :' + err));
});

module.exports= router;
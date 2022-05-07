const router = require("express").Router();
let Employee = require("../models/Employee");

router.route("/add").post((req,res)=>{
    
    const EmployeeID = req.body.EmployeeID;
    const EmployeeName = req.body.EmployeeName;
    const DOB = req.body.DOB;
    const NIC = req.body.NIC;
    const Gender = req.body.Gender;
    const Address  = req.body.Address;
    const Email = req.body.Email;
    const ContactNo = req.body.ContactNo;


    const newEmployee = new Employee({

        EmployeeID,
        EmployeeName,
        DOB,
        NIC,
        Gender,
        Address,
        Email,
        ContactNo,
    })

    newEmployee.save().then(()=>{

        res.json("Employee Added")

    }).catch((err)=>{

        console.log(err);
    })

})

router.route("/all").get((req,res)=>{

    Employee.find().then((employee)=>{

        res.json(employee)

    }).catch((err)=>{
        console.log(err)
    })
})




router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.EmployeeID = req.body.EmployeeID;
            Employee.EmployeeName = req.body.EmployeeName;
            Employee.DOB = req.body.DOB;
            Employee.NIC = req.body.NIC;
            Employee.Gender = req.body.Gender;
            Employee.Address = req.body.Address;
            Employee.Email = req.body.Email;
            Employee.ContactNo = req.body.ContactNo;


            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delelte", error: err.message});
    })
})
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
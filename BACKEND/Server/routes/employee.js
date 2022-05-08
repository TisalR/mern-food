const router = require("express").Router();
const Employee = require("../models/Employee.js");

router.route("/add").post((req,res)=>{

    const OrderNo = req.body.OrderNo;
    const CustomerName = req.body.CustomerName;
    const CustomerEmailAddress = req.body.CustomerEmailAddress;
    const CustomerHomeAddress = req.body.CustomerHomeAddress;
    const CustomerPhoneNo = Number(req.body.CustomerPhoneNo);

    const newEmployee = new Employee({
        OrderNo,
        CustomerName,
        CustomerEmailAddress,
        CustomerHomeAddress,
        CustomerPhoneNo
    })

    newEmployee.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {OrderNo,CustomerName,CustomerEmailAddress,CustomerHomeAddress,CustomerPhoneNo} = req.body;

    const updateOrder = {
        OrderNo,
        CustomerName,
        CustomerEmailAddress,
        CustomerHomeAddress,
        CustomerPhoneNo
    }

    const update = await Order.findByIdAndUpdate(userId, updateOrder)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })

   
})


router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Order.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Order.findById(userId)
        .then(()=>{
            res.status(200).send({status: "User fetched", Order});
        }).carch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;
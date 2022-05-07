import React,{useState} from "react";
import axios from "axios";
import swal from 'sweetalert';
import './employee.css';
 

export default function Addemployee(){
    const [EmployeeID, SetEmployeeID] = useState("");
    const [EmployeeName, SetEmployeeName] = useState("");
    const [DOB, SetDOB] = useState("");
    const [NIC, SetNIC] = useState("");
    const [Gender, SetGender] = useState("");
    const [Address, SetAddress] = useState("");
    const [Email, SetEmail] = useState("");
    const [ContactNo, SetContactNo] = useState("");

    function sendData(e){
      swal({
        title: "Registered!",
        text:"Employee Registered Sccessfully",
        icon:"success",
        button:"OK",

      });
        e.preventDefault()

        const newEmployee = {
          EmployeeID,
          EmployeeName,
          DOB,
          NIC,
          Gender,
          Address,
          Email,
          ContactNo,

      
        }
        
        axios.post("http://localhost:5000/employee/add", newEmployee).then(()=>{
            //alert("employee added")
        }).catch((err)=>{
            alert(err)

        })
    }



    return(
        
       
        <div className = "container">
          
            <h1><center>  Employee Registration Form</center></h1>
          <br></br>
          <br></br>
            <form onSubmit={sendData}>
  <div class="mb-3">
    <label for="ProductID" class="form-label"> Employee ID </label>
    <input type="string" placeholder="Enter employee ID eg: Emp1001" required class="form-control" id="EmployeeID" onChange ={(e)=>{

        SetEmployeeID(e.target.value);
    }} ></input>
   
  </div>
  <div class="mb-3">
    <label for="ItemName" class="form-label">Employee Name</label>
    <input type="string" placeholder="Enter employee name eg: Lara Jones" required class="form-control" id="EmployeeName" onChange ={(e)=>{

    SetEmployeeName(e.target.value);
}}></input>
  </div>
  
  <div class="mb-3">
    <label for=" Category" class="form-label">Date Of Birth</label>
    <input type="date" placeholder="Enter employee date of birth eg: 1998" required class="form-control" id=" DOB" onChange ={(e)=>{

SetDOB(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for=" UnitPrice" class="form-label">NIC</label>
    <input type="string" placeholder="Enter employee NIC No. eg: 986765678V" required class="form-control" id=" NIC" onChange ={(e)=>{

SetNIC(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for=" SellingPrice" class="form-label">Gender</label>
    <select class="form-control" required id=" Gender" onChange ={(e)=>{

SetGender(e.target.value);
}}>

<option disabled selected value> -- select an option -- </option>
<option value = "Male">Male</option>
<option value = "Female">Female</option>

</select>

</div>

  <div class="mb-3">
    <label for=" Quantity" class="form-label">Address</label>
    <input type="string" placeholder="Enter employee address eg: 184/a, Malabe" required class="form-control" id=" Address" onChange ={(e)=>{

SetAddress(e.target.value);
}}></input>
  </div>

  <div class="mb-3">
    <label for="ReorderLevel" class="form-label">Email</label>
    <input type="email" placeholder="Enter employee email address eg: lara@gmail.com" required class="form-control" id="Email" onChange ={(e)=>{

SetEmail(e.target.value);
}}></input>
  </div>


  <div class="mb-3">
    <label for="TotalAmount" class="form-label">Contact No.</label>
    <input type="integer" placeholder="Enter employee mobile No. eg: 0719659898" required class="form-control" id="ContactNo" onChange ={(e)=>{

SetContactNo(e.target.value);
}}></input>
  </div>

  <button type="submit" class="btn btn-primary">Register  </button>
</form>
     
        </div>

        
    )
}
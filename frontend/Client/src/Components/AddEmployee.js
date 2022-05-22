/* eslint-disable */
import React, { useState }  from "react";
import axios from 'axios'
//import {Link} from "react-router-dom";
//import {isEmpty, isEmailAddress } from './Validation'
//import validator from '.\node_modules\validator\dist\Validator'




export default function AddEmployee(){
    

    const [OrderNo, setorderno] = useState("");
    const [CustomerName, setCustomername] = useState("");
    const [CustomerEmailAddress,setCustomeremailaddress] = useState("");
    const [CustomerHomeAddress,setCustomerhomeAddress] = useState("");
    const [CustomerPhoneNo, setCustomerphoneno] = useState("");


    function sendData(e){
      e.preventDefault();
      
      const newEmployee ={
          OrderNo,
          CustomerName,
          CustomerEmailAddress,
          CustomerHomeAddress,
          CustomerPhoneNo
      }

    console.log(newEmployee);

    axios.post("http://localhost:8070/employee/add", newEmployee).then(()=>{
          alert("Order Add");
          window.location.replace("/");
          
    }).catch((err)=>{
          alert(err)
    });

    //validation
    

    }

    


    return(
        <div className="container">
        <div className="py-2">
            <h2>Add Order </h2>
        </div>
            <form onSubmit={sendData}>


            <div className='col-md-6'>
                
                <label for="OrderNo">Order No</label>
                <input type="text" 
                 className="form-control"  
                 id="EmployeeNo" 
                 required placeholder="Enter Order No" 
                 onChange= {(e)=>{  setorderno(e.target.value); }}>
                </input>
                
            </div>
 
            <div className='col-md-6'>
                <label for="CustomerName"> Customer Name</label>
                <input type="text"  
                className="form-control"  
                id="Name" 
                required placeholder="Enter Name" 
                onChange= {(e)=>{ setCustomername(e.target.value);  }}>
                </input>
            </div>



            <div className='col-md-6'>
                <label for="CustomerEmailAddress">Customer Email Address</label>
                <input type="email"  
                className="form-control"
                id="EmailAddress" 
                required  placeholder="Enter Email Address"
                 onChange = {(e)=>{ 
                setCustomeremailaddress(e.target.value);
                
                  }}>
                 </input>
            </div>




            <div className='col-md-6'>
                <label for="CustomerHomeAddress"> Customer Home Address</label>
                <input type="text"  
                className="form-control"  
                id="HomeAddress" 
                required placeholder="Enter Home Address" 
                onChange= {(e)=>{  setCustomerhomeAddress(e.target.value); }}>
                </input>
            </div>



            <div className='col-md-6'>
                <label for="PhoneNo">Phone No</label>
                <input type="text" pattern = "[0-9]{10}"
                className="form-control"  
                id="PhoneNo" 
                required placeholder=" Enter PhoneNo" 
                onChange= {(e)=>{setCustomerphoneno(e.target.value);}}>
                </input>
            </div>
            
            
            
            <br/><br/>
            <div >
            <button type="Submit" className="btn btn-danger" >Submit</button>
            </div>


        </form>
            <br/><br/>


    </div>
    )

}


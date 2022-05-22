/* eslint-disable */
import React, { useEffect, useState }  from "react";
import axios from "axios";



export default function UpdateOrder(){

    const [OrderNo, setorderno] = useState("");
    const [CustomerName, setCustomername] = useState("");
    const [CustomerEmailAddress,setCustomeremailaddress] = useState("");
    const [CustomerHomeAddress,setCustomerhomeAddress] = useState("");
    const [CustomerPhoneNo, setCustomerphoneno] = useState("");

    const [_id, setID] = useState(null);

    useEffect(()=> {
        setID(localStorage.getItem('ID'));
        setorderno(localStorage.getItem('Orderno')); 
        setCustomername(localStorage.getItem('Customer Name'));
        setCustomeremailaddress(localStorage.getItem('Customer EmailAddress'));
        setCustomerhomeAddress(localStorage.getItem('Customer HomeAddress'));
        setCustomerphoneno(localStorage.getItem('CustomerPhoneNo'));
    }, []);

    useEffect(()=>{
        setorderno(localStorage.getItem('EmployeeNo'))
    },[]);


    const updateAPIData = () => {
        const newOrder ={
            OrderNo,
            CustomerName,
            CustomerEmailAddress,
            CustomerHomeAddress,
            CustomerPhoneNo
        
        }
    axios.put(`http://localhost:8070/employee/update/${_id}` ,newEmployee).then(()=>{
        alert(" Updated Suceessfuly!");
        window.location.replace("/");
    }).catch((err) =>{
        alert(err)
    })

}

      return(   
        <div className="container">
        <div className="py-2">
            <h2>Update Order </h2>
        </div>
            <form>

            <p>OrderNo : {OrderNo}</p>
 
            <div className='col-md-6'>
                <label for="Name">Customer Name</label>
                <input type="text" 
                value = {CustomerName}
                className="form-control" 
                id="Name"  
                required
                onChange= {(e)=>{
                    setCustomername(e.target.value);
                }}/>
                
            </div>



            <div className='col-md-6'>
                <label for="CustomerEmailAddress">Customer Email Address</label>
                <input type="email" 
                value = {CustomerEmailAddress}
                className="form-control"
                 id="EmailAddress" 
                 required
                 onChange= {(e)=>{
                    setCustomeremailaddress(e.target.value);
                }}/>
            </div>




            <div className='col-md-6'>
                <label for="CustomerHomeAddress">Customer Home Address</label>
                <input type="text" 
                value = {CustomerHomeAddress}
                className="form-control" 
                id="HomeAddress" 
                required
               
                onChange= {(e)=>{
                    setCustomerhomeAddress(e.target.value);
                }}/>
            </div>



            <div className='col-md-6'>
                <label for="CustomerPhoneNo">CustomerPhone No</label>
                <input type="text" 
               
                value = {CustomerPhoneNo}
                className="form-control" 
                id="PhoneNo" 
                required
                
                onChange= {(e)=>{
                    setphoneno(e.target.value);
                }}/>
                
            </div> 
        

        <br/><br/>
            
            <div className="container">
            <button type="submit" 
            className="btn btn-danger" onClick={updateAPIData}>Save</button>
            </div>
            
        </form>
        <br/><br/>
    
    </div>
    );

}

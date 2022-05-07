import React,{useState,useEffect} from "react";
import axios from "axios";
//import Header from "./Header";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Addemployee';
import {Link} from 'react-router-dom';
import jspdf from 'jspdf'
import "jspdf-autotable"
import { Button } from "react-bootstrap";
 
import swal from 'sweetalert';

export default function AllEmployee(){

    const [employee,setEmployees ] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");


    const deleteEmployee=(id) =>{
        axios.delete(`http://localhost:5000/employee/delete/${id}`).then(()=>{
            swal({
                title: "Are you sure?",
                text: "The Employee Will be Deleted from Employee List",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("The file has been deleted!", 
                    "success",
                  );  setTimeout(function(){
                    window.location.reload();
                   },1000);
                } else {
                  swal("File Is Not Deleted");
                }
              });
        // ;
        })
      }



    useEffect(() => {
        
        function getEmployees(){
        axios.get("http://localhost:5000/employee/all").then((res) => {
            setEmployees(res.data);
            }
        ).catch((err) => {
            alert(err.message);
        })
    }
    getEmployees();
    }, [])
// genarate pdf

const generatePDF = tickets => {

    const doc = new jspdf();
    const tableColumn = ["Employee Name", "DOB", "NIC"," Gender", "Address", "Email", "Contact No", ];
    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    tickets.map(ticket => {
        const ticketData = [
            ticket.EmployeeName,
            ticket.DOB,
            ticket.NIC,
            ticket.Gender,
            ticket.Address,
            ticket.Email,
            ticket.ContactNo,
             
        ];
        tableRows.push(ticketData);
    })
    doc.text("FoodCraves.lk", 70, 8).setFontSize(13);
    doc.text("Employee List Report", 14, 16).setFontSize(13);
    doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
    //right down width height
    //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Employee List Report.pdf");
};
    return (
        <>
     

     <div class="buttonn">
   <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(employee)} >Generate Report</button>
   <br></br>
  
   </div>
   
       <div class="lft">
<div class="card" >
<br></br>
   <br></br>
   <div class="head">
               
               <h3> Employee Details </h3>
               
               </div>
               
   <br></br>
   <br></br>
   
<input type="text" placeholder="Search.." className="form-control" style={{margintop:50,marginbottom:20,width:"50%"}}
      onChange = {(e) => {
          setsearchTerm(e.target.value);
      }}/>
    <br></br>

   <table class="table table-bordered">
        <table class="table table-hover" >
            
                   <thead>
                       
                       <tr>
                           <th >Employee ID</th>
                           <th >Employee Name</th>
                           <th>DOB</th>
                           <th >NIC</th>
                           <th >Gender</th>
                           <th>Address</th>
                           <th>Email</th>
                           <th>Contact No.</th>
                           <th>Delete</th>
                           <th>Edit</th>

                       </tr>
                   </thead>
                   <tbody>
                   {
                           employee.filter(val=>{
                               if(searchTerm === ''){
                                   return val;
                               }else if(
                                   val.EmployeeID.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    
                                    

                               ){
                                   return val;
                               }
                               }).map(function (f) {
                               return <tr>
                                   

                                   <td >{f. EmployeeID}</td>
                                   <td >{f.EmployeeName} </td>
                                   <td >{f.DOB} </td>
                                   <td >{f.NIC} </td>
                                   <td >{f.Gender} </td>
                                   <td >{f.Address} </td>
                                   <td >{f.Email} </td>
                                   <td >{f.ContactNo} </td>
                                    

                                   <td > <IconButton aria-label="delete"  onClick={() =>deleteEmployee  (f._id)}>
                                       
               
         <DeleteIcon fontSize="small" />
       </IconButton></td>

       <td >

     <button style={{backgroundColor: " #811616", WebkitTextFillColor:"white"}}> <Link to={"/edit/"+ f._id} className="nav-link" >Edit</Link></button>

    

       </td>

                               </tr>

                           })
                       }
                   </tbody>
                   </table>
               </table>
                     
               
                   
</div>
</div>

       </>
   
   )








}
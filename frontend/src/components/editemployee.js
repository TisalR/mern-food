//import React,{useState,useEffect} from "react";

import swal from 'sweetalert';
import './employee.css';
import React, { Component } from 'react';
import axios from 'axios';




 

export default class EditEmployee extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            EmployeeID: '',
            EmployeeName: '',
            DOB: '', 
            NIC: '',
            Gender: '',
            Address: '',
            Email: '',
            ContactNo: '',
            Employee: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employee/' + this.props.match.params.id)
            .then(res => {

                console.log(this.props.match.params.id)
                this.setState({
                    EmployeeID: res.data. EmployeeID,
                    EmployeeName: res.data.EmployeeName,
                    DOB: res.data.DOB,
                    NIC: res.data.NIC,
                    Gender: res.data.Gender,
                    Address: res.data.Address,
                    Email: res.data.Email,
                    ContactNo: res.data.ContactNo,

                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/employee/all')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Employee: response.data.map(Employee => Employee.EmployeeID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeEmployeeID(e) {
        this.setState({
            EmployeeID: e.target.value
        })
    }

    onChangeEmployeeName(e) {
        this.setState({
            EmployeeName: e.target.value
        })
    }

    onChangeDOB(e) {
        this.setState({
            DOB: e.target.value
        })
    }

   

    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        })
    }

    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onChangeContactNo(e) {
        this.setState({
            ContactNo: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Employee = {
            EmployeeID: this.state.EmployeeID,
            EmployeeName: this.state.EmployeeName,
            DOB: this.state.DOB,
            NIC: this.state.NIC,
            Gender: this.state.Gender,
            Address: this.state.Address,
            Email: this.state.Email,
            ContactNo: this.state.ContactNo,



        }

        console.log(Employee);

        axios.post('http://localhost:5000/employee/update/' + this.props.match.params.id, Employee)
            .then(res => console.log(res.data));
        alert("Edit Successfully")
        window.location = '/all';
    }

    
    render() {
        return (<div className = "container" >
            <h3><center> Edit Employee Details</center> </h3> 
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit = { this.onSubmit }>
            <div class="mb-3">
            <label > Employee Name: </label> 
             <input type = "text" required className = "form-control" value = { this.state.EmployeeName } onChange = { this.onChangeEmployeeName }/>
              </div> 
              <div class="mb-3">
            <label> Daye Of Birth: </label>
             <input type = "date"required className = "form-control"value = { this.state.DOB } onChange = { this.onChangeDOB}/> 
             </div> 
             <div class="mb-3">
            <label> NIC: </label> 
            <input type = "text"className = "form-control "value = { this.state.NIC }onChange = { this.onChangeNIC }/> 
            </div>

            <div class="mb-3">
            <label > Gender: </label>
             <input type = "text"className = "form-control"value = { this.state.Gender }onChange = { this.onChangeGender }/>
              </div>

              <div class="mb-3">
            <label > Address: </label>
             <input type = "text"className = "form-control"value = { this.state.Address }onChange = { this.onChangeAddress }/>
              </div>

            <div class="mb-3">
            <label > Email: </label>
             <input type = "email"className = "form-control"value = { this.state.Email }onChange = { this.onChangeEmail }/>
              </div>
           
              <div class="mb-3">
            <label > Contact No: </label>
             <input type = "integer" className = "form-control"value = { this.state.ContactNo }onChange = { this.onChangeContactNo }/>
              </div>

            <br>


            </br> 



        
            <div className = "form-group">
            <input type = "submit"value = "Update"className = "btn btn-primary"/>
            </div> 
            </form > 
            </div>

        
)
}
}
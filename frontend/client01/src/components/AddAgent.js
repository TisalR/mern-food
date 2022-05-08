import React, { useState } from "react";
import axios from "axios";


export default function AddAgent() {

    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [ename, setEname] = useState("");
    const [username, setUsername] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newOrder ={
            address,
            name,
            ename,
            username

        }

        axios.post("http://localhost:8070/delivery/add",newOrder).then(()=>{
            alert("New order Added")
            setAddress("");
            setName("");
            setEname("");
            setUsername("");


        }).catch((err)=>{
            alert(err)

        })
    }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="address" class="form-label">Order Address</label>
                    <input className="form-control" list="datalistOptions" id="address" placeholder="Enter address..." onChange={(e) => {
                        setAddress(e.target.value)
                    }
                    } />
                    <datalist id="datalistOptions">
                        <option value="kaluatara" />
                        <option value="Colombo" />
                        <option value="kadawatha" />
                        <option value="Panadura" />
                        <option value="Dematagoda" />
                    </datalist>
                </div>

                <div className="forrm-group">
                    <label for="name" class="form-label">Order name</label>
                    <input class="form-control" list="datalistOptions" id="name" placeholder="Enter order..." onChange={(e) => {
                        setName(e.target.value)

                    }
                    } />
                    <datalist id="datalistOptions">
                        <option value="Cheese and chicken" />
                        <option value="Pepper chicken barbeque" />
                        <option value="Cheese and pork" />
                        <option value="Veg" />
                        <option value="Veg" />
                    </datalist>
                </div>


                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email" onChange={(e) => {
                        setEname(e.target.value)

                    }
                    } />
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username and gender and add on" onChange={(e) => {
                        setUsername(e.target.value)
                    }
                    } />
                    <button class="btn btn-outline-secondary" type="button">Male</button>
                    <button class="btn btn-outline-secondary" type="button">Female</button>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Delivery status</label>
                    <textarea class="form-control" id="Enter here" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">submit</button>
            </form>
        </div>
    )
}
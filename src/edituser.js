import React, { useState } from 'react'
import Popup from "reactjs-popup";
import InputComponent from "./inputcomponent"
import ButtonComponent from './buttoncomponent'


const EditUser = () => {
    const [id, setId] = useState(1)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    // const [success,setSuccess]=useState(false)
    const data = {        
        "name": name,
        "age": age,
        "email": email
    }

    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:3001/user/` + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error("Error: ", error))
            .then(response => console.log("Success: ", JSON.stringify(response)));
            // setSuccess(true)
    }

    return (
        
        <div className="container">
        <form onSubmit={submit}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <label>Id</label>
                        </div>
                        <InputComponent type="number" value={id} onChange={(value) => setId(value)} />
                   
                </div>
                <div className="row">

                    <div className="col-lg-3">
                        <label>Name:</label>
                        </div>
                        <InputComponent type="text" value={name} onChange={(value) => setName(value)} />
                  
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <label>Age:</label>
                        </div>
                        <InputComponent type="number" value={age} onChange={(value) => setAge(value)} />
                   
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <label>Email:</label>
                        </div>
                        <InputComponent type="email" value={email} onChange={(value) => setEmail(value)} />
                   
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <ButtonComponent text="Edit User"></ButtonComponent>
                    </div>
                </div>
            </div>
        </form>
        </div>
        
    );
};


export default EditUser
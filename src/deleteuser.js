import React, { useState } from 'react'
import ButtonComponent from './buttoncomponent'
import InputComponent from "./inputcomponent"


const DeleteUser = () => {
    const [id, setId] = useState(1)
    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:3001/user/` + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .catch(error => console.error("Error: ", error))
            .then(response => console.log("Success:"));
    }

    return (

        <div className="container">
            <form onSubmit={submit}>

                <div className="row">
                    <div className="col-lg-3">
                        <label>Id:</label>
                    </div>
                    <InputComponent type="number" value={id} onChange={(value) => setId(value)} />

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ButtonComponent text="Delete User"></ButtonComponent>
                        {/* <button type="submit" className="btn btn-primary">Delete User</button> */}
                    </div>
                </div>

            </form>
        </div>

    );
};


export default DeleteUser
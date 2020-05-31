import React, { useState, useEffect } from 'react'
import EditUser from './edituser'
import DeleteUser from './deleteuser'
import Popup from "reactjs-popup";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const ViewUser = () => {
    const [userData, setuserData] = useState([]);

    
    // const routes = {
    //     "'/edit/:id'": () => <EditUser/>,
    //     "'/delete/:id'": () => <DeleteUser />
    // };

    useEffect(() => {
        fetch("http://localhost:3001/user")
            .then((res) => res.json())

            .then((data) => {

                setuserData(data);
            });
    }, []);



    return (
        <div className=".container">
            <Router>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>                                   
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to="/edit/:id">Edit User</Link>

                                        {/* <a href={'/edit/:id'}>Edit User</a> */}
                                    </td>
                                    <td>
                                        <Link to="/delete/:id">Delete User</Link>
                                        {/* <a href={'/delete/:id'}>Delete User</a> */}
                                    </td>
                                </tr>

                            ))
                        }


                    </tbody>

                </table>


                <Switch>

                    <Route path='/edit/:id' component={EditUser} />

                    <Route path='/delete/:id' component={DeleteUser} />
                </Switch>
            </Router>
        </div>
    )
}


export default ViewUser
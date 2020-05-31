import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewUser from './viewuser'
import './index'
import AddUser from './adduser';

const App =()=> {
  
  
  return (
    <div className="App">

      <h2>Add User</h2>
      <AddUser />
      <ViewUser />
    </div>

  );
}

export default App;

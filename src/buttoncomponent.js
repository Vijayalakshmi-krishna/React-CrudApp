import React from 'react'


const ButtonComponent = ({ type,text,onClick}) => (
    <button type="submit" className="btn btn-primary" >{text}</button>
);

export default ButtonComponent
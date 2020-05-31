import React from 'react'
const InputComponent = ({ value, onChange, type }) => (

    <div className="col-lg-6">
        <input type={type}
            value={value} className="form-control"
            onChange={(event) => onChange(event.target.value)}
        />
    </div>



);

export default InputComponent
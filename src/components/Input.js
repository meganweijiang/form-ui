import React from 'react';

const Input = (props) => (
  <div>
    <label>{props.label}</label>
    {props.error ? <label className="required">&nbsp;required</label> : ''}
    <input 
      value={props.value}
      id={props.id} 
      onChange={props.handleChange}
      className={props.error ? 'error-input' : ''}
    >
    </input>
  </div>
)

export default Input;
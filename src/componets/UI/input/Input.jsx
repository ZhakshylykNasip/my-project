import React from 'react'
 import "./Input.css"

export const Input = ({type,value,onChange,min ,max,step}) => {
  return (
    <div>
      <label> 
      <input   value={value} onChange={onChange}  className='inputs'   type={type} />
      </label>
    </div>
  )
}

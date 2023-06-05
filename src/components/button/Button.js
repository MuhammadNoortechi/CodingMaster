import React from 'react'
import "./Button.scss"
const Button = (props) => {
  return (
    <>
    <button className='btn-user px-3 py-2 text-capitalize mt-2 text-white'>{props.label}</button>
    </>
  )
}

export default Button
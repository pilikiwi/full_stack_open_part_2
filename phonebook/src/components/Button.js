import React from 'react'

const Button = ({ button, text }) =>{
    return(
        <div>
          <button type={button}>{text}</button>
        </div>
    )
}

export default Button
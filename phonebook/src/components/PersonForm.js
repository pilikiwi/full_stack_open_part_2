import React from 'react'

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange }) => {
    //try out inline styling
    const formStyle ={
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderStyle: 'groove',
        borderRadius: 5,
        margin: 15, 
    }


    return(
    <div style={formStyle}>
    name:   <input 
              value={newName}  
              onChange={handleNameChange}   
          /> 
    <br></br>
    number: <input 
              value={newNumber}
              onChange={handleNumberChange}   
          />
    </div>
        )
    }

export default PersonForm
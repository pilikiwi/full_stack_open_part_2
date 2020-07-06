import React from 'react'

const Person = ({ person, deleteButton }) =>{
     
    return(
        <li className='contactInfo'>
            {person.name} {person.number}
            <button onClick={deleteButton}>delete</button>
        </li>)
}

export default Person
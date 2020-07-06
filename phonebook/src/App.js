import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Button from './components/Button'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ addMessage, setAddMessage ] = useState(null)
  //const [ searchName, setSearchName ] = useState('')

  useEffect(()=>{
     personService
     .getAll()
     .then(initialPersons=>{
       setPersons(initialPersons) 
     })
  }, [])

  
  const addContact = (event) =>{
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber,
      }
      //Check and see if there is duplicate name in the phonebook
      persons.map(person=>person.name).includes(newName)  
      ?alert(`${newName} is already added to phonebook`)  
      :personService
      .create(personObject)
      .then(returnedPerson=>{
        setPersons(persons.concat(returnedPerson))
        setTimeout(() => {
          setAddMessage(null)
        }, 3000);
        setAddMessage(`${personObject.name} added to the contact list`)
        setNewName('')
        setNewNumber('')
      })

  }
  
  const handleNameChange = (event) =>{
      setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }


//Unfinished Search Function
/*
const filterName = (arr, query) =>{
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !==-1)
}

const handleNameFilter = (event) =>{
  setSearchName(event.target.value)
  //const result = persons.includes(person => person.name === searchName)
  //console.log(result)
}
const filterPerson = filterName(persons.map(person=>person.name), searchName) 
<div>
filter shown with<input
                  value={searchName}
                  onChange={handleNameFilter}  
                  />
</div>
*/

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={addMessage} />
       <h2>Add a new</h2>
      <form onSubmit={addContact}>
      <PersonForm newName={newName} handleNameChange={handleNameChange}
                  newNumber={newNumber} handleNumberChange={handleNumberChange}
        />
      <Button button={'submit'} text={'add'}/>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map( (person, i)=> 
      <Person 
              key={i}
              person={person} 
              deleteButton={
                ()=>personService.deletePerson(person.id, person.name)
              } 
              />
      )}
      </ul>
    </div>
  )
}

export default App
import React from 'react';

const Course = ({ course, exercises }) => {
  
    return (
      <div>
        <h2>{course.name}</h2>
        {course.parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>)}
        <p>total of &nbsp;    
        {course.parts.map(part=>part.exercises).reduce((sum , exercise) => sum + exercise, 0)}
        &nbsp; exercises</p>
      </div>
      
    )
  }

  export default Course
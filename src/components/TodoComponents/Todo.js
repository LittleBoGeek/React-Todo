import React from 'react'

      //Item
const  Todo = props => {
 return (
     <div className={`task${props.task.completed ?"  completed" : " "}`} onClick={event => {
      console.log(event)
      props.toggle(props.task.id);
           }}>
 <h2 className="task"> {props.task.task}</h2>


 </div>

  ) }

export default Todo
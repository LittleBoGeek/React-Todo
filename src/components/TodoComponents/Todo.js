import React from 'react';

      //Item
const  Todo = props => {
 return (
     <div onClick={event => {
console.log(event)
props.toggle(props.task.id);
     }}
     className={`task{props.task.compleed ?"  completed" : ""}`}>
 <h2> {props.task.task}</h2>
 </div>

  ) }

export default Todo
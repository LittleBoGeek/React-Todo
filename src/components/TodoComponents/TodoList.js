// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import  React from 'react';
// import Item from '/Users/nadiachilds/Desktop/React-Todo/src/components/TodoComponents/Todo.js';
// import App from '/Users/nadiachilds/Desktop/React-Todo/src/App.js';
import ToDo from './Todo';
const TodoList = props => {
return (
    <div className="todo-list">
    {props.tasks.map(task => (
        <ToDo key={task.id}
        task={task}
        toggle={props.toggle}/>
    ))}
    <button onClick={props.clearTasks}>
    Remove Completed</button>

    </div>
)
}

export default TodoList







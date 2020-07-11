import React from 'react';
import ReactDOM from "react-dom";
// import components here 
//import Item from '/Users/nadiachilds/Desktop/React-Todo/src/components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm'
  import TodoList from './components/TodoComponents/TodoList'
const tasks = [
  {
  task: 'Organize Garage',
  id: 5,
  completed: false

  },
  {
    task: 'Learn React',
    id: 4,
    completed:false
  },
{
  task: 'Go to bed',
  id:  3,
  completed:false,

},
{
  task: "Wake up",
  id: 2,
  completed:false,

},
{
  task:"Repeat",
  id: 1,
  completed:false,
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){ 
super();
this.state = { 
  toDoList:tasks
};

  }
  newTask = (newTask) => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        { task: newTask, completed: false, id: Math.random()}
      ]
    };
    this.setState(newState);
    console.log(newState)
  };

toggle = id => {
  const newState = {
    ...this.state,
    toDoList:this.state.toDoList.map(task => {
      if (task.id === id ) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    })
  }
  this.setState(newState);
};
clearTasks = () => {
  const newState = {
    ...this.state, 
    toDoList: this.state.toDoList.filter( task => {
      return !task.completed;
    })
  };
  this.setState(newState)
};


render() {
  return (
    <div>
      <h1> To Do </h1>
      <TodoForm newTask={this.newTask} />
      <TodoList 
      tasks = {this.state.toDoList}
      toggle = {this.toggle}
      clearTasks = {this.clearTasks}
      />
   </div>   
  )
}


}

export default App

    
  




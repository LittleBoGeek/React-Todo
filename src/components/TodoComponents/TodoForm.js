import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask:''
        };
    }
    handleChange = e => {
        this.setState({...this.state,newTask:e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.newTask(this.state.newTask);
            this.setState({...this.state, newTask:''});

    };
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
            <input  onChange={this.handleChange}
            type="text"
            name="task"
            value={this.state.newTask}  />      
            <button type='Submit'> Submit if you dare</button>
            </form>)
    }
}

export default ToDoForm
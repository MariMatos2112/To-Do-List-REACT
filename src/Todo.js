import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    state = {
        text: this.props.text,
        id: this.props.id, 
        display: 'none', 
        lineThrough: 'none' 
    }

    handleRemove = () => this.props.removeItem(this.props.id);

    handleEdit = (e) => {
        e.preventDefault();
        this.props.editItem(this.state);
        this.setState({
            display: 'none'
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showForm = () => {
        if(this.state.lineThrough === 'none'){
            this.setState({
                display: 'flex'
            })
        }
    }

    hideForm = (e) => {
        e.preventDefault();
        this.setState({
            display: 'none'
        })
    }

    completeTodo = () => {
        this.setState({
            lineThrough: 'line-through'
        })
    }

    render() {
        return (
            <div>
                <div className="Todo">
                    <button onClick={this.completeTodo} className="done">DONE</button>
                    <span style={{textDecoration: this.state.lineThrough}}>{this.props.text}</span>
                    <button onClick={this.showForm} className="edit">Edit</button>
                    <button onClick={this.handleRemove} className="delete">Delete</button>
                </div>
                <form onSubmit={this.hideForm} style={{display: this.state.display}} className="EditTodo">
                    <input name="text" onChange={this.handleChange} value={this.state.text} />
                    <button onClick={this.handleEdit} className="save">Save</button>
                    <button className="cancel">Cancel</button>
                </form>
            </div>
        );
    }
}

export default Todo;
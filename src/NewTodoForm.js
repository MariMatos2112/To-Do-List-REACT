import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            id: uuidv4()
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            text: '',
            id: uuidv4()
        })
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <input onChange={this.handleChange} name="text" placeholder="New to do..." value={this.state.text} required />
                    <button className="add">Add item</button>
                </div>
            </form>
        );
    }
}

export default NewTodoForm;
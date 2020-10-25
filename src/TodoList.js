import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    state = {
        items: [
            {text: 'Clean the house', id: uuidv4()},
            {text: 'Play piano', id: uuidv4()}
        ]
    }

    addItem = (item) => {
        this.setState(curState => ({
            items: [...curState.items, item] 
        }))
    }

    removeItem = (itemID) => {
        const filtered = this.state.items.filter(el => {
            return (el.id !== itemID) 
        })
        this.setState({
            items: filtered
        })
    }

    editItem = (item) => {
        const editedList = this.state.items.map(el => {
            if(item.id === el.id) el.text = item.text;
            return {text: el.text, id: el.id}
        })
        this.setState({
            items: editedList
        })
    }

    render() {
        const list = this.state.items.map(el => <Todo editItem={this.editItem} removeItem={this.removeItem} text={el.text} key={el.id} id={el.id}/>)

        return (
            <div>
                <NewTodoForm addItem={this.addItem}/>
                {list}
            </div>
        );
    }
}

export default TodoList;
import React from 'react';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import {TodoTypes} from "./types";

class Todo extends React.Component<TodoTypes.IProps, TodoTypes.IState> {

    constructor(props: TodoTypes.IProps){
        super(props);
        this.state = {
            todos: []
        }
    }

    public handleAddNewTodo = (input:string) => {
        this.setState((oldState) => {
          return { todos: [input, ...oldState.todos] }
        });
    }
    handleEditTodo = (index:number, todo:string) => {
        let todos = [...this.state.todos];
        todos[index] = todo;
        this.setState({todos});
    }

    handleDeleteTodo = (index:number) => {
        let todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({todos});
    }


    render() {
        const {todos} = this.state;
        console.log(todos);
        return (
            <div>
                <TodoForm onAddTodo={this.handleAddNewTodo}/>
                <TodoList todos={todos} onDeleteTodo={this.handleDeleteTodo} onEditTodo={this.handleEditTodo}/>
            </div>
        );
    }
}

export default Todo;

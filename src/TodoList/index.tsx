import React from 'react';
import {TodoListTypes} from "./types";
import TodoListItem from "../TodoListItem";

class TodoList extends React.Component<TodoListTypes.IProps, TodoListTypes.IState> {
    constructor(props:TodoListTypes.IProps){
        super(props);
    }
    render() {
        const {todos, onDeleteTodo, onEditTodo} = this.props;
        return (
            <div>
                {
                    todos.map( (todo, index) => (
                        <TodoListItem
                            onEditTodo={onEditTodo}
                            onDeleteTodo={onDeleteTodo}
                            id={index}
                            value={todo}
                        />
                    ) )
                }
            </div>
        );
    }
}

export default TodoList;

import * as React from 'react';
import './index.css';
import {TodoFormTypes} from "./types";

class TodoForm extends React.Component<TodoFormTypes.IProps, TodoFormTypes.IState> {
    constructor(props: TodoFormTypes.IProps) {
        super(props);
        this.state = {
            inputValue: '',
        }

    }
    public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value,
        })
    }

    public onAddTodo = () => {
        this.props.onAddTodo(this.state.inputValue);
        this.setState({
            inputValue:""
        })
    }

    render(): React.ReactNode {
        const { inputValue } = this.state;
        return (
            <div className="todo-form" >
                <input
                    className="todo-form__input"
                    value={inputValue}
                    onChange={this.onInputChange}
                />
                <button
                    className="todo-form__btn"
                    onClick={this.onAddTodo}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default TodoForm;
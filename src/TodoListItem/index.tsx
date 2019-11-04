import * as React from 'react';
import {TodoListItemTypes} from "./types";

class TodoListItem extends React.Component<TodoListItemTypes.IProps, TodoListItemTypes.IState> {
    constructor(props: TodoListItemTypes.IProps) {
        super(props);
        this.state = {
            inputValue: this.props.value,
            disabled: true,
            done:false
        }
    }

    componentWillReceiveProps(nextProps: Readonly<TodoListItemTypes.IProps>, nextContext: any): void {
        if (this.state.inputValue !== nextProps.value) {
            this.setState({
                inputValue: nextProps.value
            })
        }
    }


    public handleEditClick = () => {
        const { value,onEditTodo, id } = this.props;
        this.setState({
            disabled: false,
        })
    }


    public handleSaveClick = () => {
        const { value, onEditTodo, id } = this.props;
        this.setState({
            disabled: true,
        })
        onEditTodo( id, this.state.inputValue );
    }

    public handleDeleteClick = () => {
        const { onDeleteTodo, id } = this.props;
        onDeleteTodo(id);
    }

    public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value,
        })
    }

    render(): React.ReactNode {
        const { disabled, done, inputValue } = this.state;
        const { value } = this.props;
        return (
            <div className={`todo-item ${done ? 'todo-item--done' : ''} `} >
                <input
                    className={`todo-item__input ${disabled ? 'todo-item__input--disabled' : ''} `}
                    value={inputValue}
                    disabled={disabled}
                    onChange={this.onInputChange}
                />
                <div className="todo-item__actions">
                    {disabled ?
                        <button
                            className="button"
                            onClick={this.handleEditClick}
                        >
                            Edit
                        </button> :
                        <button
                            className="button"
                            onClick={this.handleSaveClick}
                        >
                            Save
                        </button>
                    }
                    <button className="button" onClick={this.handleDeleteClick} >Delete</button>
                </div>
            </div>
        );
    }
}

export default TodoListItem;
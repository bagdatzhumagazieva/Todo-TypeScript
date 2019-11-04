export namespace TodoFormTypes {
    export interface IProps {
        onAddTodo(value: string): void;
    }

    export interface IState {
        inputValue: string;
    }
}
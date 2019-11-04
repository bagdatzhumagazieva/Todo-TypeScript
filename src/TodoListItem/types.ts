export namespace TodoListItemTypes {
    export interface IProps {
        id: number;
        value: string;
        onDeleteTodo(id: number): void;
        onEditTodo(id:number, value:string):void,
    }

    export interface IState {
        done: boolean;
        inputValue: string,
        disabled: boolean;
    }
}
export namespace TodoListTypes {
    export interface IProps {
        todos: string[],
        onDeleteTodo(id:number):void,
        onEditTodo(id:number, text:string):void
    }

    export interface IState {
    }
}
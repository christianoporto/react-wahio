export const ADD_TODO = "ADD_TODO";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const DELETE_TODO = "DELETE_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";

export interface ITodo {
    id: string;
    title: string;
    dateCreated: Date;
    completed: boolean;
}

export interface IAddTodo {
    type: typeof ADD_TODO;
    value: ITodo;
}

export interface IUpdateTodo {
    type: typeof UPDATE_TODO;
    value: ITodo;
}

export interface IDeleteTodo {
    type: typeof DELETE_TODO;
    todoId: string;
}

export type TodoTypes = IAddTodo | IDeleteTodo | IUpdateTodo;

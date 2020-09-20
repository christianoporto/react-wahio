export const SET_TODO = "SET_TODO";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const DELETE_TODO = "DELETE_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";

export const TODO_STORE_KEY = "todos";

export interface ITodo {
    id: string;
    title: string;
    dateCreated: Date;
    completed: boolean;
}

export interface ISetTodo {
    type: typeof SET_TODO;
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

export type TodoTypes = ISetTodo | IDeleteTodo | IUpdateTodo;

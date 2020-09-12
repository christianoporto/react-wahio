export const SET_TODO = "SET_TODO";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const DELETE_TODO = "DELETE_TODOS";

export interface ITodo {
    id: string;
    title: string;
    description: string;
    dateCreated: Date;
}

export interface setTodoType {
    type: typeof SET_TODO;
    value: ITodo;
}

export interface deleteTodo {
    type: typeof DELETE_TODO;
    todoId: string;
}

export type TodoTypes = setTodoType | deleteTodo;

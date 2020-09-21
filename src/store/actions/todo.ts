import { Dispatch } from "react";
import { ITodoState } from "../reducers/todo";
import { DELETE_TODO, ITodo, ADD_TODO, TodoTypes, UPDATE_TODO } from "../types/todo";

export interface ITodoActions {
    addTodo: (todo: ITodo) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (todo: ITodo) => void;
}

export const useActions = (state: ITodoState, dispatch: Dispatch<TodoTypes>): ITodoActions => ({
    addTodo: (todo: ITodo) => {
        dispatch({
            type: ADD_TODO,
            value: todo,
        });
    },
    deleteTodo: (id: string) => {
        dispatch({
            type: DELETE_TODO,
            todoId: id,
        });
    },
    updateTodo: (todo: ITodo) => {
        dispatch({
            type: UPDATE_TODO,
            value: todo,
        });
    },
});

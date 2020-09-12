import { Dispatch } from "react";
import { ITodoState } from "../reducers/todo";
import { DELETE_TODO, ITodo, SET_TODO, TodoTypes } from "../types/todo";

export interface ITodoActions {
    setTodo: (todo: ITodo) => void;
    deleteTodo: (id: string) => void;
}

export const useActions = (state: ITodoState, dispatch: Dispatch<TodoTypes>): ITodoActions => ({
    setTodo: (todo: ITodo) => {
        dispatch({
            type: SET_TODO,
            value: todo,
        });
    },
    deleteTodo: (id: string) => {
        dispatch({
            type: DELETE_TODO,
            todoId: id,
        });
    },
});

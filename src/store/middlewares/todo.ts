import { Dispatch } from "react";
import { ADD_TODO, TodoTypes } from "../types/todo";

export const applyMiddleware = (dispatch: Dispatch<TodoTypes>) => (action: TodoTypes) => {
    switch (action.type) {
        case ADD_TODO:
            return dispatch(action);
        default:
            dispatch(action);
    }
};

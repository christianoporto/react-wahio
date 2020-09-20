import { Dispatch } from "react";
import { SET_TODO, TodoTypes } from "../types/todo";

export const applyMiddleware = (dispatch: Dispatch<TodoTypes>) => (action: TodoTypes) => {
    switch (action.type) {
        case SET_TODO:
            return dispatch(action);
        default:
            dispatch(action);
    }
};

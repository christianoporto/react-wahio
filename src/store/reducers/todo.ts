import { DELETE_TODO, ITodo, SET_TODO, TodoTypes } from "../types/todo";

export interface ITodoState {
    todos: ITodo[];
}

export const initStateBase: ITodoState = {
    todos: [],
};

export const todoReducer = (state: ITodoState, action: TodoTypes): ITodoState => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todos: [...state.todos, action.value],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((x) => x.id !== action.todoId),
            };

        default:
            return state;
    }
};

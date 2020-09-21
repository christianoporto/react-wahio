import { DELETE_TODO, ITodo, ADD_TODO, TodoTypes, TODO_STORE_KEY, UPDATE_TODO } from "../types/todo";

export interface ITodoState {
    todos: ITodo[];
}

const initStateBase: ITodoState = {
    todos: [{ id: "_1", title: "I am a basic task", dateCreated: new Date(), completed: false }],
};

export const initState: ITodoState = JSON.parse(localStorage.getItem(TODO_STORE_KEY) as string) || initStateBase;

export const todoReducer = (state: ITodoState, action: TodoTypes): ITodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.value, ...state.todos],
            };
        case UPDATE_TODO:
            let todosCopy: ITodo[] = [];
            state.todos.forEach((element) => {
                if (element.id === action.value.id) {
                    todosCopy.push(action.value);
                } else {
                    todosCopy.push(element);
                }
            });
            return {
                ...state,
                todos: todosCopy,
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

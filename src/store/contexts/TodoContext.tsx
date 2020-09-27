import React, { createContext, useReducer, useEffect } from "react";

import { applyMiddleware } from "../middlewares/todo";
import { ITodoActions, useActions } from "../actions/todo";
import { initState, ITodoState, todoReducer } from "../reducers/todo";
import { saveData, StoreKey } from "..";

interface IContextProps {
    todoState: ITodoState;
    todoActions: ITodoActions;
}

export const TodoContext = createContext({} as IContextProps);

const TodoContextProvider = (props: any) => {
    const [todoState, dispatch] = useReducer(todoReducer, initState);
    useEffect(() => {
        saveData(StoreKey.todo, todoState);
    }, [todoState]);

    const todoActions = useActions(todoState, applyMiddleware(dispatch));

    return <TodoContext.Provider value={{ todoState, todoActions }}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;

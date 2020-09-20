import React, { createContext, useReducer, useEffect } from "react";
import { APP_SETTINGS_KEY } from "./types";
import { IAppSettingsState, appSettingsReducer, initState } from "./reducer";
import { applyMiddleware } from "./middleware";
import { ISettingsActions, useActions } from "./actions";

interface IContextProps {
    appSettingsState: IAppSettingsState;
    appSettingsActions: ISettingsActions;
}

export const AppSettingsContext = createContext({} as IContextProps);

const AppSettingsContextProvider = (props: any) => {
    const [appSettingsState, dispatch] = useReducer(appSettingsReducer, initState);
    useEffect(() => {
        localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(appSettingsState));
    }, [appSettingsState]);

    const appSettingsActions = useActions(appSettingsState, applyMiddleware(dispatch));

    return (
        <AppSettingsContext.Provider value={{ appSettingsState, appSettingsActions }}>
            {props.children}
        </AppSettingsContext.Provider>
    );
};

export default AppSettingsContextProvider;

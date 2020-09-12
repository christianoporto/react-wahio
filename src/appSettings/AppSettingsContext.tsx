import React, { createContext, useReducer, Dispatch, useEffect } from "react";
import { AppSettingsTypes, APP_SETTINGS_KEY } from "./types";
import { IAppSettingsState, appSettingsReducer, initState } from "./reducer";

interface IContextProps {
    appSettingsState: IAppSettingsState;
    dispatch: Dispatch<AppSettingsTypes>;
}

export const AppSettingsContext = createContext({} as IContextProps);

const AppSettingsContextProvider = (props: any) => {
    const [themeState, dispatch] = useReducer(appSettingsReducer, initState);
    useEffect(() => {
        localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(themeState));
    }, [themeState]);
    return (
        <AppSettingsContext.Provider value={{ appSettingsState: themeState, dispatch }}>
            {props.children}
        </AppSettingsContext.Provider>
    );
};

export default AppSettingsContextProvider;

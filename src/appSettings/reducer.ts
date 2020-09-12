import { AppSettingsTypes, CHANGE_THEME, THEME_LIGHT, THEME_DARK, APP_SETTINGS_KEY } from "./types";

export interface IAppSettingsState {
    theme: string;
}

export const initStateBase: IAppSettingsState = {
    theme: THEME_LIGHT,
};

export const initState: IAppSettingsState = JSON.parse(localStorage.getItem(APP_SETTINGS_KEY) as string) || initStateBase;

const loadNewTheme = (state: IAppSettingsState): IAppSettingsState => {
    const newTheme = state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    return { ...state, theme: newTheme };
};

export const appSettingsReducer = (state: IAppSettingsState, action: AppSettingsTypes): IAppSettingsState => {
    switch (action.type) {
        case CHANGE_THEME:
            return loadNewTheme(state);

        default:
            return state;
    }
};

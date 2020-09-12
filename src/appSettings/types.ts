export const CHANGE_THEME = "appSettings/CHANGE_THEME";
export const SET_LIST_PRODUCT_SHAPE = "appSettings/SET_LIST_PRODUCT_SHAPE";

export const THEME_TITLE = "THEME";
export const THEME_LIGHT = "LIGHT";
export const THEME_DARK = "DARK";
export const APP_SETTINGS_KEY = "appSettings";

export interface ChangeThemeType {
    type: typeof CHANGE_THEME;
}

export type AppSettingsTypes = ChangeThemeType;

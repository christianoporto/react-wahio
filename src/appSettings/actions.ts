import { AppSettingsTypes, CHANGE_THEME,  } from "./types";
import { Dispatch } from "react";

export const changeTheme = (dispatch: Dispatch<AppSettingsTypes>) => {
    return dispatch({ type: CHANGE_THEME });
};

export interface IThemePalette {
    shadowDark: string;
    themeDarker: string;
    themeDark: string;
    themeDarkAlt: string;
    themePrimary: string;
    themeSecondary: string;
    themeTertiary: string;
    themeLight: string;
    themeLighter: string;
    themeLighterAlt: string;
    black: string;
    neutralDark: string;
    neutralPrimary: string;
    neutralPrimaryAlt: string;
    neutralSecondary: string;
    neutralTertiary: string;
    white: string;
    neutralTertiaryAlt: string;
    neutralLighterAlt: string;
    neutralLighter: string;
    neutralLight: string;
    neutralQuaternaryAlt: string;
    neutralQuaternary: string;
}

export const lightTheme: IThemePalette = {
    shadowDark: "rgb(175 175 175 / 38%)",
    themePrimary: "#2962ff",
    themeLighterAlt: "#f6f9ff",
    themeLighter: "#dde6ff",
    themeLight: "#bfd0ff",
    themeTertiary: "#7ea1ff",
    themeSecondary: "#4375ff",
    themeDarkAlt: "#2558e6",
    themeDark: "#1f4ac2",
    themeDarker: "#17378f",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
};

export const darkTheme: IThemePalette = {
    shadowDark: "rgb(0 0 0 / 52%)",
    themePrimary: "#0091ff",
    themeLighterAlt: "#00060a",
    themeLighter: "#001729",
    themeLight: "#002b4d",
    themeTertiary: "#005799",
    themeSecondary: "#007fe0",
    themeDarkAlt: "#199cff",
    themeDark: "#3dabff",
    themeDarker: "#70c1ff",
    neutralLighterAlt: "#282828",
    neutralLighter: "#313131",
    neutralLight: "#3f3f3f",
    neutralQuaternaryAlt: "#484848",
    neutralQuaternary: "#4f4f4f",
    neutralTertiaryAlt: "#6d6d6d",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#1f1f1f",
};

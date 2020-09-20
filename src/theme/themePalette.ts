export interface IThemePalette {
    shadowDark: string;
    primary: string;
    background: string;
    backgroundDark: string;
    backgroundDarker: string;
    text: string;
    textDark: string;
}

export const lightTheme: IThemePalette = {
    shadowDark: "rgb(175 175 175 / 38%)",
    primary: "#2962ff",
    background: "white",
    backgroundDark: "#e6e6e6",
    backgroundDarker: "grey",
    text: "black",
    textDark: "black",
};

export const darkTheme: IThemePalette = {
    shadowDark: "rgb(0 0 0 / 52%)",
    primary: "#0091ff",
    background: "#1d1d1d",
    backgroundDark: "#313131",
    backgroundDarker: "grey",
    text: "white",
    textDark: "Grey",
};

import styled from "styled-components";
import { IThemePalette } from "../../theme/themePalette";

interface IThemeProps {
    theme: {
        palette: IThemePalette;
    };
}
interface IFocusProps extends IThemeProps {
    focus: boolean;
}

export const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.palette.backgroundDark};

    box-shadow: 0px 0px 0px transparent;

    ${(props: IFocusProps) =>
        props.focus &&
        `
           
            background: ${props.theme.palette.background};
            box-shadow: ${props.theme.palette.shadow}
        `};
`;

export const CustomInput = styled.input`
    padding: 10px;
    width: 100%;
    outline: none;
    background: transparent;
    font-weight: 500;
    color: ${(props) => props.theme.palette.text};
    border: 0px;
`;
export const ButtonAdd = styled.button`
    padding: 10px;
    border: 0;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: ${(props) => props.theme.palette.primary};
    &:hover {
        background: ${(props) => props.theme.palette.backgroundDark};
    }
`;

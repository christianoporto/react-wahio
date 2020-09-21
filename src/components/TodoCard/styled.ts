import styled from "styled-components";
import { IThemePalette } from "../../theme/themePalette";

interface IThemeProps {
    theme: {
        palette: IThemePalette;
    };
}
interface IActiveProps extends IThemeProps {
    active: boolean;
}
interface IEditModeProps extends IThemeProps {
    editMode: boolean;
}

export const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    padding: 7px 10px;
    border-radius: 7px;
    transition: all 0.2s;

    .actions {
        visibility: hidden;
    }

    &:hover {
        box-shadow: ${(props) => props.theme.palette.shadow};
        .actions {
            visibility: visible;
        }
    }

    ${(props: IEditModeProps) =>
        props.editMode &&
        `
        box-shadow: ${props.theme.palette.shadow};
        `}
`;

export const ButtomComplete = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 40px;
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.backgroundDarker};
    background: ${(props: IActiveProps) => (props.active ? props.theme.palette.primary : props.theme.palette.background)};
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    transition: all 0.2s;
    ${(props: IActiveProps) =>
        `background:  ${props.active ? props.theme.palette.primary : props.theme.palette.background};
     border: 1px solid ${props.active ? "transparent" : props.theme.palette.backgroundDarker};
        `}
    img {
        width: 15px;
        margin: auto;
    }
`;
export const TodoBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .date {
        font-size: 0.9rem;
        color: ${(props) => props.theme.palette.textLight};
    }
    ${(props: IActiveProps) =>
        props.active &&
        `
            span, input { 
                text-decoration: line-through;
                color: ${props.theme.palette.textLight};
                }
                input {
                    &:disabled {
                        background:${props.theme.palette.background};
                    }
                }
  
  `}
`;

export const InputTitle = styled.input`
    outline: none;
    border: 1px solid transparent;
    font-size: 1rem;
    transition: padding 0.2s;
    box-sizing: border-box;
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text};
    margin-right: 10px;
    ${(props: IActiveProps) =>
        props.active &&
        `
        padding: 5px 15px;
        font-size: 1.2rem;
        border-radius: 20px;
        outline: none;
        font-weight: 500;
    `}
`;

export const ButtonsContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    grid-gap: 10px;
    button {
        background: ${(props) => props.theme.palette.background};
        border: 1px solid transparent;
        outline: none;
        padding: 5px 10px;
        border-radius: 4px;
        color: ${(props) => props.theme.palette.textLight};
        transition: all 0.1s;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 30px;
        transition: border 0.2s;
        &:hover {
            border-color: ${(props) => props.theme.palette.backgroundDark};
        }

        svg {
            width: 20px;
            height: 20px;
            fill: ${(props) => props.theme.palette.textLight};
        }
    }
    .edit {
        &:hover {
            color: ${(props) => props.theme.palette.primary};
            svg {
                fill: ${(props) => props.theme.palette.text};
            }
        }
    }
    .delete {
        &:hover {
            color: #f44336;
            svg {
                fill: #f44336;
            }
        }
    }
`;

export const EditTitle = styled.span`
    color: ${(props) => props.theme.palette.textLight};
    padding-left: 10px;
    font-size: 0.9rem;
`;

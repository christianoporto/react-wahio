import styled from "styled-components";

import { IThemePalette } from "../../theme/themePalette";

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  padding: 7px 10px;
  border-radius: 7px;

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.palette.backgroundDark};
  }
`;

interface IButtonProps {
  active: boolean;
  theme: {
    palette: IThemePalette;
  };
}

export const ButtomComplete = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  outline: none;
  border: 1px solid ${(props) => props.theme.palette.backgroundDarker};
  background: ${(props: IButtonProps) => (props.active ? props.theme.palette.primary : props.theme.palette.background)};
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.2s;
  ${(props: IButtonProps) =>
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

  .date {
    font-size: 0.9rem;
    color: ${(props) => props.theme.palette.textLight};
  }
  ${(props: IButtonProps) =>
    props.active &&
    `
  span { 
      text-decoration: line-through;
      color: ${props.theme.palette.textLight};
    }
  
  `}
`;

export const DeleteContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  button {
    background: ${(props) => props.theme.palette.background};
    border: 1px solid ${(props) => props.theme.palette.backgroundDark};
    outline: none;
    padding: 5px 10px;
    border-radius: 4px;
    color: ${(props) => props.theme.palette.textLight};
    transition: all 0.1s;
    cursor: pointer;
    &:hover {
      color: #f44336;
      background: rgba(244, 67, 54, 0.185);
      border-color: transparent;
    }
  }
`;

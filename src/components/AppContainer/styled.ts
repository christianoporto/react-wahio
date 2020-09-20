import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;



export const MenuContainer = styled.div`
    display: flex;
    width: 100%;
    background: ${(props) => props.theme.palette.background};
    border-bottom: 1px solid ${(props) => props.theme.palette.backgroundDark};
`;

export const Menu = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    grid-gap: 20px;
    height: 70px;
    margin: auto;
    justify-content: space-between;
    padding: 0px 18px;
`;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 10px;
`;

export const ImgLogo = styled.img`
    width: 25px;
    height: 25px;
`;

export const LanguageLabel = styled.span`
    padding: 0px 12px;
    .lang-active {
        color: ${(props) => props.theme.palette.primary};
    }
`;

export const LanguegeContainer = styled.div`
    width: 40px;
    height: 40px;
`;

export const ContentContainer = styled.div`
max-width: 800px;
width: 100%;
margin: auto;
`;

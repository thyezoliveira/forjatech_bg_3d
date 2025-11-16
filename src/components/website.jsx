import styled from "styled-components"

const MainStyled = styled.main`
    height: 100vh;
    background: ${$props => $props.bgColor};
`;

export default function Website({children, bgColor}){
    return (
        <MainStyled bgColor={bgColor}>
            {children}
        </MainStyled>
    )
}
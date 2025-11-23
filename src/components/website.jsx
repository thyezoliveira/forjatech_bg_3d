import styled from "styled-components"

const MainStyled = styled.main`
    height: 100vh;
    background: ${$props => $props.bgcolor};
    backdrop-filter: brightness(75%);
`;

export default function Website({children, bgcolor}){
    return (
        <MainStyled bgcolor={bgcolor}>
            {children}
        </MainStyled>
    )
}
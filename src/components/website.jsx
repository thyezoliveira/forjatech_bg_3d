import styled from 'styled-components';

const MainStyled = styled.main`
    height: 100vh;
    background: ${props => props.bgcolor};
    backdrop-filter: brightness(75%);
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Website({ children, bgcolor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }) {
    return (
        <MainStyled bgcolor={bgcolor}>
            {children}
        </MainStyled>
    );
}
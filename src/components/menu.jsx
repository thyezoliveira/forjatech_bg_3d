import styled from "styled-components"

const MenuStyled = styled.section`
    background-color: rgba(0,0,0,0.9);
    color: #FF0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        margin: 0;
        font-size: 30px;
    }
`;

const MenuButton = styled.button`
    color: #FF0;
    background-color: rgba(0,0,0,0.4);
    border: dashed 1px #FF0;
    padding: 32px;
    width: 100%;
    max-width: 200px;
    margin: 8px 0;
`;

export default function Menu({ setEstado }){
    return (
        <MenuStyled>
            <MenuButton onClick={() => setEstado(1)}>.INICIO</MenuButton>
            {/* <MenuButton onClick={() => setEstado(3)}>.PROJETOS</MenuButton> */}
            <MenuButton onClick={() => setEstado(4)}>.CONTATO</MenuButton>
            ---
            <MenuButton onClick={() => setEstado(1)}>FECHAR</MenuButton>
        </MenuStyled>
    )
}
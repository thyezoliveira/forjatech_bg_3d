import styled from "styled-components"

const MenuStyled = styled.section`
    background-color: rgba(0,0,0,0.6);
    color: #FF0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 10;
    position: fixed;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    right: 0;
    transition: all .6s ease;

    div.division{
        border-bottom: dashed 1px #FF0;
        width: 100%;
    }
`;

export const MenuButton = styled.button`
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-size: 32px;
    letter-spacing: -4px;
    color: #FF0;
    background-color: transparent;
    border: none;
    padding: 16px 0;
    width: 100%;
    max-width: 200px;
    margin: 8px 0;
    text-align: center;
`;

export default function Menu({ menuIsOpen, setMenuIsOpen, setEstado }){
    return (<>
        {(menuIsOpen) ?
        <MenuStyled>
            <MenuButton onClick={() => {setEstado(1); setMenuIsOpen(false)}}>INICIO</MenuButton>
            <MenuButton onClick={() => {setEstado(4); setMenuIsOpen(false)}}>CONTATO</MenuButton>
            <div className="division"></div>
            <MenuButton onClick={() => setMenuIsOpen(false)}>FECHAR</MenuButton>
        </MenuStyled> : <></>}</>
    )
}
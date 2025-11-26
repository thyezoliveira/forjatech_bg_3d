import styled from "styled-components"

const HeaderStyled = styled.header`
    background-color: rgba(1, 1, 1, .7);
    padding: 0 16px;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    backdrop-filter: blur(8px);
    `;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: dashed 1px #FF0;
    margin: 0 auto;
    width: 100%;
    padding: 16px 0;

    img{
        cursor: pointer;
        width: 96px;

        @media (min-width: 725px){
            width: 128px;
        }
    }

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1024px){
        max-width: 1024px;
    }
`;

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    color: #FF0;
    font-size: 30px;
    cursor: pointer;

    @media (min-width: 426px){
        display: none;
    }
`;

const DisplaButtons = styled.div`
    button{
        background-color: transparent;
        color: hsla(60, 100%, 50%, 0.4);
        border: none;
        font-size: 1rem;
        cursor: pointer;
        font-weight: 100;
        margin: 8px;
        
        &:hover{
            color: #FF0;
            // border-bottom: dashed 1px #ff0;
        }
    }

    @media (max-width: 426px){
        display: none;
    }
`;

export default function Header({setMenuIsOpen, setEstado}) {

    return (
        <HeaderStyled>
            <Wrapper>
                <img src="/logo_full.svg" alt="logo forjatech" onClick={() => {location.href = location.origin}}/>
                <DisplaButtons className="displayButtons">
                    <button onClick={() => setEstado(1)}>INICIO</button>
                    <button onClick={() => setEstado(5)}>PROJETOS</button>
                    <button onClick={() => setEstado(4)}>CONTATO</button>
                </DisplaButtons>
                <MenuButton onClick={() => setMenuIsOpen(true)}>...</MenuButton>
            </Wrapper>
        </HeaderStyled>
    )
}
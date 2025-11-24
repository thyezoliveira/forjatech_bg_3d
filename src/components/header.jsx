import styled from "styled-components"

const HeaderStyled = styled.header`
    background-color: #0F0F0F;
    padding: 0 16px;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
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
    }
`;

const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    color: #FF0;
    font-size: 30px;
    cursor: pointer;
`;

export default function Header({setMenuIsOpen}){

    return (
        <HeaderStyled>
            <Wrapper>
                <img src="/logo_full.svg" alt="logo forjatech" onClick={() => {location.href = location.origin}}/>
                <MenuButton onClick={() => setMenuIsOpen(true)}>...</MenuButton>
            </Wrapper>
        </HeaderStyled>
    )
}
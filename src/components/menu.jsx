import styled from "styled-components"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const MenuStyled = styled.section`
    background-color: rgba(0,0,0,0.8);
    color: #FF0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    position: fixed;
    backdrop-filter: blur(16px);
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
    opacity: 0;
    transform: translateX(-100px);
`;

export default function Menu({ menuIsOpen, setMenuIsOpen, setEstado }){
    const ReferenciaBtn1 = useRef(null)
    const ReferenciaBtn2 = useRef(null)
    const ReferenciaBtn3 = useRef(null)

    useEffect(() => {
        gsap.to(ReferenciaBtn1.current, {opacity: 1, x: 0, duration: .4})
        gsap.to(ReferenciaBtn2.current, {opacity: 1, x: 0, duration: .4, delay: .1})
        gsap.to(ReferenciaBtn3.current, {opacity: 1, x: 0, duration: .4, delay: .2})
    })

    return (<>
        {(menuIsOpen) ?
        <MenuStyled>
            <img src="/icon.svg" alt="Logo" style={{marginTop: 32}} />
            <div>
                <MenuButton onClick={() => {setEstado(1); setMenuIsOpen(false)}} ref={ReferenciaBtn1}>INICIO</MenuButton>
                <MenuButton onClick={() => {setEstado(4); setMenuIsOpen(false)}} ref={ReferenciaBtn2}>CONTATO</MenuButton>
                <div className="division"></div>
                <MenuButton onClick={() => setMenuIsOpen(false)} ref={ReferenciaBtn3}>FECHAR</MenuButton>
            </div>
        </MenuStyled> : <></>}</>
    )
}
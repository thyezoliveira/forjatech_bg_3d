import { useEffect, useRef } from "react";
import styled from "styled-components"
import { gsap } from "gsap";

const Secao = styled.section`
    padding: 16px;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.6));
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Texto = styled.h1`
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -1.5px;
    line-height: 30px;
    width: inherit;
    max-width: 200px;
    margin:32px 0;
`;

const SubTexto = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: white;
    line-height: 24px;
    letter-spacing: 1.4px;
    margin: 32px 0;
`;

export const CTAButton = styled.button`
    background-color: rgba(0,0,0,0.4);
    border: dashed 1px #FF0;
    color: #FFF;
    font-size: 16px;
    padding: 16px;
`;

export default function Hero({setEstado, AnimacaoPaginaInicialExecutada}){
    const ReferenciaTitulo = useRef(null)
    const ReferenciaTexto = useRef(null)
    const ReferenciaCTA = useRef(null)
    useEffect(() => {
        if(!AnimacaoPaginaInicialExecutada.current){
            gsap.fromTo(
                ReferenciaTitulo.current,
                {
                opacity: 0,
                y: -50
                },
                {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
                }
            );
            gsap.fromTo(
                ReferenciaTexto.current,
                {
                opacity: 0,
                y: 100
                },
                {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: 'power2.out',
                delay: .4
                }
            );
            gsap.fromTo(
                ReferenciaCTA.current,
                {
                opacity: 0,
                y: 50
                },
                {
                opacity: 1,
                y: 0,
                duration: 3,
                ease: 'power2.out',
                delay: .8
                }
            );
        }

        // AnimacaoPaginaInicialExecutada.current = true
    }, [ReferenciaTitulo, AnimacaoPaginaInicialExecutada])

    return (
        <Secao>
            <Texto ref={ReferenciaTitulo} style={{color: "#ff0"}}>Transformamos processos manuais em soluçōes digitais inteligentes</Texto>
            <SubTexto ref={ReferenciaTexto}>Desenvolvimento de software personalizado para eliminar tarefas repetitivas, reduzir custos operacionais e transformar dados em decisōes estratégicas para seu negócio.</SubTexto>
            <CTAButton ref={ReferenciaCTA} onClick={() => setEstado(4)}>Analise seus processos gratuitamente</CTAButton>
        </Secao>
    )
}
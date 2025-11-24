import { useEffect, useRef } from "react";
import styled from "styled-components"
import { gsap } from "gsap";
import Filtro from "./filtro";

const Secao = styled.section`
    padding: 16px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    user-select: none;

    .ctaHolder{
        display: flex;
        flex-direction: column;

        @media (min-width: 768px){
            flex-direction: row;
            align-items: center;
            gap: 32px;
        }
    }
    
    @media (min-width: 768px){
        max-width: 768px;
    }
`;

const Texto = styled.h1`
    font-family: "Libre Baskerville", serif;
    font-weight: 800;
    font-size: 1.8rem;
    letter-spacing: 0.04rem;
    width: inherit;
    max-width: 240px;
    margin:16px 0;

    @media (min-width: 768px){
        font-size: 2.4rem;
        max-width: 100%;
        margin: 32px 0;
    }
`;

const SubTexto = styled.p`
    font-weight: 300;
    font-size: 1.2rem;
    color: white;
    letter-spacing: 1.2px;
    margin: 32px 0;
    
    @media (min-width: 768px){
        font-size: 1.2rem;
        flex-grow: 2;
        max-width: 500px;
    }
`;

export const CTAButton = styled.button`
    background-color: rgba(0,0,0,0.4);
    border: dashed 1px #FF0;
    color: #FFF;
    font-size: 1rem;
    padding: 16px;
    cursor: pointer;

    &:hover{
        background-color: rgba(255, 255, 0, 0.4);
        color: #000;
    }

    @media (min-width: 768px){
        flex-grow: 1;
        font-size: 1.4rem;
        max-width: 300px;
    }
`;

const WordContainer = styled.span`
    padding: 8px;
    background-color: rgba(0, 0, 255, 0.4);
    display: inline-block;
    position: relative;
    perspective: 1000px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.2em;
`;

export default function Hero({setEstado, AnimacaoPaginaInicialExecutada}){
    const ReferenciaTitulo = useRef(null);
    const ReferenciaFraseMeio = useRef(null);
    const ReferenciaTexto = useRef(null);
    const ReferenciaCTA = useRef(null);
    const wordElement = useRef(null);
    const currentIndexRef = useRef(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const words = ['Mapeie', 'Visualize', 'Gerencie', 'Transforme', 'Inove', 'Melhore', 'Acelere', 'Turbine'];

        // Animações iniciais da página
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
            gsap.fromTo(
                ReferenciaFraseMeio.current,
                {
                    opacity:0,
                    x: 300
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 2,
                    ease: 'bounce.out',
                    delay: 1.2
                }
            )
        }

        // Função de animação das palavras
        function animateWord() {
            if (!wordElement.current) return;

            // Animação de saída
            gsap.to(wordElement.current, {
                duration: 0.5,
                opacity: 0,
                y: -30,
                rotationX: 90,
                ease: 'power2.in',
                onComplete: () => {
                    // Muda a palavra
                    currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
                    if (wordElement.current) {
                        wordElement.current.textContent = words[currentIndexRef.current];
                    }
                    
                    // Prepara para entrada
                    gsap.set(wordElement.current, {
                        y: 30,
                        rotationX: -90
                    });
                    
                    // Animação de entrada
                    gsap.to(wordElement.current, {
                        duration: 0.5,
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        ease: 'power2.out'
                    });
                }
            });
        }

        // Inicia a animação após 3 segundos
        const timeoutId = setTimeout(() => {
            animateWord();
            // Configura o intervalo para repetir
            intervalRef.current = setInterval(animateWord, 3000);
        }, 3000);

        // Cleanup: limpa timeout e interval quando o componente desmonta
        return () => {
            clearTimeout(timeoutId);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [AnimacaoPaginaInicialExecutada]);

    return (
        <Secao>
            
            <Texto ref={ReferenciaTitulo} style={{color: "#ff0"}}>
                Do trabalho manual à soluções digitais inteligentes.
            </Texto>
            <Texto ref={ReferenciaFraseMeio} style={{color: "white"}}>
                <WordContainer>
                    <span ref={wordElement}>Transforme</span>
                </WordContainer> seus processos!
            </Texto>
            <div className="ctaHolder">
                <SubTexto ref={ReferenciaTexto}>
                    Desenvolvimento de software personalizado para eliminar tarefas repetitivas, 
                    reduzir custos operacionais e transformar dados em decisões estratégicas para seu negócio.
                </SubTexto>
                <CTAButton ref={ReferenciaCTA} onClick={() => setEstado(4)}>
                    Analise seus processos gratuitamente
                </CTAButton>
            </div>
        </Secao>
    )
}
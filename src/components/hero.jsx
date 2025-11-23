import { useEffect, useRef } from "react";
import styled from "styled-components"
import { gsap } from "gsap";

const Secao = styled.section`
    padding: 16px;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.8));
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    user-select: none;
`;

const Texto = styled.h1`
    font-family: "Libre Baskerville", serif;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: -1.5px;
    line-height: 35px;
    width: inherit;
    max-width: 240px;
    margin:16px 0;
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
    cursor: pointer;
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
            <Texto style={{color: "white"}}>
                <WordContainer>
                    <span ref={wordElement}>Transforme</span>
                </WordContainer> seus processos!
            </Texto>
            <SubTexto ref={ReferenciaTexto}>
                Desenvolvimento de software personalizado para eliminar tarefas repetitivas, 
                reduzir custos operacionais e transformar dados em decisões estratégicas para seu negócio.
            </SubTexto>
            <CTAButton ref={ReferenciaCTA} onClick={() => setEstado(4)}>
                Analise seus processos gratuitamente
            </CTAButton>
        </Secao>
    )
}
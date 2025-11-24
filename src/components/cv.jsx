import styled from "styled-components";
import { useEffect, useRef } from "react";

const SecaoCurriculo = styled.section`
    background-color: rgba(0,0,0,0.4);
    padding: 16px;
    color: #FF0;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
    width: 100vw;

    scrollbar: none; /* Safari and Chrome */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    
    @media (min-width: 725px) {
        max-width: 725px;
        margin: auto;
    }

    svg {
        position: absolute;
        width: 0;
        height: 0;
    }

    div.ladoAlado{
        display: flex;
        user-select: none;

        p{
            font-size: 1rem;
        }
        
        div.imgRef{
            background-color: transparent;
            border: dashed 1px #FF0;
            width: 1200px;
            overflow: hidden;
            position: relative;
            margin-left: 8px;
            transition: width 0.3s ease-out;

            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -20%) translateY(0) scale(1.4);
                max-width: 200px;
                filter: drop-shadow(0 2px 16px black) brightness(1);
                transform-origin: center;
                transition: transform 0.1s ease-out;
            }
        }
    }

    div.division{
        border-bottom: dashed 1px #FF0;
        margin: 16px 0;
    }

    h1{
        margin: 16px 0;
        font-size: 19px;
        letter-spacing: 0.08rem;
        color: white;
        font-family: "Libre Baskerville", serif;
        user-select: none;
    }

    div.linkHolder{
        display: flex;
        flex-direction: column;

        @media (min-width: 426px){
            flex-direction: row;
            gap: 16px;
        }
        
        p{
            display: flex;
            align-items: center;
            margin: 0;
            user-select: auto;
            span{
                img{
                    width: 16px;
                    height: 16px;
                    margin: 0 8px 0 0;
                }
            }
        }
    }

    div{
        margin: 0;
        font-weight: 300;
        font-size: 1.2rem;
        color: white;
        user-select: none;

        h3{
            font-family: "Libre Baskerville", serif;
            color: #FF0;
            font-size: 1.16rem;
        }

        span{
            color: #FF0;
        }
    }
    
    div.experiencia{
        width: 100%;
        margin: 16px 0;
        font-size: 1.2rem;
        user-select: none;
    }
`;

const Rolagem = styled.div`
    display: block;
    padding: 16px;
    margin-bottom: 32px;

    h3{
        font-family: "Libre Baskerville", serif;
    }
`;

export default function CurriculumVitae(){
    const ReferenciaLINE1 = useRef(null);
    const secaoRef = useRef(null);
    const imgRef = useRef(null);
    const imgContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!secaoRef.current || !imgRef.current || !imgContainerRef.current) return;

            const scrollTop = secaoRef.current.scrollTop;
            const maxScroll = secaoRef.current.scrollHeight - secaoRef.current.clientHeight;
            const scrollProgress = scrollTop / maxScroll;

            // Movimentos sutis
            const translateY = scrollProgress * 100;
            const scale = 1.4 - (scrollProgress * 0.2);
            const brightness = Math.max(0, 1 - (scrollProgress * 1));

            // Aberração cromática aumenta com o scroll
            const chromaticIntensity = scrollProgress * 32; // De 0 a 32px

            imgRef.current.style.transform = `
                translate(-50%, -20%)
                translateY(${translateY}px)
                scale(${Math.max(0.1, scale)})
            `;

            // Atualizar filtro SVG
            const filter = document.querySelector('#chromatic-aberrationn');
            if (filter) {
                const redOffset = filter.querySelector('feOffset[result="red-offset"]');
                const blueOffset = filter.querySelector('feOffset[result="blue-offset"]');
                
                if (redOffset && blueOffset) {
                    redOffset.setAttribute('dx', -chromaticIntensity);
                    redOffset.setAttribute('dy', -chromaticIntensity * 0.3);
                    blueOffset.setAttribute('dx', chromaticIntensity);
                    blueOffset.setAttribute('dy', chromaticIntensity * 0.3);
                }
            }

            // Aplicar filtro apenas se houver scroll (scrollProgress > 0)
            if (scrollProgress > 0) {
                imgRef.current.style.filter = `drop-shadow(0 2px 16px black) brightness(${brightness}) url(#chromatic-aberrationn)`;
            } else {
                imgRef.current.style.filter = `drop-shadow(0 2px 16px black) brightness(${brightness})`;
            }

            // Reduz a largura do container
            if (scrollProgress > 0.3) {
                const fadeProgress = (scrollProgress - 0.3) / 0.015;
                const width = 100 - (fadeProgress * 100);
                imgContainerRef.current.style.width = `${Math.max(0, width)}%`;
            } else {
                imgContainerRef.current.style.width = '1200px';
            }
        };

        const secao = secaoRef.current;
        if (secao) {
            secao.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (secao) {
                secao.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <SecaoCurriculo ref={secaoRef}>
            {/* SVG Filter para aberração cromática */}
            <svg>
                <defs>
                    <filter id="chromatic-aberrationn">
                        <feOffset in="SourceGraphic" dx="-3" dy="0" result="red-offset"/>
                        <feColorMatrix in="red-offset" type="matrix" 
                            values="1 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0" result="red-channel"/>
                        <feColorMatrix in="SourceGraphic" type="matrix" 
                            values="0 0 0 0 0
                                    0 1 0 0 0
                                    0 0 0 0 0
                                    0 0 0 1 0" result="green-channel"/>
                        <feOffset in="SourceGraphic" dx="3" dy="0" result="blue-offset"/>
                        <feColorMatrix in="blue-offset" type="matrix" 
                            values="0 0 0 0 0
                                    0 0 0 0 0
                                    0 0 1 0 0
                                    0 0 0 1 0" result="blue-channel"/>
                        <feBlend in="red-channel" in2="green-channel" mode="screen" result="rg"/>
                        <feBlend in="rg" in2="blue-channel" mode="screen"/>
                    </filter>
                </defs>
            </svg>

            <Rolagem>
                <h1>Thyéz de Oliveira Monteiro</h1>

                <div className="linkHolder">
                    <p><span><img src="/email_icon.svg" alt="" /></span>thyezoliveira@gmail.com</p>
                    <p><span><img src="/phone.svg" alt="" /></span>(22)998548514</p>
                </div>
                <div ref={ReferenciaLINE1} className="division"></div>

                <div className="ladoAlado">
                    <div>
                        <h3>Habilidades Técnicas</h3>
                        <p>
                            Python <span> | </span>Flask <span> | </span>JavaScript <span> | </span>Node <span> | </span>AWS <span> | </span>linux <span> | </span>SSH <span> | </span>MySQL <span> | </span>Git <span> | </span> Modelagem 3d <span> | </span>Ui/Ux <span> | </span>Figma <span> | </span>Krita <span> | </span>React.js <span> | </span>THREE.js <span> | </span>Sass <span> | </span>Godot Engine<span> | </span>Desenvolvedor Full-Stack <span> | </span>Backend <span> | </span>Frontend <span> | </span>Web <span> | </span>Nuvem <span> | </span>Jogos<span> | </span>Francófono <span> | </span>Inglês intermediário <span> | </span>Gestão de projetos web <span> | </span>IA
                        </p>
                    </div>

                    <div ref={imgContainerRef} className="imgRef">
                        <img ref={imgRef} src="/thyez_amarelo.png" alt="Thyéz de Oliveira Monteiro" />
                    </div>
                </div>

                <div className="division"></div>

                <h3>Experiência</h3>
                
                <div className="experiencia">
                    <strong>Assessor de informática</strong> | <span>1/2025 - Hoje</span>
                    <br />
                    <i>Secretaria de Educação de Saquarema</i>
                    <br />
                    <p style={{marginTop: 8}}>
                        - Eu realizo a construção de protótipos, de forma evolutiva, para que este venha a ser um software de uso da organização, trazendo de certa forma uma agilidade maior para as equipes de trabalho. 
                    </p>
                </div>

                <div className="experiencia">
                    <strong>Desenvolvedor Full Stack</strong> | <span>01/2023 - Hoje</span>
                    <br />
                    <i>forjatech</i>
                </div>

                <div className="experiencia">
                    <strong>Estagiário</strong> | <span>10/2023 - 12/2024</span>
                    <br />
                    <i>Secretaria de Educação de Saquarema</i>
                </div>
                
                <div className="experiencia">
                    <strong>Desenvolvedor Frontend</strong> | <span>06/2020 - 01/2023</span>
                    <br />
                    <i>Freelance</i>
                </div>

                <div className="division"></div>

                <h3>Formação acadêmica</h3>

                <div className="experiencia">
                   Universidade Cruzeiro do Sul / <strong>UNICSUL</strong> <span>10/2021 - 10/2025</span>
                   <br />
                   <br />
                   <span>Cursando: </span> Bacharelado, Engenharia de Software
                   <br />
                   <br />
                   
                    Minha formação em Engenharia de Software é focada na aplicação prática de princípios de engenharia ao longo de todo o ciclo de vida do desenvolvimento. O currículo combina uma sólida base computacional (algoritmos, estruturas de dados e bancos de dados) com práticas avançadas de mercado, incluindo arquitetura de software, design patterns e metodologias ágeis. Além disso, o curso integra tecnologias emergentes e essenciais para o cenário atual, como Computação em Nuvem e Inteligência Artificial, preparando-me para projetar soluções robustas e escaláveis.
                </div>
            </Rolagem>
        </SecaoCurriculo>
    );
}
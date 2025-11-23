import styled from "styled-components"
import {CTAButton} from "./hero";
import { useEffect, useRef } from "react";

// const BtnCotacao = styled(CTAButton)`
//     width: 100%;
//     margin: 16px 0;
// `;

const SecaoCurriculo = styled.section`
    background-color: rgba(0,0,0,0.4);
    padding: 16px;
    color: #FF0;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));

    div.ladoAlado{
        display: flex;
        user-select: none;

        p{
            font-size: 14px;
        }
        
        div.imgRef{
            background-color: transparent;
            border: dashed 1px #FF0;
            width: 1200px;
            /* min-width: 100px; */
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
                transition: transform 0.1s ease-out, filter 0.1s ease-out;
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
        text-align: center;
        color: white;
        font-family: "Libre Baskerville", serif;
        user-select: none;
    }

    div.linkHolder{
        display: flex;
        
        p{
            display: flex;
            align-items: center;
            margin: 0 8px;
            user-select: auto;
            span{
                img{
                    width: 16px;
                    height: 16px;
                    margin: 0 2px;
                }
            }
        }
    }

    div{
        margin: 0;
        font-weight: 200;
        font-size: .9rem;
        color: white;
        user-select: none;

        h3{
            font-family: "Libre Baskerville", serif;
            color: #FF0;
        }

        span{
            color: #FF0;
        }
    }
    
    div.experiencia{
        width: 100%;
        margin: 16px 0;
        user-select: none;
    }
`;

const Rolagem = styled.div`
    display: block;

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
            const translateY = scrollProgress * 100; // Move para baixo
            const scale = 1.4 - (scrollProgress * 0.2); // Diminui sutilmente
            const brightness = Math.max(0, 1 - (scrollProgress * 5)); // Evita valores negativos

            console.log("scale: ", scale)

            imgRef.current.style.transform = `
                translate(-50%, -20%)
                translateY(${translateY}px)
                scale(${Math.max(0.1, scale)})
            `;

            imgRef.current.style.filter = `drop-shadow(0 2px 16px black) brightness(${brightness})`;

            // Reduz a largura do container quando scroll passa de 10%
            if (scrollProgress > 0.3) {
                // Calcula progresso de 0.1 até 0.8 (normaliza para 0 a 1)
                const fadeProgress = (scrollProgress - 0.3) / 0.015;
                const width = 100 - (fadeProgress * 100); // De 100% até 0%
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
            <Rolagem>
                <h1>Thyéz de Oliveira Monteiro</h1>

                <div className="linkHolder">
                    <p><span><img src="/email_icon.svg" alt="" /></span>thyezoliveira@gmail.com</p>
                    <p><span><img src="/phone.svg" alt="" /></span>(22)998548514</p>
                </div>
                <div ref={ReferenciaLINE1} className="division"></div>


                <div className="ladoAlado">
                    <div>
                    <h3>
                        Habilidades Técnicas
                    </h3>

                    <p>
                        Python <span> | </span>Flask <span> | </span>JavaScript <span> | </span>Node <span> | </span>AWS <span> | </span>linux <span> | </span>SSH <span> | </span>MySQL <span> | </span>Git <span> | </span> Modelagem 3d <span> | </span>Ui/Ux <span> | </span>Figma <span> | </span>Krita <span> | </span>React.js <span> | </span>THREE.js <span> | </span>Sass <span> | </span>Godot Engine<span> | </span>Desenvolvedor Full-Stack <span> | </span>Backend <span> | </span>Frontend <span> | </span>Web <span> | </span>Nuvem <span> | </span>Jogos<span> | </span>Francófono <span> | </span>Inglês intermediário <span> | </span>Gestão de projetos web <span> | </span>IA
                    </p>
                    </div>

                    <div ref={imgContainerRef} className="imgRef">
                        <img ref={imgRef} src="/thyez_amarelo.png" alt="" />
                    </div>
                </div>

                <div ref={ReferenciaLINE1} className="division"></div>

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
                    <br />
                </div>

                <div className="experiencia">
                    <strong>Estagiário</strong> | <span>10/2023 - 12/2024</span>
                    <br />
                    <i>Secretaria de Educação de Saquarema</i>
                    <br />
                    
                </div>
                
                <div className="experiencia">
                    <strong>Desenvolvedor Frontend</strong> | <span>06/2020 - 01/2023</span>
                    <br />
                    <i>Freelance</i>
                    <br />
                </div>

                <div ref={ReferenciaLINE1} className="division"></div>

                <h3>Formação acadêmica</h3>

                <div className="experiencias">
                   Universidade Cruzeiro do Sul / <strong>UNICSUL</strong> <span>10/2021 - 10/2025</span>
                   <br />
                   <br />
                   <span>
                   Cursando: 
                   </span> Bacharelado, Engenharia de Software
                   <br />
                   <br />
                    Minha formação em Engenharia de Software é focada na aplicação prática de princípios de engenharia ao longo de todo o ciclo de vida do desenvolvimento. O currículo combina uma sólida base computacional (algoritmos, estruturas de dados e bancos de dados) com práticas avançadas de mercado, incluindo arquitetura de software, design patterns e metodologias ágeis. Além disso, o curso integra tecnologias emergentes e essenciais para o cenário atual, como Computação em Nuvem e Inteligência Artificial, preparando-me para projetar soluções robustas e escaláveis.

                </div>
            </Rolagem>
        </SecaoCurriculo>
    )
}
import styled from "styled-components"
import {CTAButton} from "./hero";
import { useEffect, useRef } from "react";

const BtnCotacao = styled(CTAButton)`
    width: 100%;
    margin: 16px 0;
`;

const SecaoCurriculo = styled.section`
    background-color: rgba(0,0,0,0.4);
    padding: 16px;
    color: #FF0;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));

    div.ladoAlado{
        display: flex;

        p{
            font-size: 12px;
        }
        
        div.imgRef{
            background-color: transparent;
            border: dashed 1px #FF0;
            width: 100%;
            min-width: 100px;
            overflow: hidden;
            position: relative;
            margin-left: 8px;

            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-45%, -24%);
                width: 200px;
                filter: drop-shadow(0 2px 16px black) brightness(1);
            }
        }
    }

    div.division{
        border-bottom: dashed 1px #FF0;
        margin: 16px 0;
    }

    h1{
        margin: 16px 0;
        font-size: 20px;
        text-align: center;
        color: white;
    }

    p{
        margin: 0;
        font-weight: 200;
        font-size: .8rem;
        color: white;

        span{
            color: #FF0;
        }
    }
    
    p.experiencia{
        width: 100%;
        margin: 16px 0;
    }
`;

const Rolagem = styled.div`
    display: block;
`;

export default function CurriculumVitae(){
    const ReferenciaLINE1 = useRef(null);
    const secaoRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!secaoRef.current || !imgRef.current) return;

            const scrollTop = secaoRef.current.scrollTop;
            const maxScroll = secaoRef.current.scrollHeight - secaoRef.current.clientHeight;
            const scrollProgress = scrollTop / maxScroll;

            // Movimentos sutis
            const translateY = scrollProgress * 500; // Move para baixo
            const scale = 1 + (scrollProgress * 2); // Aumenta sutilmente
            const brightness = 1 - (scrollProgress * 2.5);

            imgRef.current.style.transform = `
                translate(-45%, -24%) 
                translateY(${translateY}px)
                scale(${scale})
            `;

            imgRef.current.style.filter = `drop-shadow(0 2px 16px black) brightness(${brightness})`;
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

                <div ref={ReferenciaLINE1} className="division"></div>

                <h3>
                    Habilidades Técnicas
                </h3>

                <div className="ladoAlado">
                    <p>
                    Python <span> | </span>Flask <span> | </span>JavaScript <span> | </span>Node <span> | </span>AWS <span> | </span>linux <span> | </span>SSH <span> | </span>MySQL <span> | </span>Git <span> | </span> Modelagem 3d <span> | </span>Ui/Ux <span> | </span>Figma <span> | </span>Krita <span> | </span>React.js <span> | </span>THREE.js <span> | </span>Sass <span> | </span>Godot Engine<span> | </span>Desenvolvedor Full-Stack <span> | </span>Backend <span> | </span>Frontend <span> | </span>Web <span> | </span>Nuvem <span> | </span>Jogos<span> | </span>Francófono <span> | </span>Inglês intermediário <span> | </span>Gestão de projetos web <span> | </span>IA
                    </p>

                    <div className="imgRef">
                        <img ref={imgRef} src="/thyez_for_web.png" alt="" />
                    </div>
                </div>

                <div ref={ReferenciaLINE1} className="division"></div>

                <h3>Experiência</h3>
                
                <p className="experiencia">
                    - Assessor de informática / Secretaria de Educação de Saquarema <span>1/2025 - Hoje</span>
                </p>

                <p className="experiencia">
                    - Estagiário / Secretaria de Educação de Saquarema <span>10/2023 - 12/2024</span>
                </p>
                <p className="experiencia">
                    - Desenvolvedor Full Stack / forjatech <span>01/2023 - 10/2023</span>
                </p>
                <p className="experiencia">
                    - Desenvolvedor Frontend / Freelance <span>06/2020 - 01/2023</span>
                </p>

                <div ref={ReferenciaLINE1} className="division"></div>

                <h3>Formação acadêmica</h3>

                <p className="experiencias">
                   Universidade Cruzeiro do Sul / <strong>UNICSUL</strong> <span>10/2021 - 10/2025</span>
                   <br />
                   <br />
                   <span>
                   Cursando: Bacharelado, Engenharia de Software

                   </span>
                   <br />
                   <br />
                    O curso é voltado às atividades e práticas de engenharia de software. Portanto, ensina sobre o processo de desenvolvimento de software de diversos tipos, arquitetura e padrões de software para os mais diversos usos. Tenho visto também no curso disciplinas de desenvolvimento ágil, nuvem e IA, assim como as consideradas básicas como algoritmos, estruturas de dados e bancos de dados, entre outras disciplinas próprias da TI.

                </p>
            </Rolagem>
        </SecaoCurriculo>
    )
}
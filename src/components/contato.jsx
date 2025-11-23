import styled from "styled-components"
import {CTAButton} from "./hero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SectionStyled = styled.section`
    background-color: rgba(0,0,0,0.2);
    padding: 16px;
    color: #FF0;
    height: calc(100vh - 100px);
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6));
    user-select: none;

    h1{
        letter-spacing: 0.02rem;
        font-size: 2.5rem;
        font-family: "Libre Baskerville", serif;
    }
    
    h3{
        letter-spacing: 0.04rem;
        font-size: 1.4rem;
        font-weight: 500;
        font-family: "Libre Baskerville", serif;
    }

    p{
        color: white;
        font-size: 16px;
        letter-spacing: 0.032rem;
        line-height: 1.5rem;
        display: flex;
        align-items: center;

        span{
            margin-right: 8px;
        }
    }

    div.division{
        border-bottom: dashed 1px #FF0;
        margin: 16px 0;
    }

    div.socialHolder{
        display: flex;
        justify-content: center;
        margin: 32px 0;

        a{
            opacity: 0;
            font-size: 14px;
            transform: translateY(20px);
            span{
                margin: 8px;
                img{
                    width: 35px;
                }
            }
        }
    }

    div.cpr{
        position: relative;
        bottom: -20px;
        left: 0;
        background-color: rgba(255, 255, 0, .8);
        border: dashed 1px #FF0;
        width: 100%;
        height: 100px;
        color: black;
        overflow: hidden;
        letter-spacing: 0.1%;

        p{
            color: black;
            position: absolute;
            top: -10px;
            right: 10px;
        }

        span.c{
            font-size: 200px;
            font-weight: 900;
            position: absolute;
            top:0;
            left: 0;
            transform: translate(-32%, -30%);
        }
        
        span.cp{
            font-size: 65px;
            font-weight: 400;
            position: absolute;
            top:0;
            left: 0;
            transform: translate(34%, 24%);
        }
    }

`;

const BtnCotacao = styled(CTAButton)`
    width: 100%;
    margin: 4px 0;
`;

export default function ContactPage({setEstado}){
    // {setEstado}){
    const ReferenciaGIT = useRef(null)
    const ReferenciaINSTA = useRef(null)
    const ReferenciaLINKEDIN = useRef(null)
    
    const ReferenciaEMAIL = useRef(null)
    const ReferenciaTEL = useRef(null)

    const ReferenciaLINE1 = useRef(null)
    const ReferenciaLINE2 = useRef(null)

    useEffect(() => {
        gsap.to(ReferenciaGIT.current, {opacity: 1, y: 0, duration: 1})
        gsap.to(ReferenciaINSTA.current, {opacity: 1, y: 0, duration: 1, delay: .2})
        gsap.to(ReferenciaLINKEDIN.current, {opacity: 1, y: 0, duration: 1, delay: .4})
    })

    return (
        <SectionStyled>
            <h1>CONTATO</h1>
            <h3>Vamos forjar algo incrível juntos?</h3>
            <p>Primeira conversa é gratuita. Sem compromisso, apenas foco em entender sua necessidade.</p>

            

            {/* <div ref={ReferenciaLINE2} className="division"></div> */}

            <div className="socialHolder">
                <a ref={ReferenciaGIT} href="https://github.com/thyezoliveira" ><span><img src="/github_icone.svg" alt="" /></span></a>
                <a ref={ReferenciaINSTA} href="https://www.instagram.com/forja_tech/" ><span><img src="/instagram_icone.svg" alt="" /></span></a>
                <a ref={ReferenciaLINKEDIN} href="https://www.linkedin.com/in/engsofthyezoliveira/" ><span><img src="/linkedin_icone.svg" alt="" /></span></a>
            </div>

            {/* <div ref={ReferenciaLINE1} className="division"></div> */}

            <BtnCotacao onClick={() => setEstado(2)}>Curriculum Vitae</BtnCotacao>
            {/* <BtnCotacao onClick={() => setEstado(3)}>Peça seu orçamento</BtnCotacao> */}

            <div className="cpr">
                <span className="c">©</span> 
                <span className="cp">
                Copyright

                </span>
                <p>forjatech | 2025</p>
            </div>


        </SectionStyled>
    )
}
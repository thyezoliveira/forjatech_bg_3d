import styled from "styled-components"
import {CTAButton} from "./hero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SectionStyled = styled.section`
    background-color: rgba(0,0,0,0.4);
    padding: 16px;
    color: #FF0;
    height: calc(100vh - 100px);
    filter: drop-shadow(0 1px 4px rgba(0,0,0,0.8));
    user-select: none;

    @media (min-width: 725px) {
        max-width: 725px;
        margin: auto;
        border: dashed 1px #FF0;
        margin-top: 128px;
        height: auto;
    }

    div.wrapper{
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 425px) {
            flex-direction: row;
        }

        div.textHolder{
            order: 0;

            @media screen and (min-width: 425px) {
                order: 1;
            }

            h1{
                letter-spacing: .01rem;
                font-size: 2rem;
                font-family: "Libre Baskerville", serif;
                color: white;
            }
            
            h3{
                letter-spacing: .2rem;
                line-height: 2rem;
                font-size: 1.4rem;
                font-weight: 300;
                font-family: "Libre Baskerville", serif;
            }
        
            p{
                color: white;
                font-size: 1.2rem;
                letter-spacing: 0.064rem;
                font-weight: 300;
                display: flex;
                align-items: center;
        
                span{
                    margin-right: 8px;
                }
            }
        }
    
        div.socialHolder{
            order: 1;
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 16px 0 16px 0;
            background-color: rgba(0,0,0,0.4);
            padding: 16px 0;
            border: dashed 1px #FF0;

            @media screen and (min-width: 425px) {
                order: 0;
                flex-direction: column;
                width: auto;
            }
    
            a{
                opacity: 0;
                font-size: 14px;
                transform: translateY(20px);
    
                &:hover{
                    filter: drop-shadow(0 0 2px #FF0);}
    
                span{
                    margin: 8px;
                    img{
                        width: 35px;
                    }
                }
            }
        }
    }

    div.btnHolder{
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        @media (min-width: 425px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }


    div.division{
        border-bottom: dashed 1px #FF0;
        margin: 16px 0;
    }

    div.copyHolder{
        height: 80vh;
        position: relative;
        
        @media (min-width: 725px) {
            height: 132px;
            }
            
        div.cpr{
            position: absolute;
            bottom: 525px;
            left: 0;
            right: 0;
            margin: auto;
            background-color: rgba(255, 255, 0, 0.8);
            border: dashed 1px #FF0;
            width: 100%;
            height: 100px;
            color: black;
            overflow: hidden;
            letter-spacing: 0.1%;

            @media (min-width: 725px) {
                bottom: 0;
            }
    
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
    }

`;

const BtnCotacao = styled(CTAButton)`
    width: 100%;
    margin: 4px 0;

    &:hover{
        background-color: #FF0;
        color: #000;}
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

            <div className="wrapper">
                <div className="textHolder">
                    <h1>CONTATO</h1>
                    <h3>Vamos forjar algo incrível juntos?</h3>
                    <p>Primeira conversa é gratuita. Sem compromisso, apenas foco em entender sua necessidade.</p>
                </div>

                <div className="socialHolder">
                    <a ref={ReferenciaGIT} href="https://github.com/thyezoliveira" ><span><img src="/github_icone.svg" alt="" /></span></a>
                    <a ref={ReferenciaINSTA} href="https://www.instagram.com/forja_tech/" ><span><img src="/instagram_icone.svg" alt="" /></span></a>
                    <a ref={ReferenciaLINKEDIN} href="https://www.linkedin.com/in/engsofthyezoliveira/" ><span><img src="/linkedin_icone.svg" alt="" /></span></a>
                </div>
            </div>

            <div className="btnHolder">
                <BtnCotacao onClick={() => setEstado(2)}>Curriculum Vitae</BtnCotacao>
                <BtnCotacao onClick={() => setEstado(3)}>Peça seu orçamento</BtnCotacao>
            </div>


            <div className="copyHolder">
                <div className="cpr">
                    <span className="c">©</span> 
                    <span className="cp">
                    Copyright

                    </span>
                    <p>forjatech | 2025</p>
                </div>
            </div>



        </SectionStyled>
    )
}
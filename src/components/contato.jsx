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

    h1{
        letter-spacing: 0.02rem;
        font-size: 2.5rem;
    }
    
    h3{
        letter-spacing: 0.04rem;
        font-size: 1.4rem;
        font-weight: 500;
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
    }

    div.linkHolder{
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        p{
            /* margin: 16px 0; */
            span{
                display: flex;
                justify-content: flex-start;
                img{
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

    div.socialHolder{
        margin-top: 32px;
        display: flex;
        justify-content: space-between;

        a{
            opacity: 0;
            font-size: 14px;
            span{
                img{
                    width: 35px;
                }
            }
        }
    }

`;

const BtnCotacao = styled(CTAButton)`
    width: 100%;
    margin: 16px 0;
`;

export default function ContactPage(){
    // {setEstado}){
    const ReferenciaGIT = useRef(null)
    const ReferenciaINSTA = useRef(null)
    const ReferenciaLINKEDIN = useRef(null)
    
    const ReferenciaEMAIL = useRef(null)
    const ReferenciaTEL = useRef(null)

    const ReferenciaLINE1 = useRef(null)
    const ReferenciaLINE2 = useRef(null)

    useEffect(() => {
        gsap.fromTo(ReferenciaLINE1.current, {width: "0"}, {width: "100%", duration: .2})
        
        gsap.fromTo(ReferenciaEMAIL.current, {opacity: 0}, {opacity: 1, duration: 1, delay: .2})
        gsap.fromTo(ReferenciaTEL.current, {opacity: 0}, {opacity: 1, duration: 1, delay: .4})
        
        gsap.fromTo(ReferenciaLINE2.current, {width: "0"}, {width: "100%", duration: .4, delay: .6})

        gsap.to(ReferenciaGIT.current, {opacity: 1, y: 32, duration: 2, delay: .8})
        gsap.to(ReferenciaINSTA.current, {opacity: 1, y: 32, duration: 2, delay: 1})
        gsap.to(ReferenciaLINKEDIN.current, {opacity: 1, y: 32, duration: 2, delay: 1.2})
    })

    return (
        <SectionStyled>
            <h1>CONTATO</h1>
            <h3>Vamos forjar algo incrível juntos?</h3>
            <p>Primeira conversa sempre gratuita. Sem compromisso, apenas foco em entender seu negócio.</p>

            {/* <BtnCotacao onClick={() => setEstado(3)} disabled>Peça seu orçamento</BtnCotacao> */}
            <div ref={ReferenciaLINE1} className="division"></div>

            <div className="linkHolder">
                <p ref={ReferenciaEMAIL}><span><img src="/email_icon.svg" alt="" /></span>thyezoliveira@gmail.com</p>
                <p ref={ReferenciaTEL}><span><img src="/phone.svg" alt="" /></span>(22)998548514</p>
                {/* <p><span><img src="/meet.svg" alt="" /></span>Reuniōes presenciais</p> */}
            </div>

            <div ref={ReferenciaLINE2} className="division"></div>

            <div className="socialHolder">
                <a ref={ReferenciaGIT} href="https://github.com/thyezoliveira" ><span><img src="/github_icone.svg" alt="" /></span></a>
                <a ref={ReferenciaINSTA} href="https://www.instagram.com/forja_tech/" ><span><img src="/instagram_icone.svg" alt="" /></span></a>
                <a ref={ReferenciaLINKEDIN} href="https://www.linkedin.com/in/engsofthyezoliveira/" ><span><img src="/linkedin_icone.svg" alt="" /></span></a>
            </div>


        </SectionStyled>
    )
}
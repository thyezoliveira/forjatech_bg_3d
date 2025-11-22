import styled from "styled-components"
import {CTAButton} from "./hero";

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

export default function ContactPage({setEstado}){
    return (
        <SectionStyled>
            <h1>CONTATO</h1>
            <h3>Vamos forjar algo incrível juntos?</h3>
            <p>Primeira conversa sempre gratuita. Sem compromisso, apenas foco em entender seu negócio.</p>

            {/* <BtnCotacao onClick={() => setEstado(3)} disabled>Peça seu orçamento</BtnCotacao> */}
            <div className="division"></div>
            <div className="linkHolder">
                <p><span><img src="/email_icon.svg" alt="" /></span>thyezoliveira@gmail.com</p>
                <p><span><img src="/phone.svg" alt="" /></span>(22)998548514</p>
                {/* <p><span><img src="/meet.svg" alt="" /></span>Reuniōes presenciais</p> */}
            </div>

            <div className="division"></div>
            <div className="socialHolder">
                <a href="https://github.com/thyezoliveira" ><span><img src="/github_icone.svg" alt="" /></span></a>
                <a href="https://www.instagram.com/forja_tech/" ><span><img src="/instagram_icone.svg" alt="" /></span></a>
                <a href="https://www.linkedin.com/in/engsofthyezoliveira/" ><span><img src="/linkedin_icone.svg" alt="" /></span></a>
            </div>


        </SectionStyled>
    )
}
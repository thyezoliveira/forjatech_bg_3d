import styled from "styled-components"

const SectionStyled = styled.section`
    background-color: rgba(0,0,0,0.4);
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

    div.socialHolder{
        display: flex;
        justify-content: space-around;
        a{
            font-size: 14px;
            span{
                img{
                    width: 64px;
                }
            }
        }
    }

`;

export default function ContactPage(){
    return (
        <SectionStyled>
            <h1>CONTATO</h1>
            <h3>Vamos forjar algo incrível juntos?</h3>
            <p>Primeira conversa sempre gratuita. Sem compromisso, apenas foco em entender seu negócio.</p>

            <p>
            - - - - - - - - - -
            </p>
            <div className="linkHolder">
                <p><span><img src="/email_icon.svg" alt="" /></span> thyezoliveira@gmail.com</p>
                <p><span><img src="/phone.svg" alt="" /></span> (22) 998548514</p>
                <p><span><img src="/meet.svg" alt="" /></span> Reuniōes presenciais</p>
            </div>

            <div className="socialHolder">
                <a href="https://github.com/thyezoliveira" ><span><img src="/github_icone.svg" alt="" /></span></a>
                <a href="https://www.instagram.com/forja_tech/" ><span><img src="/instagram_icone.svg" alt="" /></span></a>
                <a href="https://www.linkedin.com/in/engsofthyezoliveira/" ><span><img src="/linkedin_icone.svg" alt="" /></span></a>
            </div>


        </SectionStyled>
    )
}
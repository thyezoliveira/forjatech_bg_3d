import styled from "styled-components"

const Secao = styled.section`
    padding: 16px;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.6));
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Texto = styled.h1`
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 1.4px;
    line-height: 40px;
    width: 80%;
    margin:32px 0;
`;

const SubTexto = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: white;
    line-height: 18px;
    letter-spacing: 1.4px;
    margin: 32px 0;
`;

const CTAButton = styled.button`
    background-color: rgba(0,0,0,0.4);
    border: dashed 1px #FF0;
    color: #FFF;
    font-size: 16px;
    padding: 16px;
`;

export default function Hero({setEstado}){
    return (
        <Secao>
            <Texto style={{color: "#ff0"}}>Transformamos processos manuais em soluçōes digitais inteligentes</Texto>
            <SubTexto>Desenvolvemos software personalizado que elimina tarefas repetitivas, reduz custos operacionais e transforma dados em decisōes estratégicas para seu negócio.</SubTexto>
            <CTAButton onClick={() => setEstado(4)}>Analise seus processos gratuitamente</CTAButton>
        </Secao>
    )
}
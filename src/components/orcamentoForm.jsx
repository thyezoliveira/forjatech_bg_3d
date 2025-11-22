import styled from "styled-components"
import {CTAButton} from "./hero";

const BtnCotacao = styled(CTAButton)`
    width: 100%;
    margin: 16px 0;
`;

const SecaoOrcamento = styled.section`
    background-color: rgba(0,0,0,0.2);
    padding: 8px;
    color: #FF0;
    height: calc(100vh - 100px);

    h1{
        margin: 16px 0;
        font-size: 20px;
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            background-color: rgba(0,0,0,0.8);
            color: #FF0;
            padding: 16px;
            margin: 4px;
            width: 100vw;
            max-width: 260px;
            border: dashed 1px #FF0;
            outline: none;
            
            &::placeholder{
                color: #ffff0050;
            }
        }
        select{
            background-color: rgba(0,0,0,0.8);
            color: #FF0;
            padding: 16px;
            margin: 4px;
            width: 100vw;
            max-width: 290px;
            border: dashed 1px #FF0;
            outline: none;
        }
        
        textarea{
            resize: none;
            background-color: rgba(0,0,0,0.8);
            border: dashed 1px #FF0;
            color: #FF0;
            padding: 16px;
            outline: none;

            &::placeholder{
                color: #ffff0050;
            }
        }
    }
`;

export default function OrcamentoForm(){
    return (
        <SecaoOrcamento>
            <h1>Pedido de orçamento</h1>

            <form action="">
                <input type="text" placeholder="Nome da sua empresa" />
                <input type="text" placeholder="Ramo da empresa" />
                <input type="text" placeholder="Email para contato" />
                <select name="" id="">
                    <option value="">Landpage</option>
                    <option value="">Website</option>
                    <option value="">Artes para mídias sociais</option>
                    <option value="">Gestāo de mídias sociais</option>
                    <option value="">Sistema em nuvem</option>
                    <option value="">Sistema interno</option>
                    <option value="">Software pesonalizado</option>
                </select>

                <textarea cols={32} rows={10} name="" id="" placeholder="Descreva suas necessidades">

                </textarea>

                {/* <BtnCotacao>Enviar</BtnCotacao> */}
                <p>Ainda nāo é possível enviar pedidos!</p>
            </form>
        </SecaoOrcamento>
    )
}
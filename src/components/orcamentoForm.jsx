import styled from "styled-components"
import {CTAButton} from "./hero";
import { useState } from 'react'

const BtnCotacao = styled(CTAButton)`
    width: 100%;
    max-width: 300px;
    margin: 16px 0;
`;

const SecaoOrcamento = styled.section`
    background-color: rgba(0,0,0,0.2);
    padding: 8px;
    color: #FF0;
    height: calc(100vh - 100px);
    width: 100%;
    user-select: none;

    h1{
        margin: 16px 0;
        font-size: 20px;
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @media (min-width: 425px) {
            background-color: rgba(0,0,0,0.8);
            border: dashed 1px #FF0;
            width: 100%;
            max-width: 400px;
            padding: 16px;
            margin: 32px auto;
        }

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

function realizarRegistro(dados){
    const res = fetch("https://thyezoliveira.pythonanywhere.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    res.then(response => response.json()).then(data => {
        console.log(data)
    })
}

export default function OrcamentoForm(){
    const [form, setForm] = useState({
        nomeEmpresa: '',
        ramoEmpresa: '',
        emailContato: '',
        telefone: '',
        assunto: '',
        descricaoDetalhada: ''
    })

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <SecaoOrcamento>

            <form action="" method="post" onSubmit={(e) => {e.preventDefault(); realizarRegistro(form);}}>
                <h1>Pedido de orçamento</h1>
                <input type="text" name="nomeEmpresa" id="nomeEmpresa" onChange={handleForm} value={form.nomeEmpresa} placeholder="Nome da sua empresa" />
                <input type="text" name="ramoEmpresa" id="ramoEmpresa" onChange={handleForm} value={form.ramoEmpresa} placeholder="Ramo da empresa" />
                <input type="email" name="emailContato" id="emailContato" onChange={handleForm} value={form.emailContato} placeholder="Email para contato" />
                <input type="phonr" name="telefone" id="telefone" onChange={handleForm} value={form.telefone} placeholder="Telefone para contato" />
                <select name="assunto" id="assunto" onChange={handleForm} value={form.assunto}>
                    <option value="">Landpage</option>
                    <option value="">Website</option>
                    <option value="">Artes para mídias sociais</option>
                    <option value="">Gestāo de mídias sociais</option>
                    <option value="">Sistema em nuvem</option>
                    <option value="">Sistema interno</option>
                    <option value="">Software pesonalizado</option>
                </select>

                <textarea cols={32} rows={10} name="descricaoDetalhada" id="descricaoDetalhada" onChange={handleForm} value={form.descricaoDetalhada} placeholder="Descreva suas necessidades">

                </textarea>

                <BtnCotacao>Enviar</BtnCotacao>
                {/* <p>Ainda nāo é possível enviar pedidos!</p> */}
            </form>
        </SecaoOrcamento>
    )
}
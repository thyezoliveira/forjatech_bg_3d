import styled from "styled-components";

const SecaoProjetos = styled.section`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 16px;
  color: #ff0;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));

  h1 {
    margin: 16px 0;
    font-size: 19px;
    /* text-align: center; */
    color: white;
    font-family: "Libre Baskerville", serif;
  }

  h3 {
    font-family: "Libre Baskerville", serif;
    color: #ff0;
  }

  p {
    margin: 0;
    font-weight: 200;
    font-size: 0.9rem;
    color: white;

    span {
      color: #ff0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 8px 0;
      color: white;
      font-weight: 200;
      span {
        color: #ff0;
        font-weight: 600;
      }
    }
  }

  div.division {
    border-bottom: dashed 1px #ff0;
    margin: 16px 0;
  }
`;

const Rolagem = styled.div`
  display: block;

  h3 {
    font-family: "Libre Baskerville", serif;
  }
`;

export default function ProjectsPage() {
  return (
    <SecaoProjetos>
      <Rolagem>
        <h1>Projetos Desenvolvidos</h1>

        <h3>Onde teoria encontra a prática</h3>
        <p>
          Minha trajetória como desenvolvedor combina a agilidade necessária
          para atender negócios locais com a robustez exigida por sistemas
          governamentais. Abaixo, destaco as principais frentes de atuação.
        </p>

        <div className="division"></div>

        <h1>🏛️ Infraestrutura e Automação Governamental</h1>

        <h3>Secretaria de Educação de Saquarema</h3>

        <p>
          Nesta atuação focada em eficiência administrativa e modernização de
          processos internos, desenvolvo soluções para otimizar o fluxo de
          trabalho dos servidores e a gestão de dados.
        </p>

        <ul>
          <li>
            <span>Automação de Tarefas:</span> Desenvolvimento de scripts e
            ferramentas para eliminar processos manuais repetitivos, reduzindo
            erros e economizando horas de trabalho da equipe administrativa.
          </li>
          <li>
            <span>Softwares de Gestão Documental:</span> Criação de sistemas
            para geração dinâmica e controle de documentos oficiais, garantindo
            padronização e agilidade na emissão.
          </li>
          <li>
            <span>Banco de Dados e Redes:</span> Planejamento e implantação de
            bancos de dados relacionais e configuração de sistemas em rede,
            assegurando a integridade e a disponibilidade das informações
            críticas da secretaria.
          </li>
          <li>
            <span>Impacto:</span> Modernização da infraestrutura tecnológica da
            secretaria, resultando em maior celeridade nos processos internos.
          </li>
        </ul>

        <div className="division"></div>

        <h1>🎮 Gamificação e Interatividade (FLIS)</h1>
        <h3>Feira Literária Itinerante de Saquarema</h3>

        <p>
          Desenvolvimento de soluções interativas para engajamento público em
          grandes eventos. Realizei a criação de jogos digitais educativos
          apresentados durante a FLIS, trabalhando em um ambiente
          multidisciplinar.
        </p>

        <ul>
          <li>
            <span>Parcerias Intersetoriais:</span> Os jogos foram desenvolvidos
            em colaboração direta com as Secretarias de{" "}
            <span>Saúde, Direito dos Animais, Mulher</span> e{" "}
            <span>Cultura</span>, traduzindo as pautas de cada pasta em
            mecânicas de jogo envolventes.
          </li>
          <li>
            <span>Engajamento Educativo:</span> Foco na experiência do usuário
            (UX) para criar interfaces intuitivas que atendessem ao público
            diverso do evento literário, unindo tecnologia e aprendizado lúdico.
          </li>
        </ul>

        <div className="division"></div>

        <h1>
            🌐 Transformação Digital e Web (2020 - 2023)
        </h1>

        <h3>
            Consultoria e Desenvolvimento Local
        </h3>

        <p>
            Durante o período desafiador da pandemia, atuei intensamente na digitalização de empresas da região de Saquarema, criando a presença online necessária para a continuidade dos negócios.
        </p>

        <ul>
            <li>
                <span>Diversidade de Nichos:</span> Desenvolvimento de websites institucionais e landing pages para setores variados, incluindo:
            </li>
        </ul>

        <ul>
            <li>
                Energia Solar (Empresa local de painéis solares).
            </li>
            <li>
                Lazer e Entretenimento (Campo de Paintball).
            </li>
            <li>
                Serviços (Dedetizadora e Agência de Publicidade).
            </li>
        </ul>

        <p>
            <span>Foco na Conversão:</span> Criação de layouts responsivos e otimizados para garantir que esses negócios fossem encontrados e acessados facilmente por seus clientes.

        </p>





      </Rolagem>
    </SecaoProjetos>
  );
}

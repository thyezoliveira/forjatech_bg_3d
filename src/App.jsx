import { useEffect, useRef, useState } from "react";
import HexagonCanvas from "./components/hexagono";
import Website from "./components/website";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import ContactPage from "./components/contato";
import ProjectsPage from "./components/projetos";
import OrcamentoForm from "./components/orcamentoForm";
import CurriculumVitae from "./components/cv";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [estado, setEstado] = useState(1);
  const [bgColorString, setBgColorString] = useState(
    "radial-gradient(circle, var(--cor-principal) 1%, var(--cor-base) 100%);"
  );

  const AnimacaoPaginaInicialExecutada = useRef(false)

  useEffect(()=> {
    switch(estado){
      case 1:
        setBgColorString("radial-gradient(circle, rgba(0, 0, 0, 0.6) 70%,rgba(66, 66, 0, 0.9) 100%);")
        break;
      case 2:
        setBgColorString("radial-gradient(circle, rgba(0, 0, 0, 0.6) 50%, rgba(0, 66, 66, 0.8) 100%);")
        break;
      case 3:
        setBgColorString("radial-gradient(circle, rgba(0, 0, 0, 0.6) 50%, rgba(77, 0, 0, 0.8) 100%);")
        break;
      case 4:
        setBgColorString("radial-gradient(circle, rgba(0, 0, 0, 0.6) 50%, rgba(0, 41, 62, 0.8) 100%);")
        break;
      default:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 1%, var(--cor-base) 100%);")
    }}, [estado]);

  return (
    <>
      <HexagonCanvas estado={estado} />
      

      {menuIsOpen ?
      <>
        <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} setEstado={setEstado}/>
      </> : <>

      {estado == 1 ? (
        <>
          <Header setEstado={setEstado} estado={estado} setMenuIsOpen={setMenuIsOpen}/>
          <Website bgcolor={bgColorString}>
            <div style={{ width: "100%", height: "64px" }}></div>
            <Hero setEstado={setEstado} AnimacaoPaginaInicialExecutada={AnimacaoPaginaInicialExecutada}/>
          </Website>
        </>
      ) : (
        <></>
      )}

      {estado == 2 ?
      <>
          <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} estado={estado} setMenuIsOpen={setMenuIsOpen}/>
            <div style={{ width: "100%", height: "64px" }}></div>
            <CurriculumVitae />
          </Website>
      </> : <></>}

      {estado == 3 ?
      <>
          <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} estado={estado} setMenuIsOpen={setMenuIsOpen}/>
            <div style={{ width: "100%", height: "64px" }}></div>
            <OrcamentoForm />
          </Website>
      </> : <></>}

      {estado == 4 ?
      <>
        <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} estado={estado} setMenuIsOpen={setMenuIsOpen}/>
            <div style={{ width: "100%", height: "64px" }}></div>
            <ContactPage setEstado={setEstado} />
          </Website>
      </> : <></>}

      </>}

      {estado == 5 ?
      <>
        <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} estado={estado} setMenuIsOpen={setMenuIsOpen}/>
            <div style={{ width: "100%", height: "64px" }}></div>
            <ProjectsPage setEstado={setEstado} />
          </Website>
      </> : <></>}

    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import HexagonCanvas from "./components/hexagono";
import Website from "./components/website";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import ContactPage from "./components/contato";
import ProjectsPage from "./components/projetos"

function App() {
  const [estado, setEstado] = useState(1);
  const [bgColorString, setBgColorString] = useState(
    "radial-gradient(circle, var(--cor-principal) 1%, var(--cor-base) 100%);"
  );

  useEffect(()=> {
    switch(estado){
      case 4:
        setBgColorString("radial-gradient(circle, rgba(0,0,0,0.5) 50%, var(--cor-base) 100%);")
        break;
      default:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 1%, var(--cor-base) 100%);")
    }}, [estado]);

  return (
    <>
      <HexagonCanvas estado={estado} />
      {estado == 1 ? (
        <>
          <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} />
            <div style={{ width: "100%", height: "64px" }}></div>
            <Hero setEstado={setEstado} />
          </Website>
        </>
      ) : (
        <></>
      )}

      {estado == 2 ?
      <>
        <Menu setEstado={setEstado} />
      </> : <></>}

      {estado == 3 ?
      <>
          <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} estado={estado} />
            <div style={{ width: "100%", height: "64px" }}></div>
            <ProjectsPage setEstado={setEstado} />
          </Website>
      </> : <></>}

      {estado == 4 ?
      <>
        <Website bgcolor={bgColorString}>
            <Header setEstado={setEstado} estado={estado} />
            <div style={{ width: "100%", height: "64px" }}></div>
            <ContactPage setEstado={setEstado} />
          </Website>
      </> : <></>}

    </>
  );
}

export default App;

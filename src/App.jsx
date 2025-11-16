import { useEffect, useState } from 'react'
import HexagonCanvas from './components/hexagono'
import Website from './components/website'
import Header from './components/header'

function App() {
  const [estado, setEstado] = useState(1)
  const [bgColorString, setBgColorString] = useState("radial-gradient(circle, var(--cor-principal) 50%, var(--cor-base) 100%);")

  useEffect(()=>{
    switch(estado){
      case 1:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 1%, var(--cor-base) 100%);")
        break;
      case 2:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 25%, var(--cor-base) 100%);")
        break;
      case 3:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 50%, var(--cor-base) 100%);")
        break;
      case 4:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 75%, var(--cor-base) 100%);")
        break;
      case 5:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 100%, var(--cor-base) 100%);")
        break;
      default:
        setBgColorString("radial-gradient(circle, var(--cor-principal) 50%, var(--cor-base) 100%);")
    }
  }, [estado])

  return (
    <>
      <HexagonCanvas estado={estado} />
      <Website bgColor={bgColorString}>
            <Header setEstado={setEstado} estado={estado}/>
      </Website>
    </>
  )
}

export default App

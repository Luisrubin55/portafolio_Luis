import { useState } from "react"
import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import ModalProyectos from "./components/ModalProyectos"
import Portafolio from "./components/Portafolio"
import Services from "./components/Services"
import Contacto from "./components/Contacto"
import Experiencia from "./components/Experiencia"



function App() {

  const valoresIniciales = {
    id: 0,
    nombre: '',
    descripcion: '',
    tecnologias: [''],
    imagen:'',
    url:''
  }

  const [modal, setModal ] = useState(false)
  const [proyectoSeleccionado, setProyectoSeleccionado ] = useState(valoresIniciales)

  const handleChangeModal = () => {
    setModal(!modal)
  }
  const closeModal = async() => {
    setModal(false)
  }
  return (
    <>
      <header className="p-3 mx-10">
        <Header />
      </header>

      <section className="mt-24 mx-10" id="home">
        <AboutMe />
      </section>

      <section className="mt-10" id="portafolio">
        <Portafolio handleChangeModal={handleChangeModal} setProyectoSeleccionado={setProyectoSeleccionado} />
        <ModalProyectos modal={modal} closeModal={closeModal} proyectoSeleccionado={proyectoSeleccionado} />
      </section>

      <section className="mt-10 mx-10" id="servicios">
        <Services />
      </section>

      <section className="mt-10 mx-10" id="experiencia">
        <Experiencia />
      </section>

      <footer className="mt-10" id="contacto">
        <Contacto />
      </footer>
    </>
  )
}

export default App

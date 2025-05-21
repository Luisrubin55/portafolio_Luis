import proyectos from '../data/projectos.json'
import Proyecto from './Proyecto'

type PortafolioProps = {
    handleChangeModal: () => void
    setProyectoSeleccionado: React.Dispatch<React.SetStateAction<{
        id: number;
        nombre: string;
        descripcion: string;
        tecnologias: string[];
        imagen: string;
        url: string;
    }>>
}

export default function Portafolio({ handleChangeModal, setProyectoSeleccionado }: PortafolioProps) {
    return (
        <div className="mx-10">
            <h1 className="text-3xl text-white font-bold uppercase text-center ">Portafolio</h1>
            <div className="md:mt-20 mt-5 grid md:grid-cols-2 gap-5">
                {proyectos.map(proyecto => (
                    <Proyecto
                            key={proyecto.id}
                            proyecto={proyecto}
                            handleChangeModal={handleChangeModal}
                            setProyectoSeleccionado={setProyectoSeleccionado}
                    />
                ))}
            </div>
        </div>
    )
}

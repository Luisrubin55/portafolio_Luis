import proyectos from '../data/projectos.json'
import Proyecto from './Proyecto'
import ProyectoInvertido from './ProyectoInvertido'

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
            <div className="md:mt-20 mt-10 space-y-10">
                {proyectos.map(proyecto => (
                    proyecto.id % 2 ? (
                        <Proyecto
                            key={proyecto.id}
                            proyecto={proyecto}
                            handleChangeModal={handleChangeModal}
                            setProyectoSeleccionado={setProyectoSeleccionado}
                        />
                    ) : (
                        <ProyectoInvertido
                            key={proyecto.id}
                            proyecto={proyecto}
                            handleChangeModal={handleChangeModal}
                            setProyectoSeleccionado={setProyectoSeleccionado}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

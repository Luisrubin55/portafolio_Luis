import { ArrowRightIcon } from '@heroicons/react/20/solid'

type ProyectoProps = {
    proyecto: {
        id: number;
        nombre: string;
        descripcion: string;
        imagen: string;
        url: string
    }
    handleChangeModal: () => void
    setProyectoSeleccionado: React.Dispatch<React.SetStateAction<{
        id: number;
        nombre: string;
        descripcion: string;
        imagen: string;
        url: string;
    }>>
}

export default function ProyectoInvertido({ proyecto, handleChangeModal, setProyectoSeleccionado }: ProyectoProps) {

    const modal = (proyectoSeleccionado: ProyectoProps['proyecto']) => {
        handleChangeModal()
        setProyectoSeleccionado(proyectoSeleccionado)
    }

    return (

        <div className="grid grid-cols-2 items-center justify-center gap-11">
            <div className="p-2 bg-gradient-to-tr from-cyan-600 to-blue-800 rounded-lg">
                <img src={`./${proyecto.imagen}.png`} alt="Imagen clima" className="w-auto rounded-lg shadow-lg shadow-blue-300 " />
            </div>
            <div className=" flex flex-col gap-2 text-justify">
                <h3 className="text-sky-500 font-bold text-2xl ">Projecto {proyecto.id}</h3>
                <h2 className="text-white text-3xl font-bold uppercase">{proyecto.nombre}</h2>
                <p className="text-white text-xl line-clamp-3">{proyecto.descripcion}</p>
                <button className="text-white flex text-center items-center gap-4 hover:text-indigo-500" onClick={() => modal(proyecto)}><ArrowRightIcon className="w-8" /> Leer mas...</button>
            </div>
        </div>
    )
}
import { ArrowRightIcon } from '@heroicons/react/20/solid'

type ProyectoProps = {
    proyecto: {
        id: number;
        nombre: string;
        descripcion: string;
        tecnologias: string[];
        imagen: string;
        url: string;
    }
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

export default function Proyecto({ proyecto, handleChangeModal, setProyectoSeleccionado }: ProyectoProps) {

    const modal = (proyectoSeleccionado: ProyectoProps['proyecto']) => {
        handleChangeModal()
        setProyectoSeleccionado(proyectoSeleccionado)
    }

    return (
        <div className="items-center bg-slate-950 rounded-xl">
            <div className="">
                <img src={`./${proyecto.imagen}.png`} alt="Imagen clima" className="w-auto h-70 rounded-t-xl opacity-90" />
            </div>
            <div className=" flex flex-col gap-2 text-justify p-5">
                <h3 className="text-sky-500 font-bold md:text-xl text-md">Projecto {proyecto.id}</h3>
                <h2 className="text-white text-xl md:text-2xl font-bold uppercase">{proyecto.nombre}</h2>
                <p className="text-white text-md line-clamp-3 text-justify">{proyecto.descripcion}</p>
                <button className="text-white flex text-center items-center font-bold gap-4 hover:text-sky-500" onClick={() => modal(proyecto)}><ArrowRightIcon className="w-8" /> Leer mas...</button>
            </div>
            
        </div>
    )
}

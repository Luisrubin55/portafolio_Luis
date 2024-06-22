

type CardServiciosProps = {
    servicio: {
        id: number;
        nombre: string;
        descripcion: string;
    }
}

export default function CardServicios({servicio}: CardServiciosProps) {
    return (
        <div className="p-2 bg-gradient-to-t to-sky-600 from-blue-700 rounded-lg">
            <div className='p-5 bg-slate-950'>
                <div>
                    <h1 className='text-white font-bold uppercase md:text-3xl text-xl'>{servicio.nombre}</h1>
                </div>
                <p className='text-slate-200 md:text-xl text-lg mt-5'>{servicio.descripcion}</p>
            </div>
        </div>
    )
}

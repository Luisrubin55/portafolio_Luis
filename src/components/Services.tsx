import servicios from '../data/services.json'
import CardServicios from './CardServicios'


export default function Services() {

    return (
        <div>
            <h1 className="mt-20 text-white font-bold text-4xl uppercase text-center">Servicios</h1>
            <div className='grid grid-cols-2 gap-16 mt-10'>
                {servicios.map(servicio => (
                    <CardServicios 
                        key={servicio.id}
                        servicio={servicio}
                    />
                ))}
            </div>
        </div>
    )
}

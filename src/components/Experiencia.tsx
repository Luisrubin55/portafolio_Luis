
const iconos = [
    "css",
    "git",
    "html",
    "javascript",
    "node.js",
    "python",
    "react.js",
    "tailwind",
    "vue.js",
]


export default function Experiencia() {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold uppercase text-white'>Experiencia</h1>
            <div className="grid grid-cols-3 gap-5 mt-10 ">
                {iconos.map(icono => (
                    <div className="flex flex-col text-white font-bold text-2xl items-center" key={icono}>
                        <img src={`./icons/${icono}.svg`} alt={`Icono ${icono}`} key={icono} className="w-20" />
                        <p>{icono.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

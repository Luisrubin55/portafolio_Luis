
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
    "spring",
    "oracle",
    "mongodb"
]


export default function Habilidades() {
    return (
        <div>
            <h1 className='text-center border-b-2 border-sky-600 text-2xl font-bold uppercase text-sky-600'>Mis Habilidades Técnicas</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-10">
                {iconos.map(icono => (
                    <div className="flex flex-col bg-slate-900 rounded-md w-24 p-2 font-bold items-center gap-3" key={icono}>
                        <img src={`./icons/${icono}.svg`} alt={`Icono ${icono}`} key={icono} className="w-12 md:w-8" />
                        <p className="text-white md:text-sm text-xs">{icono.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

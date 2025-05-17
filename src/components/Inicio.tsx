
const Inicio = () => {
    return (
        <>
            <div className="md:mt-20 mt-5 space-y-6 flex justify-center items-center gap-10">
                <div>
                    <h1 className=" text-xl md:text-2xl text-sky-500 font-bold">
                        <span className="text-slate-300">
                            Hola mundo. Soy {' '}
                        </span>
                        Luis Armando Arenas
                    </h1>
                    <h2 className="text-white text-5xl font-bold">
                        Ingeniero en TI y
                    </h2>
                    <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-sky-500 font-bold">
                        Desarrollador Java Full Stack
                    </h2>
                    <p className="text-white mt-4">Apasionado por crear proyectos innovadores y funcionales que impacten al usuario final.</p>
                    <div className="flex gap-10 mt-10">
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=5511189830&text=Hola" target="_blank" className=" mt-5 bg-gradient-to-r from-cyan-500 to-blue-700 p-3 rounded-lg text-white ">
                                Desacargar CV
                            </a>
                        </div>

                        <div>
                            <a href="https://api.whatsapp.com/send?phone=5511189830&text=Hola" target="_blank" className=" mt-5 p-3 rounded-lg text-white border border-cyan-500 ">
                                Desacargar CV
                            </a>
                        </div>
                    </div>
                    <div className="flex mt-10 gap-10">
                        <img src="/icons/git.svg" alt="icono git" className="w-10 hover:bg-sky-500 rounded-full" />
                        <img src="/icons/whatsapp.svg" alt="icono whatsapp" className="w-10 hover:bg-sky-500 rounded-full" />
                        <img src="/icons/linkedin.svg" alt="icono linkedin" className="w-10 hover:bg-sky-500 rounded-full" />
                    </div>
                </div>
                <div>
                    <img
                        src="/icons/react.js.svg"
                        alt="Imagen fotografia"
                        className="w-80"
                    />
                </div>
            </div>
        </>
    )
}

export default Inicio
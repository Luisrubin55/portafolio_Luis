
const Inicio = () => {
    return (
        <>
            <div className="md:mt-20 mt-5 space-y-6 flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                <div>
                    <h1 className=" text-xl text-center md:text-left md:text-2xl text-sky-500 font-bold">
                        <span className="text-slate-300">
                            Hola mundo. Soy {' '}
                        </span>
                        Luis Armando Arenas
                    </h1>
                    <h2 className="text-white text-center md:text-left text-2xl md:text-5xl font-bold">
                        Ingeniero en TI y
                    </h2>
                    <h2 className=" text-2xl md:text-start text-center animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-5xl text-sky-500 font-bold">
                        Desarrollador Java Full Stack
                    </h2>
                    <p className="text-white mt-4 text-xs text-center md:text-left md:text-xl">Apasionado por crear proyectos innovadores y funcionales que impacten al usuario final.</p>
                    <div className="flex gap-10 mt-10 md:justify-start justify-center">
                        <div>
                            <a href="https://drive.google.com/file/d/1gwp4ohHvWy7tFwEV9Ix-fz-Sqtdq1jST/view" target="_blank" className=" mt-5 bg-gradient-to-r from-cyan-500 to-blue-700 p-3 rounded-lg text-white ">
                                Desacargar CV
                            </a>
                        </div>

                        <div>
                            <a href="https://api.whatsapp.com/send?phone=5511189830&text=Hola" target="_blank" className=" mt-5 p-3 rounded-lg text-white border border-cyan-500 ">
                                Contactame
                            </a>
                        </div>
                    </div>
                    <div className="flex mt-10 gap-10 md:justify-start justify-center">
                        <a href="https://github.com/Luisrubin55" target="_blank"><img src="/icons/git.svg" alt="icono git" className="w-10 hover:bg-sky-500 rounded-full" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5511189830&text=Hola" target="_blank"><img src="/icons/whatsapp.svg" alt="icono whatsapp" className="w-10 hover:bg-sky-500 rounded-full" /></a>
                        <a href="https://www.linkedin.com/in/luis-armando-arenas-rubin/" target="_blank"><img src="/icons/linkedin.svg" alt="icono linkedin" className="w-10 hover:bg-sky-500 rounded-md" /></a>
                    </div>
                </div>
                <div className="p-0 items-center">
                    <img
                        src="/springReact.png"
                        alt="Imagen fotografia"
                        className="md:w-3/4 w-64"
                    />
                </div>
            </div>
        </>
    )
}

export default Inicio

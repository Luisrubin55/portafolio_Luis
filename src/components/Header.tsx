import Logo from "./Logo"
import NavMenu from "./NavMenu"

export default function Header() {
    return (
        <div>
            <nav className="flex justify-between w-full">
                <Logo />
                <div className="md:flex space-x-5 p-2 font-bold text-white uppercase text-xs items-center hidden">
                    <a href="#home">Sobre Mí</a>
                    <a href="#portafolio">Portafolio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#experiencia">Experiencia</a>
                    <a href="#contacto" className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg hover:to-blue-700">Contacto</a>
                </div>
                <div className="md:hidden ">
                    <NavMenu />
                </div> 
            </nav>
            

            <div className="md:mt-20 mt-10">
                <h1 className=" text-3xl md:text-5xl text-white font-bold">
                    <span className="text-slate-300">
                        I'm a {' '}
                    </span>
                    Luis Armando Arenas
                </h1>
                <h2 className="mt-5 text-xl md:text-3xl text-white uppercase font-semibold justify-center items-center">
                    Front-End Software Developer {' '}
                    <span className="items-center justify-center mt-5">
                        <span className="animate-ping relative inline-flex h-5 w-1  bg-sky-400 opacity-100"></span>
                        <span className="relative inline-flex h-1 w-1 "></span>
                    </span>
                </h2>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-700 mt-8 p-3 rounded-lg text-white ">
                    Contactame
                </button>
            </div>
        </div>
    )
}

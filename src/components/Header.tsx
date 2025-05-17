import Logo from "./Logo"
import NavMenu from "./NavMenu"

export default function Header() {
    return (
        <div> 
            <nav className="flex justify-between w-full bg-slate-950 p-3">
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
        </div>
    )
}

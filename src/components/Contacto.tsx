import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid"

export default function Contacto() {
    return (
        <div className="md:-space-y-36">
            <div className="md:flex justify-between items-center relative hidden">
                <div className=" bg-gradient-to-br from-blue-600 w-30 h-30 md:w-60 md:h-60 rounded-full -translate-x-10 opacity-50"></div>
                <div className=" bg-gradient-to-br  from-blue-600 w-30 h-30 md:w-64 md:h-64 rounded-full opacity-50"></div>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 opacity-70 md:rounded-tl-full rounded-t-3xl p-9">
                <h1 className="text-white text-4xl font-bold uppercase text-center">Contacto</h1>
                <div className="grid grid-cols-2 md:gap-10 gap-5">
                    <div className="md:mx-32">
                        <div className="mt-20 my-5">
                            <h1 className="text-white text-xl md:text-2xl font-bold uppercase ">Enviame un mensaje...</h1>
                            <p className="text-lg md:text-xl font-semibold text-slate-200 line-clamp-3">Puedes contactarme por de medio de mis redes sociales en los enlaces de abajo.</p>
                        </div>
                        <div className="space-y-5">
                            <div className=" flex items-center md:gap-4 gap-2">
                                <PhoneIcon className="md:w-10 w-6 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2 text-white hover:cursor-auto" />
                                <p className="text-sm md:text-xl font-bold text-white">55 11189830</p>
                            </div>
                            <div className="flex items-center md:gap-4 gap-2">
                                <EnvelopeIcon className="md:w-10 w-6 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2 text-white hover:cursor-auto" />
                                <p className="font-bold text-xs md:text-xl text-white">luisrubin20@hotmail.com</p>
                            </div>

                        </div>
                    </div>
                    <div className="md:mx-20 mt-20">
                        <h1 className="md:text-3xl text-xl text-white font-bold uppercase">Mis redes sociales</h1>
                        <p className="md:text-xl text-lg font-semibold text-white line-clamp-2 ">Puedes contactarme a través de mis redes sociales</p>
                        <div className="flex flex-col gap-5 md:mt-10 mt-2">
                            <a href="https://www.facebook.com/luisarmando.arenas.37/" target="_blank" className="flex md:flex-row flex-col gap-1 md:gap-5 items-center md:text-xl text-xs font-bold text-white hover:text-slate-950">
                                <img src="./icons/facebook.svg" alt="icono facebook" className="md:w-12 w-8 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2"/>
                                {' '} @luisarmando.arenas.37
                            </a>
                            <a href="https://www.linkedin.com/in/luis-armando-arenas/" target="_blank" className="flex md:flex-row flex-col gap-1 md:gap-5 items-center md:text-xl text-xs font-bold text-white hover:text-slate-950">
                                <img src="./icons/linkedin.svg" alt="icono linkedin"  className="md:w-12 w-8 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2"/>
                                {' '} luis-armando-arenas
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5511189830&text=Hola" target="_blank" className="flex md:flex-row flex-col gap-1 md:gap-5 items-center md:text-xl text-xs font-bold text-white hover:text-slate-950">
                                <img src="./icons/whatsapp.svg" alt="icono whatsapp" className="md:w-12 w-8 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2"/>
                                {' '} 55 11189830
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

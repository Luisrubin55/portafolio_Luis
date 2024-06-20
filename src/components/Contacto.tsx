import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid"

export default function Contacto() {
    return (
        <div className="-space-y-36">
            <div className="flex justify-between items-center relative">
                <div className=" bg-gradient-to-br from-blue-600 w-60 h-60 rounded-full -translate-x-10 opacity-50"></div>
                <div className=" bg-gradient-to-br  from-blue-600 w-64 h-64 rounded-full opacity-50"></div>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 opacity-70 rounded-tl-full p-9">
                <h1 className="text-white text-4xl font-bold uppercase text-center">Contacto</h1>
                <div className="grid grid-cols-2 gap-10">
                    <div className="mx-32">
                        <div className="mt-20 my-5">
                            <h1 className="text-white text-2xl font-bold uppercase ">Enviame un mensaje...</h1>
                            <p className="text-xl font-semibold text-slate-200 ">Puedes contactarme por de medio de mis redes sociales en los enlaces de abajo.</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="flex gap-5 items-center font-bold text-xl text-white ">
                                <PhoneIcon className="w-14 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2 text-white hover:cursor-auto" />
                                {' '} 55 11189830
                            </p>
                            <p className="flex gap-5 items-center font-bold text-xl text-white ">
                                <EnvelopeIcon className="w-14 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2 text-white hover:cursor-auto" />
                                {' '} luisrubin55@gmail.com
                            </p>

                        </div>
                    </div>
                    <div className="mx-20 mt-20">
                        <h1 className="text-3xl text-white font-bold uppercase">Mis redes sociales</h1>
                        <p className="text-xl font-semibold text-white ">Puedes contactarme a través de mis redes sociales</p>
                        <div className="flex flex-col gap-5 mt-10">
                            <a href="https://www.facebook.com/luisarmando.arenas.37/" target="_blank" className="flex gap-5 items-center text-xl font-bold text-white hover:text-slate-950">
                                <img src="./icons/facebook.svg" alt="icono facebook" className="w-12 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2"/>
                                {' '} @luisarmando.arenas.37
                            </a>
                            <a href="https://www.linkedin.com/in/luis-armando-arenas/" target="_blank" className="flex gap-5 items-center text-xl font-bold text-white hover:text-slate-950">
                                <img src="./icons/linkedin.svg" alt="icono linkedin"  className="w-12 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2"/>
                                {' '} luis-armando-arenas
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5511189830&text=Hola" target="_blank" className="flex gap-5 items-center text-xl font-bold text-white hover:text-slate-950">
                                <img src="./icons/whatsapp.svg" alt="icono whatsapp" className="w-12 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-xl p-2"/>
                                {' '} 55 11189830
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

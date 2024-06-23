
export default function AboutMe() {
    return (
        <div className="grid md:grid-cols-2 justify-items-center items-center">
            <div className="p-2 bg-gradient-to-t to-sky-600 from-blue-700 rounded-lg w-2/3">
                <div className="p-2 bg-slate-950">
                    <img src="./programador.jpg" alt="Imagen programador" className="w-auto rounded-lg" />
                </div>
            </div>

            <div className="">
                <h1 className="text-4xl font-bold text-white my-5">Sobre Mí</h1>
                <p className="text-white text-justify text-xl">
                    Estudié la carrera de Técnico en Informática y posteriormente la Ingeniería en Tecnologías de la Información y desde entonces adquirí un gusto especial por el desarrollo web y las redes de computadoras, pero en especial el desarrollo Front-End. Soy una persona apasionada por aprender nuevas tecnologías y sobre todo por la programación. En el futuro, me gustaría aprender muchas más herramientas y metodologías que complementen mis habilidades como programador. Todos los días estoy aprendiendo y practicando, desarrollando proyectos que me apasionan. Soy una persona muy curiosa, responsable, dinámica y de rápido aprendizaje, con facilidad de adaptación, ganas de trabajar y aprender, además mi gran iniciativa para resolver problemas.
                </p>
                <div className="flex justify-between">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-700 mt-5 p-3 rounded-lg text-white font-bold ">
                        Hablemos
                    </button>
                    <button className="border-2 border-blue-700 mt-5 p-3 rounded-lg text-white ">
                        Ver CV
                    </button>
                </div>
            </div>

        </div>
    )
}

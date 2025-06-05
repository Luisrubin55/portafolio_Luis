import Habilidades from "./Habilidades";

export default function AboutMe() {
    return (
        <>
            <div className="">
                <h1 className="text-4xl font-bold text-white my-5 w-40 border-sky-500 border-b-2">Sobre Mí</h1>
                <div className="grid md:grid-cols-3 gap-4 justify-center items-center">
                    <div className="bg-slate-800 p-4 rounded-md border-t-2 border-sky-500 w-auto">
                        <h3 className="text-sky-500 text-2xl font-bold mb-2">¿Quien soy?</h3>
                        <p className="text-white text-justify text-xl">
                            Soy ingeniero en TI y Desarrollador Full Stack, altamente motivado con altos conocimientos en desarrollo de software, creacion de webservices y diseño de interfaces web.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-md border-t-2 border-sky-500">
                        <h3 className="text-sky-500 text-2xl font-bold mb-2">Mi objetivo</h3>
                        <p className="text-white text-justify text-xl">
                            Seguir aprendiendo y aplicar mis conocimientos en el desarrollo de proyectos web. Comprometido con la mejora continua, la calidad del codigo y las mejores practicas de desarrollo,
                        </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-md border-t-2 border-sky-500">
                        <h3 className="text-sky-500 text-2xl font-bold mb-2">Mi Perfil</h3>
                        <p className="text-white text-justify text-xl">
                            Busco contribuir en proyectos innovadores, optimizando el rendimiento de las aplicaciones. Me caracterizo por mi capacidad para adaptarme rapidamente a nuevos entornos de trabajo y tecnologias.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6 bg-slate-800 rounded-md p-5">
                <Habilidades />
            </div>
        </>
    )
}

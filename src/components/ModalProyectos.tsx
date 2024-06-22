import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type ModalProyectosProps = {
    modal: boolean
    closeModal: () => void
    proyectoSeleccionado: {
        id: number;
        nombre: string;
        descripcion: string;
        imagen: string;
        url:string
    }
    
}

export default function ModalProyectos({modal, closeModal, proyectoSeleccionado}: ModalProyectosProps) {
    
    if(proyectoSeleccionado) return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gradient-to-b from-slate-950 to-blue-800 border-4 border-sky-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <Dialog.Title as="h3" className="text-white text-4xl font-extrabold my-5 text-center">
                                        {proyectoSeleccionado.nombre}
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-white text-2xl font-extrabold my-5">
                                        <img src={`./${proyectoSeleccionado.imagen}.png`} alt={`Imagen ${proyectoSeleccionado.imagen}`} />
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-white text-xl font-extrabold my-5 text-center">
                                        <a href={proyectoSeleccionado.url} target='_blank' className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg hover:to-blue-700">Ver Proyecto</a>
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-white text-xl font-semibold my-5 text-justify leading-relaxed">
                                        {proyectoSeleccionado.descripcion}
                                    </Dialog.Title>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
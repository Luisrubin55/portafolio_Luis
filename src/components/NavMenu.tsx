import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'

export default function NavMenu() {

    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-purple-400">
                <Bars3Icon className='w-8 h-8 text-white ' />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/3 lg:-translate-x-48">
                    <div className="w-40 lg:w-11 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                        <a href='/profile' className='block p-2 hover:text-purple-950'>Inicio</a>
                        <a
                            href='/profile'
                            className='block p-2 hover:text-purple-950'
                        >Sobre Mí</a>
                        <a
                            href='/'
                            className='block p-2 hover:text-purple-950'
                        >Portafolio</a>
                        <a
                            href='/'
                            className='block p-2 hover:text-purple-950'
                        >Servicios</a>
                        <a
                            href='/'
                            className='block p-2 hover:text-purple-950'
                        >Experiencia</a>
                        <a
                            href='/'
                            className='block p-2 hover:text-purple-950'
                        >Contacto</a>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
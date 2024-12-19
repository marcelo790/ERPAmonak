import { deleteRol } from '@/api/RolAPI'
import { RolFormData } from '@/types/indexSecurity'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

type RolListProps = {
    formData: Array<RolFormData>
}

export default function RolList({formData}: RolListProps)  {

    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn: deleteRol,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['rol']})
        }
    })
  return (
            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-100 mt-10 bg-white shadow-lg">
            {formData.map((rol) => (
            <li key={rol.id} className="flex justify-between gap-2 gap-x-6 px-5 py-1 ">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto space-y-2">
                        <Link to={``}
                            className="text-gray-600 cursor-pointer hover:underline text-3xl font-bold"
                        >{rol.name}</Link>
                        <p className="text-sm text-gray-400">
                            Descripción: {rol.description}
                        </p>
                    </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-6">
                    <Menu as="div" className="relative flex-none">
                        <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                            <span className="sr-only">opciones</span>
                            <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
                        </MenuButton>
                        <Transition as={Fragment} enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <MenuItems
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                            >                                    
                                    <MenuItem>
                                        <Link to={`/roles/${rol.id}/edit`}
                                            className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                                        Editar Rol
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to={`/roles/${rol.id}/details`}
                                            className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                                        Detalle de Rol
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <button 
                                            type='button' 
                                            className='block px-3 py-1 text-sm leading-6 text-red-500'
                                            onClick={() => mutate(rol.id) }
                                        >
                                            Eliminar Rol
                                        </button>
                                    </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </li>
            ))}
        </ul>
  )
}

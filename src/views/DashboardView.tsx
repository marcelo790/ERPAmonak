import {Link} from "react-router-dom"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProduct, getProducts } from "@/api/ProductAPI"
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { toast } from "react-toastify"

export default function DashboardView() {

  const {data} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const queryClient = useQueryClient()
  const {mutate} = useMutation({
    mutationFn: deleteProduct,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      queryClient.invalidateQueries({queryKey: ['products']})
    }
  })

  return (
    <>
      <h1 className="text-5xl font-black">Mis Proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5" >Maneja y administra tus proyectos</p>
      <nav className="my-5">
        <Link 
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to='/admin/products/create'
          >
          Nuevo Producto
        </Link>
      </nav>
      {data?.length ? (
        <ul role="list" className="divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg">
        {data.map((product) => (
          <li key={product.id} className="flex justify-between gap-x-6 px-5 py-10">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto space-y-2">
                <Link to={``}
                  className="text-gray-600 cursor-pointer hover:underline text-3xl font-bold"
                >{product.productName}</Link>
                <p className="text-sm text-gray-400">
                  Cliente: {product.productName}
                </p>
                <p className="text-sm text-gray-400">
                  {product.productDescription}
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
                      <Link to={``}
                        className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                        Ver Producto
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to={`/products/${product.id}/edit`}
                        className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                        Editar Producto
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type='button'
                        className='block px-3 py-1 text-sm leading-6 text-red-500'
                        onClick={() => mutate(product.id)}
                      >
                        Eliminar Producto
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
      ) : (
        <p className="text-center py-20"> No hay productos aun {''}
          <Link 
            to='/projects/create'
            className="text-fuchsia-500 font-bold">
            Crear Productos
          </Link>
        </p>
      )}
    </>
  )
}

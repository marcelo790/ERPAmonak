import React from 'react'
import { Link } from 'react-router-dom'

export default function ListProductView() {
    return (
        <>
          <h1 className="text-5xl font-black">Mis Productos</h1>
          <nav className="my-8">
            <Link className="bg-zinc-700 hover:bg-zinc-950 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
            to='/products/create'
          >
          Nuevo Producto
          </Link>
          <Link className="ml-6 bg-zinc-700 hover:bg-zinc-950 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
            to='/products/create-masivo'
          >
          Registro Masivo Producto
          </Link>
          </nav>
        </>
      )
    }

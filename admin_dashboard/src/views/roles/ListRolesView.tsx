import { getAllRoles } from '@/api/RolAPI'
import RolList from '@/components/rol/RolList'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function ListRolesView() {
    const {data, isLoading} = useQuery({
        queryKey: ['rol'],
        queryFn: getAllRoles
      })
      if(isLoading) return '..cargando'
      if(data) return (
        <>
          <h1 className="text-5xl font-black">Mis Roles</h1>
          <nav className="my-8">
            <Link className="bg-zinc-700 hover:bg-zinc-950 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
            to='/roles/create'
          >
          Nuevo Rol
          </Link>
          </nav>
          {data.length ? (
            <RolList
              formData={data}
            />
          ) : (
            <p>No hay</p>
          )}
        </>
      )
    }

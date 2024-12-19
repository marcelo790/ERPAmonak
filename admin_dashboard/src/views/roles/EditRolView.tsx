import { getByIdRol } from "@/api/RolAPI"
import RolEdit from "@/components/rol/RolEdit"
import { useQuery } from "@tanstack/react-query"
import { Navigate, useParams } from "react-router-dom"

export default function EditRolView() {
  
    const params = useParams()
    const rolId = parseInt(params.rolId!)

    const {data, isLoading, isError} = useQuery({
        queryKey: ['edit_rol',rolId],
        queryFn: () => getByIdRol(rolId),
        retry: false
      })

      if(isLoading) return '...cargando'
      if(isError) return <Navigate to='/404/' />
  if(data) return <RolEdit data={data} rolId={rolId}/>
}

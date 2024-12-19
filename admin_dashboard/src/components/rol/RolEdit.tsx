import { Link, useNavigate } from "react-router-dom"
import RolForm from "./RolForm"
import { Rol, RolFormData } from "@/types/indexSecurity"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateRol } from "@/api/RolAPI"
import { toast } from "react-toastify"

type EditRolProps = {
    data: RolFormData
    rolId: Rol['id']
}

export default function RolEdit({data, rolId} : EditRolProps) {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
        id: data.id,
        name : data.name,
        description : data.description
    }})
    
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn: updateRol,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['rol']})
            queryClient.invalidateQueries({queryKey: ['edit_rol',rolId]})
            toast.success(data)
            navigate('/roles')
        }
    })
    const handleForm = (formData : RolFormData) => {
        const data = {
            formData,
            rolId
        }

        mutate(data)
    }
    return (
        <>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-black">Editar Rol</h1>
              <p className="text-2xl font-light text-gray-500 mt-5">Campos obligatorios</p>
              <nav className="my-5">
                  <Link className="bg-zinc-950 hover:bg-zinc-700 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
                  to='/roles'
                  >
                  Volver a Roles
                  </Link>
              </nav>
              <form 
                className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                onSubmit={handleSubmit(handleForm)}
                noValidate
              >
                <RolForm 
                  register={register}
                  errors={errors}
                  
                />
                <div className="flex space-x-6">
                  <input
                    type="submit"
                    value="Editar"
                    className="bg-zinc-950 hover:bg-zinc-700 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer
                    transition-colors"
                  />
                  <input
                    type="submit"
                    value="Cancelar"
                    className="bg-zinc-500 hover:bg-zinc-800 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer
                    transition-colors"
                  />
                </div>
              </form>
            </div>
          
        </>
      )
}


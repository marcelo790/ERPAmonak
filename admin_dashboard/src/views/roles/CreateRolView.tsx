import { createRol } from "@/api/RolAPI";
import RolForm from "@/components/rol/RolForm";
import { RolFormData } from "@/types/indexSecurity";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateRolView() {
    const navigate = useNavigate();
    const initialValues : RolFormData = {
        id: 0,
        name : "",
        description : ""
    }
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

    const mutation = useMutation({
      mutationFn: createRol,
      onError: (error) => {
        toast.error(error.message)
      },
      onSuccess: (data) => {
        toast.success(data)
        navigate('/roles')
      }
    })

    const handleForm = (formData: RolFormData) => {
      mutation.mutate(formData) 
    }
  return (
    <>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-black">Crear Rol</h1>
          <p className="text-2xl font-light text-gray-500 mt-5">Todos los campos son obligatorios</p>
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
                value="Guardar"
                className="bg-zinc-950 hover:bg-zinc-700 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer
                transition-colors"
              />
              <Link to='/'
              className="bg-zinc-500 hover:bg-zinc-800 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer
                transition-colors text-center"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      
    </>
  )
}

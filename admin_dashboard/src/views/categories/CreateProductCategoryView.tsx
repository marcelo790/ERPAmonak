import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {useMutation} from '@tanstack/react-query'
import { toast } from "react-toastify"
import ProductCategoryForm from "@/components/category/ProductCategoryForm"
import { ProductCategoryFormData } from "@/types/index"
import { createProductCategory } from "@/api/ProductCategoryAPI"

export default function CreateProductCategoryView() {

    const navigate = useNavigate();
    const initialValues : ProductCategoryFormData = {
        id: 0,
        name : "",
        parent_category_id : ""
    }
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

    const mutation = useMutation({
      mutationFn: createProductCategory,
      onError: (error) => {
        toast.error(error.message)
      },
      onSuccess: (data) => {
        toast.success(data)
        navigate('/')
      }
    })

    const handleForm = (formData: ProductCategoryFormData) => {
      mutation.mutate(formData) 
    }
  return (
    <>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-black">Crear Categoria</h1>
          <nav className="my-5">
              <Link className="bg-zinc-950 hover:bg-zinc-700 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
              to='/'
              >
              Volver a Categorias
              </Link>
          </nav>
          <form 
            className="mt-10 bg-white shadow-lg p-10 rounded-lg"
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
            <ProductCategoryForm 
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

import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import ProductCategoryForm from "@/components/categories/ProductCategoryForm"
import { ProductCategoryFormData } from "@/types/index"
import { createProductCategory } from "@/api/ProductCategoryAPI"

export default function CreateProductCategoryView() {

    const initialValues : ProductCategoryFormData = {
        name : "",
        parent_category_id : ""
    }
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

    const handleForm = (data: ProductCategoryFormData) => {
      createProductCategory(data)
    }
  return (
    <>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-black">Crear Categoria</h1>
          <p className="text-2xl font-light text-gray-500 mt-5">El nombre es obligatorio para agregar categoria</p>
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

import { Link, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import ProductForm from "@/components/products/ProductForm"
import { ProductFormData } from '@/types/index'
import { createProduct } from "@/api/ProductAPI"

export default function CreateProyectView() {

  const navigate = useNavigate();
  const initialValues : ProductFormData= {
        productName: "",
        productPrice: 0,
        productDescription: "",
        productUnit: 0,
        productCategory: [],
        productImages: [],
  }
  const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: initialValues})

  const {mutate} = useMutation({
    mutationFn: createProduct,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      navigate('/admin')
    }
  })

  const handleForm = (formData: ProductFormData) => mutate(formData)

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear Proyectos</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario</p>
        <nav className="my-5">
          <Link 
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to='/admin'
            >
            Volver a Proyectos
          </Link>
        </nav>
        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
            <ProductForm 
              register={register}
              errors={errors}
            />
            <input 
              type="submit"
              value="Crear Proyecto"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
            />
        </form>
      </div>
  </>
  )
}

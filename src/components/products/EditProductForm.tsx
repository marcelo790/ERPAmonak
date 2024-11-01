import ProductForm from './ProductForm'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Product, ProductFormData } from '@/types/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProduct } from '@/api/ProductAPI'
import { toast } from 'react-toastify'

type EditProductFormProps = {
    data: ProductFormData
    productId: Product['id']
}

export default function EditProductForm({data, productId} : EditProductFormProps) {

  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
        productName: data.productName,
        productPrice: data.productPrice,
        productDescription: data.productDescription,
        productUnit: data.productUnit,
        productCategory: data.productCategory,
        productImages: data.productImages,
  }})

  const queryClient = useQueryClient()
  const {mutate} = useMutation({
    mutationFn: updateProduct,
    onError: (error) => {
        toast.error(error.message)
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({queryKey: ['products']})
        queryClient.invalidateQueries({queryKey: ['editProduct', productId]})
        toast.success(data)
        navigate('/admin')
    }
  })

  const handleForm = (formData: ProductFormData) => {
        const data = {
            formData,
            productId
        }
        mutate(data)
  }

  return (
    <>
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-black">Crear Proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Edita el siguiente formulario</p>
      <nav className="my-5">
        <Link 
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to='/admin'
          >
          Volver a Productos
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
            value="Editar Producto"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
      </form>
    </div>
</>
  )
}

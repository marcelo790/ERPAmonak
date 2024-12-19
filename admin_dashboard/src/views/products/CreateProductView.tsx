import { createProduct } from '@/api/ProductCategoryAPI';
import ProductForm from '@/components/product/ProductForm';
import { ProductFormData } from '@/types/indexInventary';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CreateProductView() {
    const navigate = useNavigate();
    const initialValues : ProductFormData = {
        id: 0,
        name : "",
        default_code: "", 
        barcode: "", 
        active: false, 
        qty_available: 0, 
        virtual_available: 0, 
        productTemplateId: '',
        productImages: []
    }
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues})

    const mutation = useMutation({
      mutationFn: createProduct,
      onError: (error) => {
        toast.error(error.message)
      },
      onSuccess: (data) => {
        toast.success(data)
        navigate('/')
      }
    })

    const handleForm = (formData: ProductFormData) => {
      mutation.mutate(formData) 
    }
  return (
    <>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black">Crear Producto</h1>
          <nav className="my-5">
              <Link className="bg-zinc-950 hover:bg-zinc-700 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
              to='/products'
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


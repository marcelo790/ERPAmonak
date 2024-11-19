import { Link, useNavigate } from "react-router-dom";
import ProductCategoryForm from "./ProductCategoryForm";
import { ProductCategory, ProductCategoryFormData } from "@/types/index";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
import { updateProductCategory } from "@/api/ProductCategoryAPI";
import { toast } from "react-toastify";

type EditProductCategoryProps = {
    data: ProductCategoryFormData
    productCategoryId: ProductCategory['id']
}

export default function ProductCategoryEdit({data, productCategoryId} : EditProductCategoryProps) {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
        id: data.id,
        name : data.name,
        parent_category_id : data.parent_category_id
    }})
    
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn: updateProductCategory,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['product_category']})
            queryClient.invalidateQueries({queryKey: ['edit_product_category',productCategoryId]})
            toast.success(data)
            navigate('/')
        }
    })
    const handleForm = (formData : ProductCategoryFormData) => {
        const data = {
            formData,
            productCategoryId
        }

        mutate(data)
    }
    return (
        <>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-black">Editar Categoria</h1>
              <p className="text-2xl font-light text-gray-500 mt-5">El nombre es obligatorio para editar categoria</p>
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

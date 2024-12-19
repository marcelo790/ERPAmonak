import { createProduct } from '@/api/ProductCategoryAPI';
import ProductFormMasivo from '@/components/product/ProductFormMasivo';
import { ProductFormData } from '@/types/indexInventary';
import { useMutation } from '@tanstack/react-query';
import { useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CreateProductMasivoView() {
    const navigate = useNavigate();
    const {
      register,
      control,
      handleSubmit,
      formState: { errors },
  } = useForm<{
      products: ProductFormData[];
  }>({
      defaultValues: {
          products: [
              {
                  id: 0,
                  active: true,
                  name: "",
                  default_code: "",
                  barcode: "",
                  qty_available: 0,
                  virtual_available: 0,
                  productTemplateId: "",
                  productImages: [],
              },
          ],
      },
  });

  const { fields, append, remove } = useFieldArray({
      control,
      name: "products",
  });

  const onSubmit = (data: { products: ProductFormData[] }) => {
      console.log("Productos a registrar:", data.products);
  };
  return (
    <>
        <div className="w-full mx-auto">
          <h1 className="text-5xl font-black">Crear Productos</h1>
          <nav className="my-5">
              <Link className="bg-zinc-950 hover:bg-zinc-700 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
              to='/products'
              >
              Volver a Productos
              </Link>
          </nav>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-10 bg-white shadow-lg p-10 rounded-lg ">
            <div className="max-h-60 overflow-y-auto border border-gray-300 rounded">
              <table className="w-full border-collapse text-sm">
                  <thead className='text-sm border'>
                      <tr >
                          <th>Nombre</th>
                          <th>Código</th>
                          <th>Código de Barras</th>
                          <th>Cantidad Física</th>
                          <th>Cantidad Virtual</th>
                          <th>Categoría</th>
                          <th>Activo</th>
                          <th>Imágenes</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                      {fields.map((field, index) => (
                          <tr key={field.id}>
                              {/* Renderiza las celdas del formulario */}
                              <ProductFormMasivo
                                  register={(fieldName) =>
                                      register(`products.${index}.${fieldName}` as const)
                                  }
                                  errors={errors.products?.[index] || {}}
                              />
                              {/* Celda para acciones (Eliminar fila) */}
                              <td className="p-2 text-center border-gray-300">
                                  <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="bg-red-500 text-white px-2 py-1 rounded"
                                  >
                                      X
                                  </button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between">
                <button
                    type="button"
                    onClick={() =>
                        append({
                            id: Date.now(),
                            active: false,
                            name: "",
                            default_code: "",
                            barcode: "",
                            qty_available: 0,
                            virtual_available: 0,
                            productTemplateId: "",
                            productImages: [],
                        })
                    }
                    className="bg-zinc-950 hover:bg-zinc-700 text-white px-4 py-2 rounded"
                >
                    AGREGAR FILA
                </button>
            </div>
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


import { FieldErrors, UseFormRegister } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { ProductCategoryFormData } from "types";

type ProductCategoryFormProps = {
    register: UseFormRegister<ProductCategoryFormData>
    errors: FieldErrors<ProductCategoryFormData>
}

export default function ProductCategoryForm({errors, register}: ProductCategoryFormProps) {
  return (
    <>
            <div className="mb-5 space-y-3">
                <label htmlFor="name" className="text-sm uppercase font-bold">
                    Nombre Categoria
                </label>
                <input
                    id="name"
                    className="w-full p-3  border border-gray-200 rounded-md"
                    type="text"
                    placeholder="Nombre de categoria"
                    {...register("name", {
                        required: "El Nombre de la Categoria es obligatorio",
                    })}
                />

                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>    
            <div className="mb-5 space-y-3">
                <label htmlFor="parent_category_id" className="text-sm uppercase font-bold">
                    SubCategoria de
                </label>
                <select
                    id="parent_category_id"
                    className="w-full p-3 border border-gray-200 rounded-md"
                    {...register("parent_category_id")}
                >
                    <option value="" >Selecciona una categoría</option>
                    <option value="electronics">Electrónica</option>
                    <option value="clothing">Ropa</option>
                    <option value="food">Alimentos</option>
                    <option value="furniture">Muebles</option>
                </select>
            </div>
        </>
  )
}

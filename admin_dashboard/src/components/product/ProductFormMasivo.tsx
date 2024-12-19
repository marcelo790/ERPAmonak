import { ProductFormData } from "@/types/indexInventary";
import { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

type ProductFormProps = {
    register: (fieldName: keyof ProductFormData) => ReturnType<UseFormRegister<{ products: ProductFormData[] }>>;
    errors: Partial<Record<keyof ProductFormData, any>>;
};

export default function ProductMasivoForm({ register, errors }: ProductFormProps) {
    return (
        <>
            {/* Nombre Producto */}
            <td className="p-2 border-gray-300">
                <input
                    type="text"
                    placeholder="Nombre Producto"
                    {...register("name")}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </td>

            {/* Código Producto */}
            <td className="p-2 border-gray-300">
                <input
                    type="text"
                    placeholder="Código Producto"
                    {...register("default_code")}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.default_code && <ErrorMessage>{errors.default_code.message}</ErrorMessage>}
            </td>

            {/* Código de Barras */}
            <td className="p-2 border-gray-300">
                <input
                    type="text"
                    placeholder="Código de Barras"
                    {...register("barcode")}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.barcode && <ErrorMessage>{errors.barcode.message}</ErrorMessage>}
            </td>

            {/* Cantidad Física */}
            <td className="p-2 border-gray-300">
                <input
                    type="number"
                    placeholder="Cantidad Física"
                    min={0}
                    {...register("qty_available")}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.qty_available && <ErrorMessage>{errors.qty_available.message}</ErrorMessage>}
            </td>

            {/* Cantidad Virtual */}
            <td className="p-2 border-gray-300">
                <input
                    type="number"
                    placeholder="Cantidad Virtual"
                    min={0}
                    {...register("virtual_available")}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.virtual_available && <ErrorMessage>{errors.virtual_available.message}</ErrorMessage>}
            </td>

            {/* Categoría */}
            <td className="p-2 border-gray-300">
                <select
                    {...register("productTemplateId")}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="clothing">Ropa</option>
                    <option value="food">Alimentos</option>
                    <option value="furniture">Muebles</option>
                </select>
                {errors.productTemplateId && (
                    <ErrorMessage>{errors.productTemplateId.message}</ErrorMessage>
                )}
            </td>
            <td className="p-2 border-gray-300">
                <input
                    type="checkbox"
                        className="form-checkbox h-4 w-4 text-black"
                    {...register("active")}
                />
            </td>
            {/* Imágenes */}
            <td className="p-2 border-gray-300">
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    {...register("productImages")}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </td>
        </>
    );
}

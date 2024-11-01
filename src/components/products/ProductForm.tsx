import { UseFormRegister, FieldErrors } from "react-hook-form"
import { useState, ChangeEvent  } from "react"
import ErrorMessage from "../ErrorMessage"
import { ProductFormData } from "types"

type ProductFormProps = {
    register: UseFormRegister<ProductFormData>

    errors: FieldErrors<ProductFormData>
}

export default function ProductForm({errors,register} : ProductFormProps) {

    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedImages(files);
        setCurrentIndex(0); // Reinicia el índice al subir nuevas imágenes
    };

    // Funciones para cambiar de imagen
    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div className="mb-5 space-y-3">
                <label htmlFor="productName" className="text-sm uppercase font-bold">
                    Nombre Producto
                </label>
                <input
                    id="productName"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre Producto"
                    {...register("productName", {
                        required: "El Nombre del Producto es obligatorio",
                    })}
                />

                {errors.productName && (
                    <ErrorMessage>{errors.productName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="productPrice" className="text-sm uppercase font-bold">
                    Precio
                </label>
                <input
                    id="productPrice"
                    className="w-full p-3  border border-gray-200"
                    type="number"
                    min={0}
                    placeholder="Precio del Producto"
                    {...register("productPrice", {
                        required: "El Precio del producto es obligatorio",
                    })}
                />

                {errors.productPrice && (
                    <ErrorMessage>{errors.productPrice.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="productUnit" className="text-sm uppercase font-bold">
                    Cantidad Producto
                </label>
                <input
                    id="productUnit"
                    className="w-full p-3  border border-gray-200"
                    type="number"
                    min={0}
                    placeholder="Cantidad Producto"
                    {...register("productUnit", {
                        required: "La Cantidad del producto es obligatorio",
                    })}
                />

                {errors.productUnit && (
                    <ErrorMessage>{errors.productUnit.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="productDescription" className="text-sm uppercase font-bold">
                    Descripción
                </label>
                <textarea
                    id="productDescription"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Descripción del Producto"
                    {...register("productDescription", {
                        required: "Una descripción del producto es obligatoria"
                    })}
                />

                {errors.productDescription && (
                    <ErrorMessage>{errors.productDescription.message}</ErrorMessage>
                )}
            </div>
            
            <div className="mb-5 space-y-3">
                <label htmlFor="productCategory" className="text-sm uppercase font-bold">
                    Categoría
                </label>
                <select
                    id="productCategory"
                    className="w-full p-3 border border-gray-200 rounded-md"
                    {...register("productCategory", {
                        required: "La categoría del producto es obligatoria",
                    })}
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="electronics">Electrónica</option>
                    <option value="clothing">Ropa</option>
                    <option value="food">Alimentos</option>
                    <option value="furniture">Muebles</option>
                </select>
                {errors.productCategory && (
                    <ErrorMessage>{errors.productCategory.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="productImages" className="text-sm uppercase font-bold">
                    Imágenes del Producto
                </label>
                <input
                    id="productImages"
                    type="file"
                    multiple
                    accept="image/*"
                    className="w-full p-3 border border-gray-200"
                    {...register("productImages", {
                        required: "Las imágenes del producto son obligatorias"
                      })}
                    onChange={handleImageChange}
                />
                    {selectedImages.length > 0 && (
                        <div className="relative flex justify-center items-center mt-3">
                            <button
                            className="absolute left-0 px-3 py-1 bg-gray-300 rounded-full"
                            onClick={handlePrevImage}
                            >
                            {"<"}
                            </button>

                            <div className="w-24 h-24">
                            <img
                                src={URL.createObjectURL(selectedImages[currentIndex])}
                                alt={`Preview ${currentIndex}`}
                                className="object-cover w-full h-full"
                            />
                            </div>

                            <button
                            className="absolute right-0 px-3 py-1 bg-gray-300 rounded-full"
                            onClick={handleNextImage}
                            >
                            {">"}
                            </button>
                        </div>
                    )}
            </div>
        </>
    )
}
import { ChangeEvent, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { ProductFormData } from "@/types/indexInventary";
import { FieldErrors, UseFormRegister } from "react-hook-form";

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
            <div className="flex">
                <div className="w-2/3 block justify-center">
                    <div className="mb-5 space-y-3 mt-2">
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-200 rounded-md"
                        type="text"
                        placeholder="Nombre Producto"
                        {...register("name", {
                            required: "El Nombre del Producto es obligatorio",
                        })}
                    />

                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </div>
                <div className="mb-5 space-y-3">                    
                    <input
                        id="default_code"
                        className="w-full p-3  border border-gray-200 rounded-md"
                        type="text"
                        min={0}
                        placeholder="Codigo de Producto"
                        {...register("default_code", {
                            required: "El codigo del producto es obligatorio",
                        })}
                    />

                    {errors.default_code && (
                        <ErrorMessage>{errors.default_code.message}</ErrorMessage>
                    )}
                </div>
                <div className="mb-5 space-y-3">
                    <input
                        id="barcode"
                        className="w-full p-3  border border-gray-200 rounded-md"
                        type="text"
                        min={0}
                        placeholder="Codigo de barras"
                        {...register("barcode", {
                            required: "El codigo de barra del producto es obligatorio",
                        })}
                    />

                    {errors.barcode && (
                        <ErrorMessage>{errors.barcode.message}</ErrorMessage>
                    )}
                </div>
                <div className="flex items-center space-x-9 mb-5 ">
                    <label htmlFor="active" className="text-sm font-semibold text-gray-700">
                        Activo
                    </label>
                    <input
                        id="active"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-black ml-3"
                        {...register("active")}
                    />
                </div>
                <div className="mb-5 space-y-3">
                    <label htmlFor="qty_available" className="text-sm font-semibold text-gray-700">
                        Cantidad Fisica Disponible
                    </label>
                    <input
                        id="qty_available"
                        className="w-full p-3  border border-gray-200 rounded-md"
                        type="number"
                        min={0}
                        placeholder="Cantidad Fisica Disponible"
                        {...register("qty_available", {
                            required: "La Cantidad del producto es obligatorio",
                        })}
                    />

                    {errors.qty_available && (
                        <ErrorMessage>{errors.qty_available.message}</ErrorMessage>
                    )}
                </div>
                <div className="mb-5 space-y-3">
                    <label htmlFor="virtual_available" className="text-sm font-semibold text-gray-700">
                        Cantidad Virtual Disponible
                    </label>
                    <input
                        id="virtual_available"
                        className="w-full p-3  border border-gray-200 rounded-md"
                        type="number"
                        min={0}
                        placeholder="Cantidad Virtual Disponible"
                        {...register("virtual_available", {
                            required: "La Cantidad del producto es obligatorio",
                        })}
                    />

                    {errors.virtual_available && (
                        <ErrorMessage>{errors.virtual_available.message}</ErrorMessage>
                    )}
                </div>            
                
                <div className="mb-5 space-y-3">
                    <select
                        id="productTemplateId"
                        className="w-full p-3 border border-gray-200 rounded-md"
                        {...register("productTemplateId", {
                            required: "La categoría del producto es obligatoria",
                        })}
                    >
                        <option value="">Selecciona una categoría</option>
                        <option value="clothing">Ropa</option>
                        <option value="food">Alimentos</option>
                        <option value="furniture">Muebles</option>
                    </select>
                    </div>                                 
                </div>                      
                <div className="ml-5 w-1/2 flex content-center gap-1 items-center ">
                <div className="mb-5 space-y-3">
                    <label htmlFor="productImages" className="text-sm  font-bold">
                        Imágenes del Producto
                    </label>
                    <input
                        id="productImages"
                        type="file"
                        multiple
                        accept="image/*"
                        className="w-full p-3 border border-gray-200 rounded-md"
                        {...register("productImages", {
                            required: "Las imágenes del producto son obligatorias"
                        })}
                        onChange={handleImageChange}
                    />
                        {selectedImages.length > 0 && (
                            <div className="relative flex justify-center items-center mt-3">
                                <button
                                className="mr-3 left-0 px-3 py-1 bg-gray-300 rounded-full"
                                onClick={handlePrevImage}
                                >
                                {"<"}
                                </button>

                                <div className="w-1/2 h-1/2">
                                <img
                                    src={URL.createObjectURL(selectedImages[currentIndex])}
                                    alt={`Preview ${currentIndex}`}
                                    className="object-cover w-full h-full"
                                />
                                </div>

                                <button
                                className="ml-3 right-0 px-3 py-1 bg-gray-300 rounded-full"
                                onClick={handleNextImage}
                                >
                                {">"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
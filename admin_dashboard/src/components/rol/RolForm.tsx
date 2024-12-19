import { RolFormData } from "@/types/indexSecurity"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import RolWithModulePermitionList from "./RolWithModulePermitionList"


type RolFormProps = {
  register: UseFormRegister<RolFormData>
  errors: FieldErrors<RolFormData>
}

export default function RolForm({errors, register}: RolFormProps) {
  return (
    <>
            <div className="mb-5 space-y-3">
                <input
                    id="name"
                    className="w-full p-3  border border-gray-200 rounded-md"
                    type="text"
                    placeholder="Nombre de rol"
                    {...register("name", {
                        required: "El Nombre del rol es obligatorio",
                    })}
                />

                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>    
            <div className="mb-5 space-y-3">
                <textarea
                    id="description"
                    className="w-full p-3  border border-gray-200 rounded-md resize-none"
                    placeholder="Descripcion del rol"
                    rows={5}
                    {...register("description", {
                        required: "La descripcion del rol es obligatorio",
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div> 
            <div className="mb-5 space-y-3">
                <label className="text-sm uppercase font-bold">
                    Puede seleccionar mas de un modulo
                </label>
                <RolWithModulePermitionList/>                
            </div>    
        </>
  )
}
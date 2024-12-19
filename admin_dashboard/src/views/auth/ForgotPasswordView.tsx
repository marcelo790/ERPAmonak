import { forgotPassword } from "@/api/AuthAPI"
import ErrorMessage from "@/components/ErrorMessage"
import { ForgotPasswordForm } from "@/types/index"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function ForgotPasswordView() {
    const initialValues: ForgotPasswordForm = {
        email: ''
      }
      const { register,reset, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
    
      const {mutate} = useMutation({
        mutationFn: forgotPassword,
        onError: (error) => {
          toast.error(error.message)
        },
        onSuccess(data) {
          toast.success(data)
          reset()
        },
      })
      const handleForgotPassword = (formData: ForgotPasswordForm) => mutate(formData)
    
      return (
        <>
            <h1 className="text-xl font-black text-black">Solicitar Nueva Contraseña</h1>
            <form
                onSubmit={handleSubmit(handleForgotPassword)}
                className="space-y-8 p-5 bg-white mt-3"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <input
                        id="email"
                        type="email"
                        placeholder="Ingresa tu email"
                        className="w-full p-3 rounded-lg border-gray-300 border"
                        {...register("email", {
                            required: "El Email de registro es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value='REESTABLECER CONTRASEÑA'
                    className="input-request-code w-full p-3 text-sm border-gray-300 border rounded-md text-white"
                />
            </form> 
            <nav className="mt-2 flex flex-col space-y-4">
                <Link
                    to='/auth/login'
                    className="text-center text-gray-900 font-bold"
                >
                    ¿Ya tienes cuenta? Iniciar Sesión
                </Link>
            </nav>     
        </>
      )
    }

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RequestConfirmationCodeForm } from "../../types";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "@/components/ErrorMessage";
import { requestConfirmationCode } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function RegisterView() {
    const initialValues: RequestConfirmationCodeForm = {
        email: ''
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const {mutate} = useMutation({
        mutationFn: requestConfirmationCode,
        onError: (error) =>{
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })
    const handleRequestCode = (formData: RequestConfirmationCodeForm) => mutate(formData)

    return (
        <>
            <h1 className="text-xl font-black text-black">Solicitar Código de Confirmación</h1>
            <form
                onSubmit={handleSubmit(handleRequestCode)}
                className="space-y-8 rounded-lg bg-white mt-3"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
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
                    value='ENVIAR CÓDIGO'
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
                <Link
                    to='/auth/forgot-password'
                    className="text-center text-gray-900 font-normal"
                >
                    ¿Olvidaste tu contraseña? Reestablecer
                </Link>
            </nav>
        </>
    )
}

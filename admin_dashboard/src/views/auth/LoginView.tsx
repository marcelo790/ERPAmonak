import { useForm } from "react-hook-form";
import { UserLoginForm } from "@/types/index";
import ErrorMessage from "@/components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from 'react-router-dom';
import { authenticateUser } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function LoginView() {

  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  }
  const { register,reset, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const navigate = useNavigate();
  const {mutate} = useMutation({
    mutationFn: authenticateUser,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      navigate('/')
    },
  })
  const handleLogin = (formData: UserLoginForm) => mutate(formData)

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="form_login space-y-8  "
        noValidate
      >
        <div className="flex flex-col gap-5">
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-3 rounded-lg border-gray-300 border"
            {...register("email", {
              required: "El Email es obligatorio",
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

        <div className="flex flex-col gap-5">
          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3 rounded-lg border-gray-300 border"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value='INGRESAR'
          className="w-full p-3  text-white font-black  text-xl "
        />
        <div className="flex flex-col gap-5 text-current">
            <Link to='/auth/forgot-password' >
                 ¿Olvidaste tu contraseña?
            </Link>
        </div>
        
      </form>      
    </>
  )
}

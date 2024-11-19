import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "@/types/index";
import ErrorMessage from "@/components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "@/api/AuthAPI";
import { toast } from "react-toastify";
import { getAllRoles } from "@/api/RolAPI";

export default function RegisterView() {
  
  const initialValues: UserRegistrationForm = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    confirmed: false,
    roleId: ''
  }

  const navigate = useNavigate();

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const {mutate} = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
        toast.error(error.message)
    },
    onSuccess: (data) => {
        toast.success(data)
        reset()
        navigate('/users')
    }

  })

  const { data: rolData} = useQuery({
    queryKey: ['roles'],
    queryFn: getAllRoles
  })


  const password = watch('password');

  const handleRegister = (formData: UserRegistrationForm) => mutate(formData)

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black ">Registrar Usuario</h1>
        <nav className="my-8">
              <Link className="bg-zinc-950 hover:bg-zinc-700 px-10 py-3 rounded-md text-white text-xl font-bold cursor-pointer transition-colors"
              to='/users'
              >
              Volver a Usuarios
              </Link>
          </nav>
        <form
            onSubmit={handleSubmit(handleRegister)}
            className="mt-10 bg-white shadow-lg p-10 rounded-lg"
            noValidate
        >
            <div className="mb-5 space-y-3">
            <label
                className="text-sm uppercase font-bold"
                htmlFor="email"
            >Email</label>
            <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full p-3  border border-gray-200 rounded-md"
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

            <div className="mb-5 space-y-3">
            <label
                className="text-sm uppercase font-bold"
            >Nombre</label>
            <input
                type="name"
                placeholder="Nombre de Registro"
                className="w-full p-3  border border-gray-200 rounded-md"
                {...register("name", {
                required: "El Nombre de usuario es obligatorio",
                })}
            />
            {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
            )}
            </div>

            <div className="mb-5 space-y-3">
            <label
                className="text-sm uppercase font-bold"
            >Password</label>

            <input
                type="password"
                placeholder="Password de Registro"
                className="w-full p-3  border border-gray-200 rounded-md"
                {...register("password", {
                required: "El Password es obligatorio",
                minLength: {
                    value: 8,
                    message: 'El Password debe ser mínimo de 8 caracteres'
                }
                })}
            />
            {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            </div>

            <div className="mb-5 space-y-3">
            <label
                className="text-sm uppercase font-bold"
            >Repetir Password</label>

            <input
                id="password_confirmation"
                type="password"
                placeholder="Repetir Password"
                className="w-full p-3  border border-gray-200 rounded-md"
                {...register("password_confirmation", {
                required: "Repetir Password",
                validate: value => value === password || 'Los Passwords no son iguales'
                })}
            />

            {errors.password_confirmation && (
                <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
            )}
            </div>
            <div className="mb-5 space-y-3">
                <label htmlFor="roleId" className="text-sm uppercase font-bold">
                    Seleccione un Rol
                </label>
                <select
                    id="roleId"
                    className="w-full p-3 border border-gray-200 rounded-md"
                    {...register("roleId")}
                >
                    <option value="" >Selecciona un rol</option>
                    {rolData && rolData.map((rol: any) => (
                        <option key={rol.id} value={rol.id}>{rol.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex space-x-6">
              <input
                type="submit"
                value="Guardar"
                className="bg-zinc-950 hover:bg-zinc-700 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer
                transition-colors"
              />
              <Link to='/users'
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
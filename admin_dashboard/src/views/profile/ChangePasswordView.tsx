import { useForm } from "react-hook-form"
import ErrorMessage from "@/components/ErrorMessage"
import { UpdateCurrentUserPasswordForm } from "@/types/indexSecurity";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { changePasswordProfile } from "@/api/UserAPI";

export default function ChangePasswordView() {
  const initialValues: UpdateCurrentUserPasswordForm = {
    old_password: '',
    new_password: '',
    new_password_confirmation: ''
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: initialValues })

  const {mutate} = useMutation({
    mutationFn: changePasswordProfile,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
        }
  })
  const password = watch('new_password');

  const handleChangePassword = (formData: UpdateCurrentUserPasswordForm) => mutate(formData)

  return (
    <>
      <div className="mx-auto max-w-3xl">

        <h1 className="text-5xl font-black ">Cambiar Password</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Utiliza este formulario para cambiar tu password</p>

        <form
          onSubmit={handleSubmit(handleChangePassword)}
          className=" mt-14 space-y-5 bg-white shadow-lg p-10 rounded-lg"
          noValidate
        >
          <div className="mb-5 space-y-3">
            <label
              className="text-sm uppercase font-bold"
              htmlFor="old_password"
            >Password Actual</label>
            <input
              id="old_password"
              type="password"
              placeholder="Password Actual"
              className="w-full p-3  border border-gray-200"
              {...register("old_password", {
                required: "El password actual es obligatorio",
              })}
            />
            {errors.old_password && (
              <ErrorMessage>{errors.old_password.message}</ErrorMessage>
            )}
          </div>

          <div className="mb-5 space-y-3">
            <label
              className="text-sm uppercase font-bold"
              htmlFor="new_password"
            >Nuevo Password</label>
            <input
              id="new_password"
              type="password"
              placeholder="Nuevo Password"
              className="w-full p-3  border border-gray-200"
              {...register("new_password", {
                required: "El Nuevo Password es obligatorio",
                minLength: {
                  value: 8,
                  message: 'El Password debe ser mínimo de 8 caracteres'
                }
              })}
            />
            {errors.new_password && (
              <ErrorMessage>{errors.new_password.message}</ErrorMessage>
            )}
          </div>
          <div className="mb-5 space-y-3">
            <label
              htmlFor="new_password_confirmation"
              className="text-sm uppercase font-bold"
            >Repetir Password</label>

            <input
              id="new_password_confirmation"
              type="password"
              placeholder="Repetir Password"
              className="w-full p-3  border border-gray-200"
              {...register("new_password_confirmation", {
                required: "Este campo es obligatorio",
                validate: value => value === password || 'Los Passwords no son iguales'
              })}
            />
            {errors.new_password_confirmation && (
              <ErrorMessage>{errors.new_password_confirmation.message}</ErrorMessage>
            )}
          </div>

          <input
            type="submit"
            value='Cambiar Password'
            className="bg-zinc-950 hover:bg-zinc-700 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer
                    transition-colors"
          />
        </form>
      </div>
    </>
  )
}

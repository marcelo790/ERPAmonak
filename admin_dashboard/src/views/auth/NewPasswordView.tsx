import NewPasswordForm from '@/components/auth/NewPasswordForm'
import NewPasswordToken from '@/components/auth/NewPasswordToken'
import { ConfirmToken } from '@/types/index'
import { useState } from 'react'

export default function NewPasswordView() {

    const [token, setToken] = useState<ConfirmToken['token']>('')
    const [isValidToken, setIsValidToken] = useState(false)

  return (
    <>
        <h1 className="text-xl font-black text-black">Reestablecer Contraseña</h1>
        {!isValidToken ? 
            <NewPasswordToken 
                token={token} 
                setToken={setToken} 
                setIsValidToken={setIsValidToken}/> :
            <NewPasswordForm
                token={token}
            />
        }
    </>
  )
}

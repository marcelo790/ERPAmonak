import api from '@/lib/axios'
import { isAxiosError } from 'axios'
import { ConfirmToken, ForgotPasswordForm, NewPasswordForm, RequestConfirmationCodeForm, UserLoginForm, UserRegistrationForm } from '../types'
import { User } from '@/types/indexSecurity';

export async function createAccount(formData: UserRegistrationForm){
    try {
        const url = '/auth/create-account';
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function confirmAccount(formData: ConfirmToken){
    try {
        const url = '/auth/confirm-account';
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function requestConfirmationCode(formData: RequestConfirmationCodeForm){
    try {
        const url = '/auth/request-code';
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export interface AuthResponse {
    token: string;
  }

export async function authenticateUser(formData: UserLoginForm){
    try {
        const url = '/auth/login';
        const {data} = await api.post<AuthResponse>(url, formData)
        if (data && data.token) {
            localStorage.setItem('AUTH_TOKEN', data.token);
            return data.token;
        } else {
            throw new Error('Token no disponible en la respuesta');
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function forgotPassword(formData: ForgotPasswordForm){
    try {
        const url = '/auth/forgot-password';
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function validateToken(formData: ConfirmToken){
    try {
        const url = '/auth/validate-token';
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function updatePasswordWithToken({formData,token}: {formData:NewPasswordForm, token:ConfirmToken['token']}){
    try {
        const url = `/auth/update-password/${token}`;
        const {data} = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getUser() {
    try {
        const {data} = await api<User>('/auth/user-info')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}
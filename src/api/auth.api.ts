import { LoginRequest, LoginResponse } from "../types/auth.types";

const BASE_URL = import.meta.env.VITE_API_URL

if (!BASE_URL) {
  throw new Error('VITE_API_URL no está definida')
}

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Error en la solicitud de login');
    }
    return response.json();
}
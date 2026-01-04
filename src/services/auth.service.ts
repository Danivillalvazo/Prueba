import { loginApi } from "../api/auth.api";

export const loginService = async (username: string, password: string) => {
 
    try{
        const response = await loginApi({
             username, password 
        });
        return response;
    } catch (error) {
        throw new Error("Error en el servicio de login");
    }
}
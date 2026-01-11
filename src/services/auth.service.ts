import { loginApi } from "../api/auth.api";

export const loginService = async (username: string, pwd: string) => {
 
    try{
        const response = await loginApi({
             username, pwd 
        });

        console.log("Respuesta del login:", response.conflicts);

        return response;
    } catch (error) { 
        throw new Error(error instanceof Error ? error.message : String(error));
    }
}
export interface LoginRequest {
  username: string;
  pwd: string;
}

export interface User {
  id_usuario: number;
  usuario: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
}

export interface LoginResponse {
  conflicts: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

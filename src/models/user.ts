import { roles } from './roles';

export interface user {
    clave: string;
    email: string;
    estado: string;
    nombres: string;
    apellidos: string;
    id: string;
    nick: string;
    token: string;
    photo: string;
    roles: roles[];
    tipo: string;
    celular: string;
    identificacion: string;
}

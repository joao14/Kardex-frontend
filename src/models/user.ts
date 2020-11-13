import { roles } from './roles';

export interface user {
    usuaid: number;
    dni: string;
    email: string;
    state: string;
    name: string;
    lastname: string;
    roles: roles[];
    photo: string;
}

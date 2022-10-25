import { Rol } from "./rol.enum";

export class User{
    id: number|undefined;
    username: string = "";
    password: string= "";
    name: string= "";
    token:string= "";
    role: Rol= Rol.USER;
}
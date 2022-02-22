import { IBase } from "./ibase.model";

export class Utente implements IBase {

    public id!: number;
    public name!: string;
    public email!: string;
    public gender!: string;
    public status!: string;
    
}
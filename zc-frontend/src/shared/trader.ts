import { Shares } from "./shares";

export class Trader{
    id!: number;
    name!: string;
    password!: string;
    phoneNumber!: string;
    emailId!: string;
    balance!:number;
    panCard!:string;
    share!:Shares;
    role!: string;
}
import { Category } from "../schemas/book.schema";


export class createBookDto{
    readonly Title: string;
    readonly Description:string;
    readonly Author:string;
    readonly Price:number;
    readonly Category:Category;
}
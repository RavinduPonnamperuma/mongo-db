import { Category } from "../schemas/book.schema";


export class UpdateBookDto{
    readonly Title: string;
    readonly Description:string;
    readonly Author:string;
    readonly Price:number;
    readonly Category:Category;
}
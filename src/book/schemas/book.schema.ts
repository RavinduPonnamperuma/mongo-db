import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE = 'Adventure',
    CALSSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
}

@Schema({
    timestamps:true
})
export class Book{
    @Prop()
    Title: string;

    @Prop()
    Description:string;

    @Prop()
    Author:string;

    @Prop()
    Price:number;
    
    @Prop()
    Category:Category
}

export const BookSchema = SchemaFactory.createForClass(Book)
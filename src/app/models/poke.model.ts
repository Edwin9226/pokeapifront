export class Poke{
    id: number | undefined;
    title: string = "";
    author: string = "";
    price: number = 0.0;
    description:string = "";

    constructor(id?: number, title:string="", price: number=0){
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
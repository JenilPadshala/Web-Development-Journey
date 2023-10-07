class Pen{
    constructor (name, colour, price){
        this.name = name;
        this.colour = colour;
        this.price = price;
    }
    showDetails (){
        console.log(`details : ${this.name} ${this.colour} ₹${this.price}`);
    }
}



const pen1 = new Pen("Piere Cardin", "black", 100);
pen1.showDetails();
let pen2 = pen1;
pen1.colour = "blue";
pen2.showDetails();
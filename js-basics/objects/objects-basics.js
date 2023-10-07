const car = {
    manufacturer : "Ford",
    model : "Mustang",
    year : 2010,

    details : function (){
        console.log(`Car details: ${this.manufacturer} ${this.model}, ${this.year}`);
    }
}

console.log(car.details());

car.manufacturer = "Mercedes";
car.model = "AMG F1";
car.year = 2020;

console.log(car.details());
class Car{
    static carCount = 0;
    constructor(model, year){
        this.model = model;
        this.year = year;
        Car.carCount += 1;
    }
    static race(){
        console.log("3..2..1..");
    }
}

let carArray = []
for (let i=0; i<10; i++){
    const instance = new Car("Mercedes", 2010);
}

console.log(Car.carCount);
Car.race();
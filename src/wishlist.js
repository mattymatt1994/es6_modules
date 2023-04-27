import { Car } from "./car.js";

//List of Cars:
//[Car()

export default class Wishlist {
  constructor() {
    this.list = [];
    this.nextID = 0;
  }
  add(make, model, year) {
    const tempCar = new Car(++this.nextID, make, model, year);
    this.list.push(tempCar);
    //this.list = [...this.list, tempCar];
  }

  remove(carId) {
    //Filter and Splice at the correct index
    //Splice wants 2 pieces of info to work correctly
        //1. The index in the array
        //2. How many items to remove
        const index = this.list.findIndex((ele) => {
            return ele.id == carId;
        });
        this.list.splice(index, 1);
        
  }
}



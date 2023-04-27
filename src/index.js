import Wishlist from "./wishlist";

console.log("Hello World");
//DOM slectiom forms
const carForm = document.querySelector("#submitForm");
const carMakeInput = document.querySelector("#makeInput");
const carModelInput = document.querySelector("#modelInput");
const carYearInput = document.querySelector("#yearInput");
const carMakeP = document.querySelector("#car-make");
const carModelP = document.querySelector("#car-model");
const carYearP = document.querySelector("#car-year");
const removeButton = document.querySelector(".removeBtn");
const wishListUl = document.querySelector("#wishListContainer > ul");
// TODO
//Test the remove method
const testWishlist = new Wishlist();
//Adding cars to the state (more info behind the scene)
testWishlist.add("Subaru", "Legacy", 2009);
testWishlist.add("Ford", "F-150", 2010);
testWishlist.add("Chevy", "Impala", 1967);
console.log(testWishlist);
testWishlist.remove(2);

function showCarDetails(car) {
  carMakeP.textContent = car.make;
  carModelP.textContent = car.model;
  carYearP.textContent = car.year;
  //Enable the button
  removeButton.disabled = false;
  removeButton.addEventListener("click", removeCar);
  //Storing the current car's id inside the button
  removeButton.setAttribute("data-carId", car.id);
}

//Generic DOM update function
function updateDOMList() {
  //Reset everything in the ul
  wishListUl.textContent = " ";
  //Iteration over the cars
  testWishlist.list.forEach((car, index, arr) => {
    //create the list item
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newP.textContent = `${car.make} ${car.model}`;

    //Add a click event to the list item
    newLi.addEventListener("click", () => {
      showCarDetails(car);
    });

    //Append Everything!
    newLi.appendChild(newP);
    wishListUl.appendChild(newLi);
  });
}

//the callback function for a submit event
function addCar(event) {
  event.preventDefault();
  //Rewrite with destructuring {}
  const tempMakeVal = carMakeInput.value;
  // const { value : tempMakeValue } = carMakeInput;
  const tempModelVal = carModelInput.value;
  const tempYearVal = carYearInput.value;
  //this updated our internal state
  testWishlist.add(tempMakeVal, tempModelVal, tempYearVal);
  //We need to make sure that the display is up to date with our internal state
updateDOMList();
}

//add an event to the "add" button
carForm.addEventListener("submit", addCar);

function removeCar() {
    //Retrieving the current car id off of the removeButton ele
  const carId = Number(removeButton.getAttribute("data-carId"));
  //Updated the internal state variable
  testWishlist.remove(carId);
  //Keep our display in sync with the internal state
  updateDOMList();
  carMakeP.textContent = "";
  carModelP.textContent = "";
  carYearP.textContent = "";
  //Disable the remove button
  removeButton.disabled = true;
}

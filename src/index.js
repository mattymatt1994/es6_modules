import Wishlist from "./wishlist";

console.log("Hello World");
//DOM slectiom forms
const carForms = document.querySelector("#submitForm");
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
testWishlist.add("Chevy", "Impala", 1964);
console.log(testWishlist);
testWishlist.remove(2);

function showCarDetails(car) {
  carMakeP.textContent = car.make;
  carModelP.textContent = car.model;
  carYearP.textContent = car.year;
  //Enable the button
  removeButton.disabled = false;
  //Storing the current car's id inside the button
  removeButton.setAttribute("data-cardId", car.id);
}

//Generic DOM update function
function updateDOMList() {
  //Reset everything in the ul
  wishListUl.textContent = " ";
  //Iteration over the cars
  carsWishList.list.forEach((car, index, arr) => {
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

updateDOMList();

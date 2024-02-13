import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="fw-bolder food-heading ">Healthy Food</h1>
        <FoodInput handlekeyDown={onKeyDown} />
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>
    </>
  );
}
export default App;

// console.log(event);
// setTextState(event.target.value);

// let foodItems = [
//   "Fruits",
//   "Greeen vegetables",
//   "Salad",
//   "Milk",
//   "Roti",
//   "Ghee",
// ];

// let textStateArr = useState("Food Item Entered by User");
// let textToShow = textStateArr[0];
// let setTextState = textStateArr[1];
// console.log(`Current value of textState: ${textToShow}`);

// let foodItems = [];

// ---> if else condition
// let foodItems = [];
// if (foodItems.length === 0) {
//   return <h3>I Am Still Hungry.</h3>;
// }
// let emptyMessage =
//   foodItems.length === 0 ? <h3>I Am Still Hungry.</h3> : null;

{
  /* ---> ternary operator used  */
}
{
  /* {foodItems.length === 0 ? <h3>I Am Still Hungry.</h3> : null} */
}
{
  /* // {emptyMessage}  */
}
{
  /* <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Roti</li>
      </ul> */
}

{
  /* <Container>
        <p>This is the second container we are using same container</p>
      </Container> */
}

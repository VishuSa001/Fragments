import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="  list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleOnBuyIt={(event) => onBuyButton(item, event)}
          // handleOnBuyIt={() => console.log(`${item} bought`)}
        />
      ))}
    </ul>
  );
};
export default FoodItems;

//   let foodItems = ["Dal", "Greeen vegetables", "Salad", "Milk", "Roti", "Ghee"];

// <Item key={item} foodItems={item}>
//   {" "}
// </Item>

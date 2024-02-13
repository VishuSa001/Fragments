import styles from "./Item.module.css";
const Item = ({ foodItems, bought, handleOnBuyIt }) => {
  return (
    <li
      className={`${styles["vs-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["vs-span"]}> {foodItems} </span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleOnBuyIt}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;

// events method
//   const handleOnBuyIt = (event) => {
//     console.log(event);
//     console.log(`${foodItems} Buy It`);
// };

// onClick={(event) => handleOnBuyIt(event)}

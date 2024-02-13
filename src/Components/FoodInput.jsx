import styles from "./FoodInput.module.css";

const FoodInput = ({ handlekeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Items here"
      className={styles.foodInput}
      onKeyDown={handlekeyDown}
    />
  );
};

export default FoodInput;

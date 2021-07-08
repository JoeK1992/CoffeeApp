import { coffees, extras } from "../stock";
import { useState } from "react";

function Form() {
  const [coffeeSelection, setCoffeeSelection] = useState("");
  const [cream, setCream] = useState(false);
  const [sugar, setSugar] = useState(false);
  const [milk, setMilk] = useState(false);
  const [ordered, setOrdered] = useState(false);

  function handleCoffeeChange(event) {
    setCoffeeSelection(event.target.value);
  }

  function handleAddExtra(event) {
    if (event.target.value === "cream") {
      setCream(true);
    } else if (event.target.value === "sugar") {
      setSugar(true);
    } else {
      setMilk(true);
    }
  }

  function handleOrder() {
    coffees.coffeeSelection = coffees.coffeeSelection - 1;
    if (cream) {
      extras.cream = extras.cream - 1;
    }
    if (sugar) {
      extras.sugar = extras.sugar - 1;
    }
    if (milk) {
      extras.milk = extras.milk - 1;
    }

    setOrdered(true);
  }

  return (
    <main>
      <form>
        <h1 className="Form">Please make your selection</h1>
        <select onChange={handleCoffeeChange}>
          {coffees.map((coffee) => {
            return <option value={coffee.type}>{coffee.type}</option>;
          })}
        </select>
        <ul>
          {extras.map((extra) => {
            return (
              <li>
                <button value={extra.type} onClick={handleAddExtra}>
                  Add {extra.type}
                </button>
                {extra.quantity === 0 && <h3>Out of stock</h3>}
              </li>
            );
          })}
        </ul>
        <button onClick={handleOrder}>Order now</button>
      </form>
      <text>
        Your basket: Drink: {coffeeSelection}. Extras:
        {cream && <text>Cream</text>}
        {sugar && <text>Sugar</text>}
        {milk && <text>Milk</text>}
      </text>
      {ordered && <text>Thank you for you order</text>}
    </main>
  );
}

export default Form;

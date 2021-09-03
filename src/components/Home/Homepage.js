import React, { useState } from "react";
import styles from "./Homepage.module.css";
import Link from "next/link";

export default function Homepage() {
  const pizzas = [
    {
      id: "1",
      name: "Cheeze Pizza",
      slug: "Cheeze Pizza",
      toppings: ["mozzarella cheeze"],
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 6000,
    },
    {
      id: "2",
      name: "Meat Pizza",
      slug: "Meat Pizza",
      toppings: ["beef ", "sausage", ""],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_548340295.jpg.webp",
      price: 6500,
    },
    {
      id: "3",
      name: "Veggie Pizza",
      slug: "Veggie Pizza",
      toppings: ["pepper", "mushroom", "eggplant", "onion"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg.webp",
      price: 5000,
    },
    {
      id: "4",
      name: "Pepperoni Pizza",
      slug: "Pepperoni Pizza",
      toppings: ["pepperoni"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074.jpg.webp",
      price: 7000,
    },
    {
      id: "5",
      name: "Margherita Pizza",
      slug: "Margherita Pizza",
      toppings: ["mozzarella cheeze"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_347791016.jpg.webp",
      price: 6000,
    },
    {
      id: "6",
      name: "BBQ Chicken Pizza",
      slug: "BBQ Chicken Pizza",
      toppings: ["chicken "],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg.webp",
      price: 7500,
    },
    {
      id: "7",
      name: "Hawaiian Pizza",
      slug: "Hawaiian Pizza",
      toppings: ["ham ", "pineapple"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_313437680.jpg.webp",
      price: 8000,
    },
  ];

  const [keyword, setKeyword] = useState("");
  const filteredPizzas = pizzas.filter(
    (pizza) =>
      pizza.name.toLowerCase().includes(keyword) ||
      pizza.toppings.includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <div>
      <div className={styles.searchWrapper}>
        <input
          placeholder="search for pizza or toppings ... "
          className={styles.searchBar}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.pizzaContainer}>
        {filteredPizzas < 1 ? (
          <div className={styles.nopeContainer}>Sorry we don't have that </div>
        ) : (
          filteredPizzas.map((pizza) => (
            <div className={styles.pizzaItem} key={pizza.id}>
              <Link href={`/${pizza.slug}`}>
                <a className={styles.pizzaImageBox}>
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className={styles.pizzaImage}
                  ></img>
                </a>
              </Link>
              <div className={styles.pizzaText}>
                <p className={styles.pizzaheader}>{pizza.name}</p>
                <p className={styles.pizzaToppings}>
                  {pizza.toppings.map((topping) => topping).join(", ")}
                </p>
                <p className={styles.pizzaPrice}>{pizza.price} CFA</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

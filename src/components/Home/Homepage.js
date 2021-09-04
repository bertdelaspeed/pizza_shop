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
        "https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVhdCUyMHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 6500,
    },
    {
      id: "3",
      name: "Veggie Pizza",
      slug: "Veggie Pizza",
      toppings: ["pepper", "mushroom", "eggplant", "onion"],
      image:
        "https://images.unsplash.com/photo-1608424406467-ff8e17a1498e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZ2llJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 5000,
    },
    {
      id: "4",
      name: "Pepperoni Pizza",
      slug: "Pepperoni Pizza",
      toppings: ["pepperoni"],
      image:
        "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 7000,
    },
    {
      id: "5",
      name: "Margherita Pizza",
      slug: "Margherita Pizza",
      toppings: ["mozzarella cheeze"],
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 6000,
    },
    {
      id: "6",
      name: "BBQ Chicken Pizza",
      slug: "BBQ Chicken Pizza",
      toppings: ["chicken "],
      image:
        "https://images.unsplash.com/photo-1592977731761-2d58aafef572?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 7500,
    },
    {
      id: "7",
      name: "Hawaiian Pizza",
      slug: "Hawaiian Pizza",
      toppings: ["ham ", "pineapple"],
      image:
        "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF3YWlpYW4lMjBwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
          <div className={styles.nopeContainer}>Sorry we do not have that </div>
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

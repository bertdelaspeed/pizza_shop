import React, { useState } from "react";
import styles from "./Homepage.module.css";
import Link from "next/link";

export default function Homepage({ pizzas }) {
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

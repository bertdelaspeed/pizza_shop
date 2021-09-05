import React from "react";
import styles from "../styles/Pizza.module.css";
import Head from "next/head";
import Link from "next/link";

export default function slug({ pizza, otherPizzas }) {
  console.log(pizza);
  return (
    <div className={styles.Container}>
      <Head>
        <title>{pizza.title}</title>
      </Head>
      <div className={styles.pizzaWrapperLeft}>
        <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
      </div>
      <div className={styles.pizzaWrapperRight}>
        <div className={styles.pizzaInfo}>
          <p className={styles.pizzaTitle}>{pizza.name}</p>
          <p className={styles.pizzaDescription}>{pizza.description}</p>
          <p className={styles.pizzaPrice}>{pizza.price} CFA</p>
          <p className={styles.pizzaToppings}>
            {pizza.toppings.map((topping) => topping).join(", ")}{" "}
          </p>
        </div>

        <div className={styles.otherPizzasWrapper}>
          {otherPizzas.map((otherPizza) => {
            return (
              <div className={styles.otherpizzas} key={otherPizza.id}>
                <Link href={"/" + otherPizza.slug}>
                  <a>
                    <img src={otherPizza.image} alt={otherPizza.name} />
                    <p>{otherPizza.name}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://laspeedpizza.herokuapp.com/pizza/");
  const pizzas = await res.json();

  const paths = pizzas.map((pizza) => ({
    params: { slug: `${pizza.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://laspeedpizza.herokuapp.com/pizza/");
  const pizzas = await res.json();

  const pizza = pizzas.filter((pizza) => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter((pizza) => pizza.slug !== params.slug);

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas
        .sort(() => Math.random() - Math.random())
        .slice(0, 3),
    },
  };
};

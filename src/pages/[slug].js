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
  const pizzas = [
    {
      id: "1",
      name: "Cheeze Pizza",
      slug: "Cheeze Pizza",
      toppings: ["mozzarella cheeze"],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 6000,
    },
    {
      id: "2",
      name: "Meat Pizza",
      slug: "Meat Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["beef ", "sausage", ""],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_548340295.jpg.webp",
      price: 6500,
    },
    {
      id: "3",
      name: "Veggie Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
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
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["pepperoni"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074.jpg.webp",
      price: 7000,
    },
    {
      id: "5",
      name: "Margherita Pizza",
      slug: "Margherita Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["mozzarella cheeze"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_347791016.jpg.webp",
      price: 6000,
    },
    {
      id: "6",
      name: "BBQ Chicken Pizza",
      slug: "BBQ Chicken Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["chicken "],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg.webp",
      price: 7500,
    },
    {
      id: "7",
      name: "Hawaiian Pizza",
      slug: "Hawaiian Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["ham ", "pineapple"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_313437680.jpg.webp",
      price: 8000,
    },
  ];

  const paths = pizzas.map((pizza) => ({
    params: { slug: `${pizza.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pizzas = [
    {
      id: "1",
      name: "Cheeze Pizza",
      slug: "Cheeze Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["mozzarella cheeze"],
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 6000,
    },
    {
      id: "2",
      name: "Meat Pizza",
      slug: "Meat Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["beef ", "sausage", ""],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_548340295.jpg.webp",
      price: 6500,
    },
    {
      id: "3",
      name: "Veggie Pizza",
      slug: "Veggie Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["pepper", "mushroom", "eggplant", "onion"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg.webp",
      price: 5000,
    },
    {
      id: "4",
      name: "Pepperoni Pizza",
      slug: "Pepperoni Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["pepperoni"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074.jpg.webp",
      price: 7000,
    },
    {
      id: "5",
      name: "Margherita Pizza",
      slug: "Margherita Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["mozzarella cheeze"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_347791016.jpg.webp",
      price: 6000,
    },
    {
      id: "6",
      name: "BBQ Chicken Pizza",
      slug: "BBQ Chicken Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["chicken "],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413.jpg.webp",
      price: 7500,
    },
    {
      id: "7",
      name: "Hawaiian Pizza",
      slug: "Hawaiian Pizza",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis quidem sunt corrupti omnis error molestiae saepe inventore minima eius ipsam ipsum, unde qui architecto neque. Quod dignissimos dolorem incidunt?",
      toppings: ["ham ", "pineapple"],
      image:
        "https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_313437680.jpg.webp",
      price: 8000,
    },
  ];

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

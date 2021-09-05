import Homepage from "../components/Home/Homepage";
import Layout from "../components/Layout/Layout";

export default function Home({ pizzas }) {
  return (
    <Layout>
      <Homepage pizzas={pizzas} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://laspeedpizza.herokuapp.com/pizza/");
  const pizzas = await res.json();

  return {
    props: {
      pizzas,
    },
  };
};

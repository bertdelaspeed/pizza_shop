import Head from "next/head";
import Image from "next/image";
import Homepage from "../components/Home/Homepage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import home from "./home";

export default function Home() {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}

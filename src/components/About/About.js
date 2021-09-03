import React from "react";
import Head from "next/head";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="styles description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        necessitatibus minus. At veritatis harum blanditiis soluta possimus
        exercitationem explicabo hic fugit ratione minima saepe repellat, rerum
        molestiae quisquam ad natus!
      </p>
    </div>
  );
}

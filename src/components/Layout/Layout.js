import React from "react";
import styles from "./Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop</title>
        <link rel="rel" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Copyright &copy; BERTDELASPEED</footer>
    </div>
  );
}

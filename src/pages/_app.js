import "../styles/globals.css";
import styles from "../styles/MyApp.module.css";
import Link from "next/Link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <Link href="/">
            <a>
              <div className={styles.brandPizza}>
                <img src="/assets/images/pizza.svg" alt="brand" />
                <p>Pizza shop</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.navbarContact}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className={styles.navbarContact}>About</li>
            </a>
          </Link>
        </ul>
      </nav>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

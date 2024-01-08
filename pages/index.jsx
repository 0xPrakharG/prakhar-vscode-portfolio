import Link from "next/link";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  const tagline = "<!-- Your Friendly Neighbourhood Developer -->";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h6 className={styles.greet}>Hey there, folks! I am</h6>
            <h1 className={styles.name}>Prakhar Goyal</h1>
            <h6 className={styles.bio}>{tagline}</h6>
            <div>
              <Link href="/projects">
                <button className={styles.button}>Check out my works!</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}

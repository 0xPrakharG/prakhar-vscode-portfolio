import styles from "../style/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h3 className={styles.paragraph1}>
        Hey there!👋Prakhar here, rounding off my Final Year B.Tech at Manipal
        University, Jaipur🎓. A Full-Stack Web Developer🧑🏻‍💻 and Dipping my toes
        into the Web3.0—exploring and learning, based in Prayagraj, India.
        Worked as a Frontend Developer at Kapx, Singapore, and now on the search
        for new SDE opportunities🖥️.
      </h3>
      <br />
      <h3 className={styles.paragraph2}>
        Beyond this, just a regular guy who enjoys a good plate of biryani 🍲
        and vibes on Taylor Swift🕺🏻. Let's keep it real and make some meaningful
        tech!💻✨
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;

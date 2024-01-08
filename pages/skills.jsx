import styles from "../styles/SkillsPage.module.css";

const skills = [
  {
    id: 1,
    name: "NextJS",
    img: "./skills/next.svg",
  },
  {
    id: 2,
    name: "ReactJS",
    img: "./skills/react.svg",
  },
  {
    id: 3,
    name: "Typescript",
    img: "./skills/ts.svg",
  },
  {
    id: 4,
    name: "Javascript",
    img: "./skills/js.svg",
  },

  {
    id: 5,
    name: "NodeJS",
    img: "./skills/node.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    img: "./skills/mongodb.svg",
  },
  {
    id: 7,
    name: "ExpressJS",
    img: "./skills/express.svg",
  },
  {
    id: 8,
    name: "HTML",
    img: "./skills/html.svg",
  },
  {
    id: 9,
    name: "CSS",
    img: "./skills/css.svg",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    img: "./skills/tailwind.svg",
  },
  {
    id: 11,
    name: "mySql",
    img: "./skills/mysql.svg",
  },
  {
    id: 12,
    name: "Firebase",
    img: "./skills/firebase.svg",
  },
  {
    id: 13,
    name: "MUI",
    img: "./skills/mui.svg",
  },
  {
    id: 14,
    name: "Figma",
    img: "./skills/figma.svg",
  },
  {
    id: 15,
    name: "Bootstrap",
    img: "./skills/bootstrap.svg",
  },
];

const SkillsPage = () => {
  return (
    <>
      <h3 style={{textAlign:"center", width: "100%" }}>
        Tech I've worked on till now
      </h3>
      <div className={styles.skills}>
        <div className={styles.skillContainer}>
          {skills.map((skill) => (
            <div className={styles.icons} key={skill.id}>
              <img
                src={skill.img}
                className={styles.iconImg}
                alt={skill.name}
              />
              <p className={styles.iconText}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default SkillsPage;

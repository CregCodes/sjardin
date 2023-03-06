import styles from "./index.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <h1 className={styles.projectTitle}>Project Title</h1>
      <h2 className={styles.projectType}>Come Build With Me</h2>
      <p className={styles.projectDescription}>
        Project Description is included in this section. What are the project
        goals etc. In a short description
      </p>

      <h3 className={styles.techTitle}>Technologies</h3>
      <div className={styles.techstack}>
        <p>React</p>

        <p>JavaScript</p>

        <p>HTML</p>
      </div>
      <div className={styles.contactContainer}>
        <div>
          <h3>Contact</h3>
          <p>Name is here</p>
        </div>
        <div>
          <h3>Date Added</h3>
          <p>01.03.23</p>
        </div>
      </div>
    </div>
  );
}

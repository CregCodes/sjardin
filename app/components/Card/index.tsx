import styles from "./index.module.css";

export default function Card() {
  return (
    <div className={styles.techlist}>
      <h1>Project Title</h1>
      <h2>Come Built With Me</h2>
      <p>
        Project Description is included in this section. What are the project
        goals etc. In a short description
      </p>

      <h3>Technologies</h3>
      <div>
        <p>React</p>

        <p>JavaScript</p>

        <p>HTML</p>
      </div>
      <div>
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

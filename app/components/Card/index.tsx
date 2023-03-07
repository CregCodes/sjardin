import styles from "./index.module.css";

export interface CardObject {
  id: number;
  username: string;
  projectTitle: string;
  projectType: string;
  projectDescription: string;
  techstack: string[];
  dateCreated: string;
}
/** takes in a timestamp string and returns the date in order */
function getDateFromProps(inputString: string): string {
  const date = inputString.toString();
  
  // Get the first 10 characters of the string
  const firstTenChars = date.slice(0, 10);
  
  // Reverse the order of the characters using the Array.prototype.reverse() method
  const reversedChars = firstTenChars.split('').reverse().join('');

  return reversedChars;
}
 

export default function Card( props: CardObject) {
  return (
    <div className={styles.card}>
      <h1 className={styles.projectTitle}>{props.projectTitle}</h1>
      <h2 className={styles.projectType}>{props.projectType}</h2>
      <p className={styles.projectDescription}>
        {props.projectDescription}
      </p>

      <h3 className={styles.techTitle}>Technologies</h3>
      <div className={styles.techstack}>
        <p>{props.techstack[1]}</p>

        <p>{props.techstack[2]}</p>

        <p>{props.techstack[3]}</p>
      </div>
      <div className={styles.contactContainer}>
        <div>
          <h3>Contact</h3>
          <p>{props.username}</p>
        </div>
        <div>
          <h3>Date Added</h3>
          <p>{getDateFromProps(props.dateCreated)}</p>
        </div>
      </div>
    </div>
  );
}

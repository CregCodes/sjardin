import styles from "./card.module.css";
import { useState } from "react";

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
  const reversedChars = firstTenChars.split("").reverse().join("");

  return reversedChars;
}

function checkIfEmpty(inputString: string): boolean {
  if (inputString === "") {
    return false;
  }
  return true;
}

/** takes in the project type and returns a number. That number is then stored in the stylesIndex which will be used to conditionally render the appropriate style */
function getNumberFromType(inputString: string): number {
  if (inputString === "build") {
    return 1;
  }
  if (inputString === "study") {
    return 2;
  }
  if (inputString === 'pair') {
    return 3;
  }
  return 1;
}

export default function Card(props: CardObject) {
  const [styleIndex, setStyleIndex] = useState(getNumberFromType(props.projectType))

  return (
    <div className={styleIndex === 1 ? styles.buildCardContainer : styleIndex === 2 ? styles.studyCardContainer : styles.pairCardContainer}>
        <div className={styles.underlay}>
        </div>
      <div className={styles.card}>
        <div className={styles.titleContainer}>
          <h2>{props.projectTitle.toUpperCase()}</h2>
        </div>
        <button className={styles.typeContainer}>
          <p>{`COME ${props.projectType.toUpperCase()} WITH ME >>`}</p>
        </button>
        <div className={styles.descriptionContainer}>
          <p>{props.projectDescription}</p>
        </div>
        <div className={styles.techContainer}>
          <h3>Technologies</h3>
          <div className={styles.techlist}>
            {checkIfEmpty(props.techstack[0]) ? <p>{props.techstack[0]}</p> : ''}

            {checkIfEmpty(props.techstack[1]) ? <p>{props.techstack[1]}</p> : ''}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.contactContainer}>
            <h3>Contact</h3>
            <p>{props.username}</p>
          </div>
          <div className={styles.dateContainer}>
            <h3>Date Added</h3>
            <p>{getDateFromProps(props.dateCreated)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


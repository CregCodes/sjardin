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
function getDateFromProps(date: string): string {
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  const orderedDate = day + "/" + month + "/" + year;
  return orderedDate;
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

function handleClick() {
  console.log('clicked');
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
        <button className={styles.typeContainer} onClick={handleClick}>
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


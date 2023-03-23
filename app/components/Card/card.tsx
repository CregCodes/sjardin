import styles from "./card.module.css";

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

export default function Card(props: CardObject) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.titleContainer}>
          <h2>{props.projectTitle}</h2>
        </div>
        <div className={styles.typeContainer}>
          <p>Come {props.projectType} with me</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{props.projectDescription}</p>
        </div>
        <div className={styles.techContainer}>
          <h3>Technologies</h3>
          <div className={styles.techlist}>
            <p>{props.techstack[1]}</p>

            <p>{props.techstack[2]}</p>

            <p>{props.techstack[3]}</p>
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

/**<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div> */

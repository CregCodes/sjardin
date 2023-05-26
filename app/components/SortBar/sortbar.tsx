import styles from "./sortbar.module.css";

function SortBar() {
  return (
      <div className={styles.sortbyContainer}>
        <div className={styles.title}>
            <p>sort by</p>
        </div>
        <div className={styles.elementsContainer}>
            <div className={styles.sortElements}>
                <button>MOST RECOMMENDED</button>
                <button>MOST RECENT</button>
                <button>USER RATINGS</button>
            </div>
            <div className={styles.communities}>
                <button>MY COMMUNITIES</button>
            </div>
        </div>
      </div>
  )
}

export default SortBar

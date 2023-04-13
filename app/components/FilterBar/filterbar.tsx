import styles from './filterbar.module.css';
import { useEffect, MouseEventHandler, ChangeEventHandler } from 'react';

type Props = {
  handleCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  projectType: {
    build: boolean;
    study: boolean;
    pair: boolean;
  }
  handleFilterSubmit: MouseEventHandler<HTMLButtonElement>;
  handleFilterReset: MouseEventHandler<HTMLButtonElement>;
}

export default function FilterBar(props: Props) {
  const { handleCheckboxChange, handleFilterSubmit, handleFilterReset, projectType } = props;

  useEffect(() => {
    console.log(projectType);
  }, [projectType]);

  return ( 
    <div className={styles.filterBar}>
        <div className={styles.header}>
          <h1>Filters</h1>
        </div>
      
        <div className={styles.filterOptions}>
          <div className={styles.filterOption}>
            <input
              type="checkbox"
              id="build"
              name="build"
              value="build"
              checked={projectType.build}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="build">Build</label>
          </div>
          <div className={styles.filterOption}>
            <input
              type="checkbox"
              id="pair"
              name="pair"
              value="pair"
              checked={projectType.pair}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="pair">Pair</label>
          </div>
          <div className={styles.filterOption}>
            <input
              type="checkbox"
              id="study"
              name="study"
              value="study"
              checked={projectType.study}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="study">Study</label>
              </div>
        </div>
          <div className={styles.applyButton}>
            <button onClick={handleFilterSubmit}>Apply Filters</button>
          </div>
          <div className={styles.clearButton}>
            <button onClick={handleFilterReset}>Reset Filters</button>
          </div>
        </div>
  );
}

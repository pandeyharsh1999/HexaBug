import styles from "@/styles/HallOfFame.module.css";
import Avataar from "../reusable/Avataar";

export default function HallOfFame() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.tableHeader}`}>
          <div className={styles.col}>Rank</div>
          <div className={styles.col}>Researcher</div>
          <div className={styles.col}>Points</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>1.</div>
          <div className={styles.col}>
            <Avataar /> Harsh Pandey
          </div>
          <div className={styles.col}>20</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>1.</div>
          <div className={styles.col}>
            <Avataar /> Yash Pandey
          </div>
          <div className={styles.col}>20</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>3.</div>
          <div className={styles.col}>
            <Avataar /> Sachin Kumar
          </div>
          <div className={styles.col}>15</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>4.</div>
          <div className={styles.col}>
            <Avataar /> Vijay Reddy
          </div>
          <div className={styles.col}>10</div>
        </div>
      </div>
    </div>
  );
}

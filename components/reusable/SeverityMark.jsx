import styles from "@/styles/SeverityMark.module.css";

const colorMap = {
  LOW: "#f7cd48",
  MEDIUM: "#E35D34",
  HIGH: "#eca43b",
  CRITICAL: "#bb281a",
};

const sizeMap = {
  LOW: "25%",
  MEDIUM: "50%",
  HIGH: "75%",
  CRITICAL: "100%",
};

export default function SeverityMark({ severity }) {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: colorMap[severity],
          width: sizeMap[severity],
        }}
        className={styles.content}
      ></div>
    </div>
  );
}

import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Reports.module.css";

export default function Reports() {
  const temp = [
    "Account Takeover",
    "Stored Cross Site Scripting",
    "Privilege Escalation of Publisher Account",
    "Cross Site Request Forgery",
    "Blind SSRF",
  ];

  return (
    <div className={styles.container}>
      <div className={`text-group ${styles.search}`}>
        <input type="text" placeholder="Search all reports" />
      </div>
      <div className={styles.reports}>
        {temp.map((each, index) => (
          <Report key={index} title={each} isActive={index == 2} />
        ))}
      </div>
    </div>
  );
}

function Report({ isActive, title }) {
  return (
    <div className={`${styles.report} ${isActive && styles.isActive}`}>
      <div className={styles.top}>
        <span className={styles.dot} />
        <span className={styles.ref}>PB-45</span>
        <span className={styles.reportName}>{title}</span>
      </div>
      <div className={styles.bottom}>
        <span className={styles.reportedTo}>To: Amazon</span>
        <span className={styles.severity}>Critical</span>
        <span className={styles.date}>2 days ago</span>
      </div>
    </div>
  );
}

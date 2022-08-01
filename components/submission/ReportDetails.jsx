import styles from "@/styles/ReportDetails.module.css";

export default function ReportDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Severity</p>
        <p className={styles.severity}>Medium (4.0-6.9)</p>
      </div>
      <div className={styles.box}>
        <p>Vulnerability type</p>
        <p>Server Security Misconfiguration {">"} Directory Listing Enabled</p>
      </div>
      <div className={styles.box}>
        <p>Vulnerable asset</p>
        <p>public.program.com</p>
      </div>
      <div className={styles.box}>
        <p>Duplicate of</p>
        <p className="link">Link Issue</p>
      </div>
      <div className={styles.box}>
        <p>Jira ID</p>
        <p className="link">Create JIRA Issue</p>
      </div>
      <div className={styles.box}>
        <p>Reward</p>
        <p className="link">Set Reward</p>
      </div>
      <div className={styles.box}>
        <p>Participants</p>
        <div className={styles.participants}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

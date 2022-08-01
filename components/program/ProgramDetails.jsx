import styles from "@/styles/ProgramDetails.module.css";
import { BsFillPlugFill, BsGlobe } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import SeverityMark from "../reusable/SeverityMark";
import { rewards } from "./programConstants";

export default function ProgramDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.rewardSection}>
        <div className={styles.heading}>
          <p>Rewards</p>
        </div>
        <div className={styles.rewardContent}>
          {rewards.map((each, index) => (
            <div key={index} className={styles.reward}>
              <div className={styles.label}>
                <span>
                  <SeverityMark severity={each.severity.toUpperCase()} />
                </span>
                <span>{each.severity}</span>
              </div>
              <span>{each.reward}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.policySection}>
        <p>
          Testing is only authorized on the targets listed as In-Scope. Any
          domain/property of ArkoseLabs not listed in the targets section is out
          of scope, this includes any/all subdomains not listed above. If you
          happen to identify a security vulnerability on a target that is not
          in-scope, but that demonstrably belongs to ArkoseLabs, it may be
          reported to this program, and is appreciated but will be marked as
          {"'"}not applicable{"'"} and not be eligible for monetary or
          points-based compensation. Credentials No credentials will be provided
          Focus Areas Authentication bypass Remote code execution Obtaining user
          information Injection attacks Out of Scope Do not perform any testing
          if you have found a way to authenticate, any vulnerabilities found
          after authentication will not warrant any reward. Denial of service
          Spamming Clickjacking, XSS, or others that do not demonstrate a viable
          proof of concept for the attack
        </p>
      </div>
      <div className={styles.inScopeSection}>
        <div className={styles.heading}>
          <p>In Scope</p>
        </div>
        <ScopeRow />
      </div>
      <div className={styles.outScopeSection}>
        <div className={styles.heading}>
          <p>Out of Scope</p>
        </div>
        <ScopeRow />
      </div>
    </div>
  );
}

function ScopeRow() {
  return (
    <div className={styles.table}>
      <div className={styles.row}>
        <div className={styles.col}>
          <BsGlobe />
        </div>
        <div className={styles.col}>
          <p>admin.arkoselabs.com</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            quo accusamus quidem laboriosam sapiente libero in tempora laborum,
            repudiandae nobis.
          </p>
        </div>
        <div className={styles.col}>
          <SeverityMark severity="HIGH" />
        </div>
        <div className={styles.col}>Eligible</div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <BsFillPlugFill />
        </div>
        <div className={styles.col}>
          <p>status.arkoselabs.com</p>
          <p></p>
        </div>
        <div className={styles.col}>
          <SeverityMark severity="LOW" />
        </div>
        <div className={styles.col}>Not Eligible</div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <AiFillAndroid />
        </div>
        <div className={styles.col}>
          <p>demo.arkoselabs.com</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            quo accus
          </p>
        </div>
        <div className={styles.col}>
          <SeverityMark severity="CRITICAL" />
        </div>
        <div className={styles.col}>Not Eligible</div>
      </div>
    </div>
  );
}

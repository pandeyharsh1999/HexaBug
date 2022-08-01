/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Navbar.module.css";
import Profile from "./Profile";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logo" />
      </div>
      <ul className={styles.navlinks}>
        <li>Dashboard</li>
        <li>Programs</li>
        <li className={styles.isActive}>Submissions</li>
        <li>Payments</li>
        <li>Program Settings</li>
      </ul>
      <Profile />
    </div>
  );
}

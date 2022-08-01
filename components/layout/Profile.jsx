import { useState } from "react";
import styles from "@/styles/Profile.module.css";
import Switch from "react-switch";

export default function Profile() {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(true)} className={styles.avataar}>
        HP
      </div>
      <div
        className={`overlay ${isOpen && styles.open}`}
        onClick={() => setIsOpen(false)}
      />
      <ul className={`${styles.settings} ${isOpen && styles.open}`}>
        <li className={styles.userInfo}>
          <div
            style={{ width: 40, height: 40, fontSize: 18 }}
            className={styles.avataar}
          >
            HP
          </div>
          <div className={styles.right}>
            <p>Harsh Pandey</p>
            <p className={styles.email}>pandeyharsh1999@gmail.com</p>
          </div>
        </li>
        <li onClick={handleChange} className={styles.theme}>
          <p>Dark mode</p>
          <Switch
            onChange={() => {}}
            checked={checked}
            className="react-switch"
            checkedIcon={false}
            uncheckedIcon={false}
            height={24}
            width={42}
            boxShadow="none"
            activeBoxShadow="none"
            handleDiameter={20}
          />
        </li>
        <li className={styles.logout}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

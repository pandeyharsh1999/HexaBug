import { useState } from "react";
import styles from "@/styles/Dashboard.module.css";

export default function ChartFilter() {
  const [selected, setSelected] = useState("all");

  const radio = [
    {
      label: "All time",
      value: "all",
    },
    {
      label: "Last week",
      value: "week",
    },
    {
      label: "Last month",
      value: "month",
    },
    {
      label: "Cumtom",
      value: "custom",
    },
  ];

  return (
    <div className={styles.filter}>
      {radio.map((each, index) => (
        <label
          key={index}
          className={selected === each.value ? styles.checked : ""}
        >
          <input
            type="radio"
            value="Male"
            checked={selected === each.value}
            onChange={() => setSelected(each.value)}
          />
          {each.label}
        </label>
      ))}
    </div>
  );
}

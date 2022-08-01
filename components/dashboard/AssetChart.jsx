import styles from "@/styles/Dashboard.module.css";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import ChartFilter from "./ChartFilter";
import { TopWeaknessData } from "./dashboardConstants";

export default function AssetChart() {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>Asset</div>
      <div className={styles.distributionContent}>
        <ChartFilter />
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={TopWeaknessData} fill="#2a2a2a" label />
            <Tooltip />
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

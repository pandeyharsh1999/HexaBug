import styles from "@/styles/Dashboard.module.css";
import ChartFilter from "./ChartFilter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Legend,
} from "recharts";
import { WeaknessDistributionData } from "./dashboardConstants";

export default function WeaknessDistributionChart() {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>Weakness Distribution</div>
      <div className={styles.distributionContent}>
        <ChartFilter />
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            layout="vertical"
            data={WeaknessDistributionData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" barSize={40} fill="#2a2a2a" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

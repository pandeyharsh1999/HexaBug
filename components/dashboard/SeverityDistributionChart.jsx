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
} from "recharts";
import { severityDistributionData } from "./dashboardConstants";

export default function SeverityDistributionChart() {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>Severity Distribution</div>
      <div className={styles.distributionContent}>
        <ChartFilter />
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={severityDistributionData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#2a2a2a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

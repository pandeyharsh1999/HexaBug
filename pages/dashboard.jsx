import AssetChart from "@/components/dashboard/AssetChart";
import AssetDistributionChart from "@/components/dashboard/AssetDistributionChart";
import SeverityDistributionChart from "@/components/dashboard/SeverityDistributionChart";
import TopWeaknessChart from "@/components/dashboard/TopWeaknessChart";
import WeaknessDistributionChart from "@/components/dashboard/WeaknessDistributionChart";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.row}>
          <SeverityDistributionChart />
          <TopWeaknessChart />
        </div>
        <WeaknessDistributionChart />
        <AssetChart />
        <AssetDistributionChart />
      </div>
    </Layout>
  );
}

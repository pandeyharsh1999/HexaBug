import Layout from "@/components/reusable/Layout";
import Reports from "@/components/submission/Reports";
import SubmissionDetails from "@/components/submission/SubmissionDetails";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Reports />
        <SubmissionDetails />
      </div>
    </Layout>
  );
}

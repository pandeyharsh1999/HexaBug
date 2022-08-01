import ProgramFilter from "@/components/program/ProgramFilter";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Programs.module.css";

export default function Programs() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <ProgramFilter />
        </div>
        <div className={styles.right}>program list</div>
      </div>
    </Layout>
  );
}

import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Transactions.module.css";
import { BsArrowUpLeft } from "react-icons/bs";
import { FiArrowUpLeft } from "react-icons/fi";

export default function Transaction() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h3>$10000</h3>
            <p>Remaining Credits</p>
          </div>
          <div className={styles.bottom}>
            <p>All Transactions</p>
            <div className={styles.transactions}>
              <TransactionDetail />
              <TransactionDetail />
              <TransactionDetail />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function TransactionDetail() {
  return (
    <div className={styles.transaction}>
      <div className={styles.left}>
        <BsArrowUpLeft />
      </div>
      <div className={styles.right}>
        <div className={styles.detail}>
          <p>
            Sent to <em className="link">harshpublic</em>
          </p>
          <p>
            Txn ID : ec6c742a-be83-4de9-a8b7-5bed4aa4540e | Report ID :{" "}
            <span className="link">PB-94</span>
          </p>
        </div>
        <div className={styles.amount}>
          <p>- $500</p>
          <p>April 27 2022, 15:51 PM</p>
        </div>
      </div>
    </div>
  );
}

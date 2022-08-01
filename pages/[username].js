/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { programMetrics } from "@/components/program/programConstants";
import ProgramDetails from "@/components/program/ProgramDetails";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/ProgramDetailPage.module.css";
import { generateString } from "helper/util";
import { BsFillFlagFill } from "react-icons/bs";
import HallOfFame from "@/components/program/HallOfFame";
import Avataar from "@/components/reusable/Avataar";

export default function ProgramDetailPage() {
  const [active, setActive] = useState("details");

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.header}>
            <div className={styles.details}>
              <h3>CoinDCX Managed Bug Bounty</h3>
              <p>
                India’s largest & safest cryptocurrency exchange backed by
                security and insurance. #TryCrypto
              </p>
              <div className={styles.range}>
                <BsFillFlagFill /> <span>$100 {"-"} $2,500</span> per
                vulnerability
              </div>
              <div className={styles.cta}>
                <button className="btn-primary">Submit Report</button>
              </div>
            </div>
            <div className={styles.image}>
              <img
                src="https://logos.bugcrowdusercontent.com/logos/c15c/baa5/80b0d383/a08136ed75ed79a7923f4366180a0906_CoinDCX_Logo_Blue.png"
                alt="program image"
              />
            </div>
          </div>
          <div className={styles.nav}>
            <span
              className={active === "details" && styles.isActive}
              onClick={() => setActive("details")}
            >
              Program Details
            </span>
            <span>Announcements</span>
            <span
              className={active === "fame" && styles.isActive}
              onClick={() => setActive("fame")}
            >
              Hall of Fame
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          {active === "details" && (
            <div className={styles.bottomWrapper}>
              <ProgramDetails />

              <div className={styles.others}>
                <div className={styles.metricSection}>
                  <div className={styles.heading}>Metrics</div>
                  <ul className={styles.metricContent}>
                    {programMetrics.map((each, index) => (
                      <li key={index}>
                        <span>{each.label}</span>
                        <span>{each.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.fameSection}>
                  <div className={styles.heading}>Top Researchers</div>
                  <div className={styles.fameContent}>
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <Avataar />
                    <p>View all</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === "fame" && (
            <div className={styles.bottomWrapper}>
              <HallOfFame />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

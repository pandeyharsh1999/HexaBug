/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/SubmissionDetails.module.css";
import ReportDetails from "./ReportDetails";

export default function SubmissionDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img
            src="https://avatars.githubusercontent.com/u/10639145?s=200&v=4"
            alt=""
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            Privilege Escalation of Publisher Account due to IDOR
          </p>
          <div className={styles.spaceBetween}>
            <p className={styles.reportedTo}>Apple Public Bug Bounty</p>
            <p style={{ fontWeight: 300 }}>12 March, 2022</p>
          </div>
          <p className={styles.reportId}>PB-43</p>
        </div>
      </div>
      <ReportDetails />
      <div className={styles.details}>
        <div className={styles.group}>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab
            maiores, fuga eius mollitia magnam asperiores ratione nesciunt minus
            ea cupiditate numquam officia nobis vel incidunt quaerat omnis natus
            libero alias nemo eaque ipsam temporibus. Ipsam fuga iusto deserunt
            provident adipisci, officia earum, ex delectus quos perferendis
            aspernatur eum enim quas! Ratione, laborum. Temporibus pariatur
            corporis vel ipsum vero tempora nemo aperiam incidunt error
            quibusdam quia, omnis quidem illum minus et maxime consectetur
            blanditiis doloribus reiciendis ipsa. Voluptates sed ad dignissimos
            repe
          </p>
        </div>
        <div className={styles.group}>
          <p>Steps to reproduce</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab
            maiores, fuga eius mollitia magnam asperiores ratione nesciunt minus
            ea cupiditate numquam officia nobis vel incidunt quaerat omnis natus
            libero alias nemo eaque ipsam temporibus. Ipsam fuga iusto deserunt
            provident adipisci, officia earum, ex delectus quos perferendis
            aspernatur eum enim quas! Ratione, laborum. Temporibus pariatur
            corporis vel ipsum vero tempora nemo aperiam incidunt error
            quibusdam quia, omnis quidem illum minus et maxime consectetur
            blanditiis doloribus reicieninus at in eum, neque fugit similique!
          </p>
        </div>
        <div className={styles.group}>
          <p>Vulnerability Impact</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab
            maiores, fuga eius mollitia magnam asperiores ratione nesciunt minus
            ea cupiditate numquam officia nobis vel incidunt quaerat omnis natus
            libero alias nemo eaque ipsam temporibus. Ipsam fuga iusto deserunt
            provident adipisci, officia earum, ex delectus quos perferendis
            aspernatur eum enim quas! Ratione, laborum. Temporibus pariatur
            corporis vel ipsum vero tempora nemo aperiam incidunt error
            quibusdam quia, omnis quidem illum
          </p>
        </div>
        <div className={styles.group}>
          <p>HTTP Request</p>
          <pre>
            GET /hub/login?next=%2Fhub%2F HTTP/1.1 Host: 10.3.48.6:8081 <br />
            Upgrade-Insecure-Requests: 1 User-Agent: Mozilla/5.0 (Macintosh;{" "}
            <br />
            Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko){" "}
            <br />
            Chrome/100.0.4896.75 Safari/537.36 Accept: <br />
            text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9{" "}
            <br />
            Accept-Encoding: gzip, deflate Accept-Language: <br />
            en-GB,en-US;q=0.9,en;q=0.8 Connection: close <br />
          </pre>
        </div>
        <div className={styles.group}>
          <p>Suggested Fix</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab
            maiores, fuga eius mollitia magnam asperiores ratione nesciunt minus
            ea cupiditate numquam officia nobis vel incidunt quaerat omnis natus
            libero alias nemo eaque ipsam temporibus. Ipsam fuga iusto deserunt
            provident adipisci, officia earum, ex delectus quos perferendis
            aspernatur eum enim quas! Ratione, laborum. Temporibus pariatur
            corporis vel ipsum vero tempora nemo aperiam incidunt error
            quibusdam quia, omnis quidem illum
          </p>
        </div>
      </div>
    </div>
  );
}

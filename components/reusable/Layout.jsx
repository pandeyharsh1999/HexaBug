import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import { ToastContainer } from "react-toastify";
import Navbar from "../layout/Navbar";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        // closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

// Todo add default description and keywords
Layout.defaultProps = {
  title: "Hexabug",
  description: "",
  keywords: "",
};

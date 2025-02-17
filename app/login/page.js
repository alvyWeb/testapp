import TennisIframe from "@/components/common/TennisIframe";
import styles from "@/styles/pages/Home.module.scss";
// import TabComponent from "../loginComponents/TabComponent";
export default function Home() {
  return (
    <main className={styles.homepage}>
      {/* <TabComponent /> */}
      <TennisIframe />
    </main>
  );
}

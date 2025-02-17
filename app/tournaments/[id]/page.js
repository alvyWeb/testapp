import styles from "@/styles/pages/Home.module.scss";
import TabComponent from "../../doublescomponent/TabComponent";

const Tournament = () => {
  return (
    <main className={styles.homepage}>
      <TabComponent />
    </main>
  );
};

export default Tournament;

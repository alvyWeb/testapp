import styles from "@/styles/pages/Home.module.scss";
import TabComponent from "../doublescomponent/TabComponent";
export default function SingleTournament() {
  // const data = useTournament();
  return (
    <main className={styles.homepage}>
      <TabComponent></TabComponent>
    </main>
  );
}

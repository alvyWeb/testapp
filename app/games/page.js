import ProtectedRoute from "@/components/common/ProtectedRoute";
import styles from "@/styles/pages/Home.module.scss";
import TabComponent from "../gamescomponents/TabComponent";
export default function Home() {
  return (
    <ProtectedRoute>
      <main className={styles.homepage}>
        <TabComponent />
      </main>
    </ProtectedRoute>
  );
}

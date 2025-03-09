import ProtectedRoute from "@/components/common/ProtectedRoute";
import styles from "@/styles/pages/Home.module.scss";
import TabComponent from "./TabComponent";
export default function Home() {
  return (
    // <ProtectedRoute>
      <main className={styles.homepage}>
        <TabComponent />
      </main>
    // </ProtectedRoute>
  );
}

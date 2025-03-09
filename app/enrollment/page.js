import ProtectedRoute from "@/components/common/ProtectedRoute";
import styles from "@/styles/pages/Home.module.scss";
import SingleGame from "./single/page";
export default function Home() {
  return (
    // <ProtectedRoute>
      <main className={styles.homepage}>
        <SingleGame />
      </main>
    // </ProtectedRoute>
  );
}

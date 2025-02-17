import styles from '@/styles/pages/Home.module.scss'
import TabComponent from '../regsiterTabComponents/TabComponent'
export default function Home() {
  return (
    <main className={styles.homepage}>
      <TabComponent></TabComponent>
    </main>
  )
}

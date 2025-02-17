
import styles from '@/styles/pages/Home.module.scss'
import TabComponent from '../resultcomponents/TabComponent'
export default function Home() {
  return (
    <main className={styles.homepage}>
      <TabComponent></TabComponent>
    </main>
  )
}

import './opentennis.scss';
import styles from '@/styles/pages/Home.module.scss'
export default function Home() {
    return (
        <main className={styles.homepage}>
            <div className="opentennis_app">
                <img src="./Stock/images/openntennisapp.jpg" alt="" />
                <span className="tennis_logo">
                    <img src="./Stock/logo/opentennisapp_logo.svg" alt="" />
                </span>
            </div>
        </main>
    )
}
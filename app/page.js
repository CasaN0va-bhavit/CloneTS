import Navbar from '@/components/Navbar'
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.parent}>
      <Navbar />
      <div className={styles.landingDiv}>
        <h1 className={styles.tech}>TECH</h1>
        <h1 className={styles.syndicate}>SYNDICATE</h1>
        <div className={styles.pic} />
      </div>
    </div>
  )
}

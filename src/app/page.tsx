import Link from "next/link";
import styles from "@/css/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>CREAMOS WEBS</h1>
        <h2 className={styles.subtitle}>MINIMALISTAS, FUNCIONALES Y ESTÉTICAS</h2>
      </div>
      <Link href={"/services"} className={styles.button}>
        <span className={styles.left}></span>
        <span>CONOCÉ EL PROCESO</span>
        <span className={styles.right}></span>
      </Link>
    </div>
  );
}

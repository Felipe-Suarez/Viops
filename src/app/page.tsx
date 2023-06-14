import styles from "@/css/home.module.css";
import stylesBtn from "@/css/ui/button.module.css";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Title text={"CREAMOS WEBS"} />
        <h2 className={styles.subtitle}>MINIMALISTAS, FUNCIONALES Y ESTÉTICAS</h2>
      </div>
      <Link href={"/services"} className={stylesBtn.button}>
        <span className={stylesBtn.left}></span>
        <span>CONOCÉ EL PROCESO</span>
        <span className={stylesBtn.right}></span>
      </Link>
    </div>
  );
}

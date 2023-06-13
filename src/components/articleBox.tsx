import Image from "next/image";
import styles from "@/css/article.module.css";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./context";

export default function ArticleBox({ index }: { index: number }) {
  const context = useContext(Context);
  const { clickedMenu } = context;

  return (
    <div
      className={`${styles.box} ${clickedMenu ? styles.showNormal : styles.showAnimation}`}
      style={{ animationDelay: `${1.5 + index * 0.1}s`, opacity: clickedMenu ? 1 : 0 }}
    >
      <Link href="/articles/articulo" className={styles.image}>
        <Image src={""} alt="Article" width={300} height={300} />
      </Link>
      <span className={styles.title}>DISEÑO WEB</span>
      <p className={styles.text}>
        We build exclusively native applications, devoting ourselves to development.
      </p>
      <span className={styles.author}>Author</span>
      <span className={styles.bottomLine}></span>
    </div>
  );
}

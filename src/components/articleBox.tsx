import Image from "next/image";
import styles from "@/css/article.module.css";
import Link from "next/link";

export default function ArticleBox({ index }: { index: number }) {
  return (
    <div className={styles.box} style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
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

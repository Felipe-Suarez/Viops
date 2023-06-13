"use client";

import ArticleBox from "@/components/articleBox";
import styles from "@/css/article.module.css";
import { useEffect, useState } from "react";

export default function Page() {
  const [scroll, setScroll] = useState(0);
  const [data, setData] = useState(Array.from({ length: 4 }));

  useEffect(() => {
    const doc = document.documentElement;
    const { scrollTop } = doc;

    const calcScroll = (scrollTop: number) => {
      if (window.innerWidth < 1000) {
        setScroll(scrollTop - scrollTop * 2);
      } else {
        setScroll(scrollTop - scrollTop * 2 + window.innerWidth * 0.15);
      }
    };

    const handleScroll = () => {
      const { scrollTop } = doc;
      calcScroll(scrollTop);
    };
    calcScroll(scrollTop);

    if (window.innerWidth < 1000) {
      const firstElementWidth = 310;
      const restOfElementsWidth = 320 * data.length;
      doc.style.height = `${firstElementWidth + restOfElementsWidth}px`;
    } else {
      const lastElementWidthRest = 250;
      const restOfElementsWidth = (data.length - 3) * 400;
      doc.style.height = `${doc.clientHeight + lastElementWidthRest + restOfElementsWidth}px`;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      doc.style.height = doc.clientHeight + "px";
    };
  }, [data]);

  console.log(scroll);

  return (
    <div className={styles.fragment} style={{ left: scroll }}>
      <div className={styles.container}>
        {data.map((item: any, i: number) => (
          <ArticleBox key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

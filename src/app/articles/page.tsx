"use client";

import ArticleBox from "@/components/articleBox";
import styles from "@/css/article.module.css";
import { useEffect, useState } from "react";

export default function Page() {
  const [scroll, setScroll] = useState(0);
  const [data, setData] = useState(Array.from({ length: 4 }));

  useEffect(() => {
    const doc = document.documentElement;
    const handleScroll = () => {
      const { scrollTop } = doc;
      setScroll(scrollTop);
    };

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

  const calcScroll = () => {
    if (window.innerWidth < 1000) {
      return scroll - scroll * 2;
    } else {
      return scroll - scroll * 2 + window.innerWidth * 0.15;
    }
  };

  return (
    <div className={styles.fragment} style={{ left: calcScroll() }}>
      <div className={styles.container}>
        {data.map((item: any, i: number) => (
          <ArticleBox key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

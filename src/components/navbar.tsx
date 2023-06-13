"use client";

import Link from "next/link";

import styles from "@/css/navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href={"/about"}>NOSOTROS</Link>
        </li>
        <li>
          <Link href={"/services"} className={styles.linkWithBars}>
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link href={"/portfolio"}>TRABAJOS</Link>
        </li>
        <li>
          <Link href={"/articles"} className={styles.linkWithBars}>
            ARTICULOS
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>CONTACT</Link>
        </li>
      </ul>
      <button className={styles.menuBtn} onClick={handleOpen}>
        {open ? "CERRAR" : "MENU"}
      </button>
    </nav>
  );
}

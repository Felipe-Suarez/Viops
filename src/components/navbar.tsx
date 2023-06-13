"use client";

import Link from "next/link";

import styles from "@/css/navbar.module.css";
import { useContext } from "react";
import { Context } from "./context";

export default function Navbar() {
  const context = useContext(Context);
  const { open, handleOpen } = context;

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${open && styles.showMenu}`}>
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

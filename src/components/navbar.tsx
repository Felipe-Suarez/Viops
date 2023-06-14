"use client";

import Link from "next/link";

import styles from "@/css/navbar.module.css";
import { useContext } from "react";
import { Context } from "./context";

export default function Navbar() {
  const context = useContext(Context);
  const { open, handleOpen, handleClickedMenu } = context;

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${open && styles.showMenu}`}>
        <li>
          <Link href={"/about"} onClick={handleClickedMenu}>
            NOSOTROS
          </Link>
        </li>
        <li>
          <Link href={"/services"} onClick={handleClickedMenu} className={styles.linkWithBars}>
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link href={"/portfolio"} onClick={handleClickedMenu}>
            TRABAJOS
          </Link>
        </li>
        <li>
          <Link href={"/articles"} onClick={handleClickedMenu} className={styles.linkWithBars}>
            ARTICULOS
          </Link>
        </li>
        <li>
          <Link href={"/contact"} onClick={handleClickedMenu}>
            CONTACT
          </Link>
        </li>
      </ul>
      <button className={styles.menuBtn} onClick={handleOpen}>
        {open ? "CERRAR" : "MENU"}
      </button>
    </nav>
  );
}

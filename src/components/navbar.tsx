"use client";

import Link from "next/link";

import styles from "@/css/navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${open && styles.showMenu}`}>
        <li>
          <Link href={"/about"} onClick={handleClose}>
            NOSOTROS
          </Link>
        </li>
        <li>
          <Link href={"/services"} onClick={handleClose} className={styles.linkWithBars}>
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link href={"/portfolio"} onClick={handleClose}>
            TRABAJOS
          </Link>
        </li>
        <li>
          <Link href={"/articles"} onClick={handleClose} className={styles.linkWithBars}>
            ARTICULOS
          </Link>
        </li>
        <li>
          <Link href={"/contact"} onClick={handleClose}>
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

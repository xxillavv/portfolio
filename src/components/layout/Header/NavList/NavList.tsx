"use client";

import { usePathname } from "next/navigation";
import styles from "./NavList.module.scss";
import Link from "next/link";
import { paths } from "@/data/data";

const NavList = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className={styles.list}>
        {paths.map((el, index) => {
          return (
            <li className={pathname === el.path ? styles.active : styles.item} key={index}>
              <Link href={el.path}>
                <span className={styles.span}>#</span>
                {el.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavList;

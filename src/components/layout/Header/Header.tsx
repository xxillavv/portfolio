import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import NavList from "./NavList/NavList";
import AdaptationButton from "./AdaptationButton/AdaptationButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link href="/" className={styles.link}>
              <Image src={logo} width={16} height={16} alt="header_logo" />
              <h1 className={styles.name}>Vladyslav</h1>
            </Link>
          </div>
          <AdaptationButton />
          <div className={styles.right}>
            <NavList />
          </div>
        </div>
      </div>
    </header>
  );
};

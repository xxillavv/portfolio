"use client";

import styles from "./AdaptationButton.module.scss";
import Image from "next/image";
import headerMenuButton from "@/public/header-button.png";
import headerCrossButton from "@/public/cross-button.svg";
import NavList from "../NavList/NavList";
import { useState } from "react";

const AdaptationButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button
        onClick={() => setClicked((prev) => !prev)}
        className={styles.adaptationButton}
      >
        {!clicked ? (
          <Image
            src={headerMenuButton}
            alt="header-burger-menu-button"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src={headerCrossButton}
            alt="header-burger-menu-button"
            width={24}
            height={24}
          />
        )}
      </button>

      {clicked && (
        <div className={styles.wrapper}>
          <NavList />
        </div>
      )}
    </>
  );
};

export default AdaptationButton;

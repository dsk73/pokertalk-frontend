"use client";

import React from "react";
import styles from "@/styles/sideContent/adBanner.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";

const AdBanner = () => {
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/ad-banner.jpg"
            alt="Advertisement"
            width={300}
            height={250}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AdBanner;

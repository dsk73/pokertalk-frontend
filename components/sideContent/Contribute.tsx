"use client";

import React from "react";
import styles from "@/styles/sideContent/contribute.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Contribute = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/contribute.jpg"
            alt="Contribute"
            width={300}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Want to contribute to <strong>PokerTalk India</strong>?
          </p>
          <button onClick={handleLogin} className={styles.button}>
            Login to Contribute
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contribute;

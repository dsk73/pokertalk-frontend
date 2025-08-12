"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/styles/sideContent/galleryBanner.module.css";
import { useTheme } from "next-themes";

const GalleryBanner = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Photo Gallery</h2>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/gallery-banner3.jpg"
            alt="Players Gallery"
            width={300}
            height={400}
            className={styles.image}
          />
        </div>
        <button
          className={styles.button}
          onClick={() => router.push("/gallery")}
        >
          Click Here to Explore More
        </button>
      </div>
    </section>
  );
};

export default GalleryBanner;

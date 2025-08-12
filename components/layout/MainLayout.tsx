// components/layout/MainLayout.tsx
"use client";
import React from "react";
import styles from "@/styles/layout/mainLayout.module.css";
import { useTheme } from "next-themes";

const MainLayout = ({ children, sideContent }: { children: React.ReactNode, sideContent: React.ReactNode }) => {
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  return (
    <div className={`${styles.wrapper} ${themeClass}`}>
      <main className={styles.main}>{children}</main>
      <aside className={styles.side}>{sideContent}</aside>
    </div>
  );
};

export default MainLayout;

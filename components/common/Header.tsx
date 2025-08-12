"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/common/header.module.css";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwt");
      setIsAuthenticated(!!token);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const logoSrc =
    theme === "dark" ? "/images/logo-light.png" : "/images/logo-dark.png";
  const themeToggleImg =
    theme === "dark" ? "/images/light.png" : "/images/dark.png";

  const themeClass = theme === "dark" ? styles.dark : styles.light;

  return (
    <header className={`${styles.header} ${themeClass}`}>
      <div className={styles.left}>
        {mounted && (
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Logo"
              width={140}
              height={40}
              className={styles.logo}
            />
          </Link>
        )}
      </div>

      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/news" className={styles.link}>News</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/strategy" className={styles.link}>Strategy</Link>
          <Link href="/short-summary" className={styles.link}>Poker Shorts</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
        </nav>

        <User
          className={styles.icon}
          onClick={() =>
            router.push(isAuthenticated ? "/profile" : "/auth")
          }
        />

        {mounted && (
          <Image
            src={themeToggleImg}
            alt="Toggle Theme"
            width={26}
            height={26}
            onClick={toggleTheme}
            className={styles.icon}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

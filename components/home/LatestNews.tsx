// components/home/LatestNews.tsx
"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/latestNews.module.css";
import { getAllNews } from "@/lib/api";
import { useTheme } from "next-themes";
import Link from "next/link";
import backend_url from "@/config";

const LatestNews = () => {
  const [newsList, setNewsList] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getAllNews();
        setNewsList(data.slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch latest news:", err);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Latest Poker News</h2>

      <div className={styles.grid}>
        {newsList.map((item) => {
          const attrs = item.attributes;
          const imgUrl = attrs.Image?.data?.[0]?.attributes?.url;

          return (
            <Link key={item.id} href={`/news/${item.id}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                {imgUrl ? (
                  <img
                    src={`http://localhost:1337${imgUrl}`}
                    alt={attrs.Title}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder}>No image</div>
                )}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{attrs.Title}</h3>
                <p className={styles.meta}>— {attrs.Author} | {attrs.Date_Published}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LatestNews;

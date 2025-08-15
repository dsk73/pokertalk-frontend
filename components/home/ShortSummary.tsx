"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/shortSummary.module.css";
import { getShortSummaries } from "@/lib/api";
import { useTheme } from "next-themes";
import Link from "next/link";
import backend_url from "@/config";

const ShortSummary = () => {
  const [summaries, setSummaries] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchSummaries() {
      try {
        const data = await getShortSummaries();
        setSummaries(data.slice(0, 4));
      } catch (err) {
        console.error("Failed to fetch short summaries:", err);
      }
    }

    fetchSummaries();
  }, []);

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Poker Shorts</h2>

      <div className={styles.grid}>
        {summaries.map((item: any) => {
          const attrs = item.attributes;
          const coverUrl = attrs?.Image?.data?.attributes?.url;

          return (
            <Link href={`/short-summary/${item.id}`} key={item.id} className={styles.card}>
              {coverUrl ? (
                <img
                  src={`${backend_url}${coverUrl}`}
                  alt={attrs.Title}
                  className={styles.cover}
                />
              ) : (
                <div className={styles.coverPlaceholder}>No Image</div>
              )}

              <div className={styles.content}>
                <h3 className={styles.title}>{attrs.Title}</h3>
                <p className={styles.text}>
                  {attrs.Summary?.slice(0, 2000)}...
                </p>
                <p className={styles.date}>{attrs.Date_Published}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ShortSummary;

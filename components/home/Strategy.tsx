// components/home/Strategy.tsx
"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/strategy.module.css";
import { getStrategies } from "@/lib/api";
import { useTheme } from "next-themes";
import Link from "next/link";
import backend_url from "@/config";

const Strategy = () => {
  const [strategies, setStrategies] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStrategies();
        setStrategies(data.slice(0, 4));
      } catch (err) {
        console.error("Error fetching strategies:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Strategies</h2>

      <div className={styles.grid}>
        {strategies.map((item: any) => {
          const attrs = item.attributes;
          const coverUrl = attrs?.cover?.data?.attributes?.url;

          return (
            <Link
              key={item.id}
              href={`/strategy/${item.id}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                {coverUrl ? (
                  <img
                    src={`http://localhost:1337${coverUrl}`}
                    alt={attrs.Title}
                    className={styles.cover}
                  />
                ) : (
                  <div className={styles.coverPlaceholder}>No Image</div>
                )}
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{attrs.Title}</h3>
                <p className={styles.meta}>
                  — <span>{attrs.Author}</span> |{" "}
                  <span>{attrs.Date_Published}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Strategy;

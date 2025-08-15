// app/strategy/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getStrategies } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/news.module.css"; // reusing same layout
import backend_url from "@/config";

const StrategyPage = () => {
  const [strategies, setStrategies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchStrategies() {
      try {
        const data = await getStrategies();
        setStrategies(data);
      } catch (err) {
        console.error("Failed to fetch strategies:", err);
      }
    }

    fetchStrategies();
  }, []);

  return (
    <SubPageLayout>
      <main className={styles.newsPage}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Poker Strategies</h2>
          <div className={styles.grid}>
            {strategies.map((item) => {
              const { id, attributes } = item;
              const coverUrl = attributes?.cover?.data?.attributes?.url;

              return (
                <Link key={id} href={`/strategy/${id}`} className={styles.card}>
                  {coverUrl ? (
                    <img
                      src={`${backend_url}${coverUrl}`}
                      alt={attributes.Title}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.placeholder}>No image</div>
                  )}
                  <div className={styles.content}>
                    <h3 className={styles.title}>{attributes.Title}</h3>
                    <p className={styles.meta}>
                      — {attributes.Author} | {attributes.Date_Published}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
};

export default StrategyPage;

// app/news/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllNews } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/news.module.css";

const NewsPage = () => {
  const [newsList, setNewsList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getAllNews();
        setNewsList(data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    }

    fetchNews();
  }, []);

  return (
    <SubPageLayout>
      <main className={styles.newsPage}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Latest Poker News</h2>
          <div className={styles.grid}>
            {newsList.map((newsItem) => {
              const { id, attributes } = newsItem;
              const imgUrl = attributes.Image?.data?.[0]?.attributes?.url;

              return (
                <Link key={id} href={`/news/${id}`} className={styles.card}>
                  {imgUrl ? (
                    <img
                      src={`http://localhost:1337${imgUrl}`}
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

export default NewsPage;

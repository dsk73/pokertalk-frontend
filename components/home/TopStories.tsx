"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/topStories.module.css";
import { getTopStories } from "@/lib/api";
import { useTheme } from "next-themes";
import Link from "next/link";

const TopStories = () => {
  const [stories, setStories] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchData() {
      const data = await getTopStories();
      setStories(data.slice(0, 5)); // only top 5
    }
    fetchData();
  }, []);

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Top Stories</h2>
      <div className={styles.grid}>
        {stories.map((story, index) => {
          const attrs = story.attributes;
          const imgUrl = attrs.Image?.data?.attributes?.url;

          return (
            <Link
              key={story.id}
              href={`/top-stories/${story.id}`}
              className={`${styles.card} ${
                index === 0 ? styles.cardLarge : styles.cardSmall
              }`}
            >
              {imgUrl ? (
                <img
                  src={`http://localhost:1337${imgUrl}`}
                  alt={attrs.Title}
                  className={`${index === 0 ? styles.imageLarge : styles.imageSmall}`}
                />
              ) : (
                <div className={styles.placeholder}>No image</div>
              )}
              <div className={styles.content}>
                <h3 className={styles.title}>{attrs.Title}</h3>
                <p className={styles.meta}>
                  — {attrs.Author} | {attrs.Date_Published}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopStories;

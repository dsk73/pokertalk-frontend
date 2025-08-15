// components/home/ShortVideos.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getShortVideos } from "@/lib/api";
import styles from "@/styles/home/shortVideos.module.css";
import { useTheme } from "next-themes";
import backend_url from "@/config";

const ShortVideos = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShortVideos();
        setVideos(data || []);
      } catch (err) {
        console.error("Failed to fetch short videos:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Short Videos</h2>

      {videos.length === 0 ? (
        <p className={styles.noData}>No videos available.</p>
      ) : (
        <div className={styles.sliderWrapper}>
          <div className={styles.slider}>
            {videos.map((item) => {
              const {
                Video_URL,
                thumbnail,
                caption,
                username,
              } = item.attributes;

              const thumbUrl = thumbnail?.data?.attributes?.url;
              const displayCaption =
                caption && caption.split(" ").slice(0, 100).join(" ") + (caption.split(" ").length > 100 ? "..." : "");

              return (
                <div
                  key={item.id}
                  className={styles.videoCard}
                  onClick={() => {
                    if (Video_URL) window.open(Video_URL, "_blank");
                  }}
                >
                  {thumbUrl ? (
                    <img
                      src={`http://localhost:1337${thumbUrl}`}
                      alt="Video Thumbnail"
                      className={styles.thumbnail}
                    />
                  ) : (
                    <div className={styles.thumbnail} />
                  )}

                  <div className={styles.videoInfo}>
                    {Video_URL && <button className={styles.playButton}>▶ Play</button>}

                    {username && (
                      <a
                        href={`https://www.instagram.com/${username}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.username}
                        onClick={(e) => e.stopPropagation()}
                      >
                        @{username}
                      </a>
                    )}

                    {displayCaption && (
                      <p className={styles.caption}>{displayCaption}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ShortVideos;

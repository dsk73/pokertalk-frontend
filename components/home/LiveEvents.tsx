"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/liveEvents.module.css";
import { getLiveEvents } from "@/lib/api";
import { useTheme } from "next-themes";
import backend_url from "@/config";

const LiveEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getLiveEvents();
        setEvents(data.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch live events:", err);
      }
    }

    fetchEvents();
  }, []);

  return (
    <section className={`${styles.container} ${themeClass}`}>
      <h2 className={styles.heading}>Live Events</h2>

      {events.length === 0 ? (
        <p className={styles.noData}>No live events available.</p>
      ) : (
        <div className={styles.sliderWrapper}>
          <div className={styles.slider}>
            {events.map((item) => {
              const attrs = item.attributes;
              const imageUrl = attrs.Image?.data?.attributes?.url;

              return (
                <div key={item.id} className={styles.card}>
                  {imageUrl ? (
                    <img
                      src={`${backend_url}/api${imageUrl}`}
                      alt={attrs.Title}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.image} />
                  )}

                  <div className={styles.cardInfo}>
                    <h3 className={styles.title}>{attrs.Title}</h3>
                    <p className={styles.location}>{attrs.Location}</p>
                    <p className={styles.date}>
                      {attrs.Start_Date} → {attrs.End_Date}
                    </p>
                    {attrs.Live_Link && (
                      <a
                        href={attrs.Live_Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.button}>Watch Live</button>
                      </a>
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

export default LiveEvents;

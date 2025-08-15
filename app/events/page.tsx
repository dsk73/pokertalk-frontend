// app/events/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { getLiveEvents } from "@/lib/api";
import styles from "@/styles/pages/eventsPage.module.css";
import backend_url from "@/config";

const EventsPage = () => {
  const [liveEvents, setLiveEvents] = useState<any[]>([]);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getLiveEvents();
        setLiveEvents(data);
      } catch (err) {
        console.error("Failed to fetch live events:", err);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className={`${styles.container} ${themeClass}`}>
      <h1 className={styles.heading}>Live Events</h1>
      <div className={styles.grid}>
        {liveEvents.length === 0 ? (
          <p>No live events available.</p>
        ) : (
          liveEvents.map((event) => {
            const attrs = event.attributes;
            const imageUrl = attrs.Image?.data?.attributes?.url;

            return (
              <Link href={`/events/${event.id}`} key={event.id}>
                <div className={styles.card}>
                  {imageUrl && (
                    <img
                      src={`http://localhost:1337${imageUrl}`}
                      alt={attrs.Title}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.cardInfo}>
                    <h3 className={styles.title}>{attrs.Title}</h3>
                    <p className={styles.location}>{attrs.Location}</p>
                    <p className={styles.date}>
                      {attrs.Start_Date} → {attrs.End_Date}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      <h1 className={styles.heading}>Online Events</h1>
      <div className={styles.placeholder}>Coming soon...</div>
    </div>
  );
};

export default EventsPage;

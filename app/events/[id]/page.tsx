"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getEventById } from "@/lib/api";
import styles from "@/styles/pages/eventsPage.module.css";
import { useTheme } from "next-themes";
import backend_url from "@/config";

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!id) return;
        const eventData = await getEventById(id as string);
        setEvent(eventData);
      } catch (error) {
        console.error("Failed to fetch event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className={`${styles.container} ${themeClass}`}>
        <p>Loading...</p>
      </div>
    );
  }

  const attrs = event.attributes;
  const imageUrl = attrs?.Image?.data?.attributes?.url;

  return (
    <div className={`${styles.container} ${themeClass}`}>
      <h1 className={styles.heading}>{attrs.Title}</h1>

      {imageUrl && (
        <img
          src={`${backend_url}/api${imageUrl}`}
          alt={attrs.Title}
          className={styles.image}
        />
      )}

      <p className={styles.location}>
        <strong>Location:</strong> {attrs.Location}
      </p>
      <p className={styles.date}>
        <strong>Date:</strong> {attrs.Start_Date} → {attrs.End_Date}
      </p>

      {attrs.Live_Link && (
        <p>
          <strong>Live Link: </strong>
          <a
            href={attrs.Live_Link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
          >
            Watch Live
          </a>
        </p>
      )}

      <div className={styles.description}>
        <h2>Description</h2>
        <p>
          {typeof attrs.Description === "string"
            ? attrs.Description
            : "No description available."}
        </p>
      </div>

      {typeof attrs.Interested === "number" && (
        <p className={styles.interested}>
          <strong>Interested:</strong> {attrs.Interested}
        </p>
      )}
    </div>
  );
};

export default EventDetailsPage;

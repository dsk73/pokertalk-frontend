"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/onlineEvents.module.css";
import { getOnlineEvents } from "@/lib/api";

const OnlineEvents = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getOnlineEvents();
        setEvents(data.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch online events:", err);
      }
    }
    fetchEvents();
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Online Events</h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Organizer</th>
              <th>Buy-in</th>
              <th>Prize Pool</th>
              <th>Date</th>
              <th>Time</th>
              <th>Platform</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item: any) => {
              const attrs = item.attributes;
              return (
                <tr key={item.id}>
                  <td>{attrs.Name}</td>
                  <td>{attrs.Organizer}</td>
                  <td>{attrs.BuyIn}</td>
                  <td>{attrs.PrizePool}</td>
                  <td>{attrs.Date}</td>
                  <td>{attrs.Time}</td>
                  <td>{attrs.Platform}</td>
                  <td>
                    <a
                      href={attrs.RegisterLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.registerBtn}
                    >
                      Register
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OnlineEvents;

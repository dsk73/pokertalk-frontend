"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/sideContent/handVideos.module.css";
import { getHandVideos } from "@/lib/api";

const HandVideos = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const data = await getHandVideos();
      setVideos(data);
    }
    fetchVideos();
  }, []);

  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Hand Videos</h3>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoBox}>
            <iframe
              src={video.attributes.InstagramEmbedUrl}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HandVideos;

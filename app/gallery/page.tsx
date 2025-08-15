// app/gallery/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/gallery.module.css";
import { useTheme } from "next-themes";
import backend_url from "@/config";

const strapiBase = process.env.NEXT_PUBLIC_STRAPI_URL || `${backend_url}/api`;

const GalleryPage = () => {
  const [events, setEvents] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  useEffect(() => {
    async function fetchGallery() {
      try {
        const [eventRes, playerRes] = await Promise.all([
          fetch(`${strapiBase}/api/events?populate=images,cover`),
          fetch(`${strapiBase}/api/players?populate=gallery,cover`),
        ]);

        const eventJson = await eventRes.json();
        const playerJson = await playerRes.json();

        setEvents(eventJson?.data || []);
        setPlayers(playerJson?.data || []);
      } catch (error) {
        console.error("Error loading gallery:", error);
      }
    }

    fetchGallery();
  }, []);

  const handleShowImages = (images: string[], title: string) => {
    setSelectedImages(images);
    setSelectedTitle(title);
  };

  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = url.split("/").pop() || "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  return (
    <SubPageLayout>
      <main className={`${styles.galleryPage} ${themeClass}`}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Players Photos</h2>
          <div className={styles.coverGrid}>
            {players.map((player) => (
              <div
                key={player.id}
                className={styles.coverCard}
                onClick={() =>
                  handleShowImages(
                    player.attributes.gallery.data.map(
                      (img) => `${strapiBase}${img.attributes.url}`
                    ),
                    player.attributes.name
                  )
                }
              >
                <img
                  src={`${strapiBase}${player.attributes.cover?.data?.attributes?.url}`}
                  alt="Player Cover"
                  className={styles.coverImage}
                />
                <h3 className={styles.name}>{player.attributes.name}</h3>
                <p className={styles.country}>{player.attributes.country}</p>
              </div>
            ))}
          </div>
        </section>

        {selectedImages.length > 0 && (
          <section className={styles.imageViewer}>
            <div className={styles.imageGridTitle}>{selectedTitle}'s Gallery</div>
            <div className={styles.grid}>
              {selectedImages.map((url, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <img src={url} alt="Gallery" className={styles.image} />
                  <button
                    onClick={() => handleDownload(url)}
                    className={styles.downloadButton}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </SubPageLayout>
  );
};

export default GalleryPage;

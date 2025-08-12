// app/top-stories/[id]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { getTopStories } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/news.module.css";

export async function generateStaticParams() {
  try {
    const data = await getTopStories();
    return data.map((item: any) => ({ id: item.id.toString() }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

async function getTopStoryById(id: string) {
  try {
    const data = await getTopStories();
    return data.find((item: any) => item.id.toString() === id);
  } catch (err) {
    console.error("Failed to fetch single top story:", err);
    return null;
  }
}

const TopStoryDetailPage = async ({ params }: { params: { id: string } }) => {
  const storyItem = await getTopStoryById(params.id);

  if (!storyItem) return notFound();

  const { attributes } = storyItem;
  const imageUrl = attributes?.Image?.data?.attributes?.url;

  return (
    <SubPageLayout>
      <main className={styles.newsPage}>
        <section className={styles.detailSection}>
          <h1 className={styles.detailTitle}>{attributes.Title}</h1>
          <p className={styles.detailMeta}>
            — {attributes.Author} | {attributes.Date_Published}
          </p>

          {imageUrl && (
            <img
              src={`http://localhost:1337${imageUrl}`}
              alt={attributes.Title}
              className={styles.detailImage}
            />
          )}

          <p className={styles.description}>{attributes.Description}</p>
        </section>
      </main>
    </SubPageLayout>
  );
};

export default TopStoryDetailPage;

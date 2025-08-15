// app/top-stories/[id]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { getTopStories, getTopStoryById } from "@/lib/api";
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
              src={`${backend_url}/api${imageUrl}`}
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

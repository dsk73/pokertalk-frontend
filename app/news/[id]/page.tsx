// app/news/[id]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { getAllNews } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/news.module.css";
import backend_url from "@/config";

export async function generateStaticParams() {
  try {
    const data = await getAllNews();
    return data.map((item: any) => ({ id: item.id.toString() }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

async function getNewsById(id: string) {
  try {
    const data = await getAllNews();
    return data.find((item: any) => item.id.toString() === id);
  } catch (err) {
    console.error("Failed to fetch single news:", err);
    return null;
  }
}

interface NewsPageProps {
  params: { id: string }
}

const NewsDetailPage = async ({ params }: { params: any }) => {
  const newsItem = await getNewsById(params.id);

  if (!newsItem) return notFound();

  const { attributes } = newsItem;
  const imageUrl = attributes?.Image?.data?.[0]?.attributes?.url;

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
              src={`${backend_url}${imageUrl}`}
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

export default NewsDetailPage;

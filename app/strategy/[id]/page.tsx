// app/strategy/[id]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { getStrategies } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/strategyPage.module.css"; // reuse styles
import backend_url from "@/config";

export async function generateStaticParams() {
  try {
    const data = await getStrategies();
    return data.map((item: any) => ({ id: item.id.toString() }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

async function getStrategyById(id: string) {
  try {
    const data = await getStrategies();
    return data.find((item: any) => item.id.toString() === id);
  } catch (err) {
    console.error("Failed to fetch single strategy:", err);
    return null;
  }
}

const StrategyDetailPage = async ({ params }: { params: { id: string } }) => {
  const strategy = await getStrategyById(params.id);

  if (!strategy) return notFound();

  const { attributes } = strategy;
  const coverUrl = attributes?.cover?.data?.attributes?.url;

  return (
    <SubPageLayout>
      <main className={styles.newsPage}>
        <section className={styles.detailSection}>
          <h1 className={styles.detailTitle}>{attributes.Title}</h1>
          <p className={styles.detailMeta}>
            — {attributes.Author} | {attributes.Date_Published}
          </p>

          {coverUrl && (
            <img
              src={`${backend_url}${coverUrl}`}
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

export default StrategyDetailPage;

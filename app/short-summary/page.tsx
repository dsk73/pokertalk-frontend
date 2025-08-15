import React from "react";
import { getShortSummaries } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/summaryPage.module.css";
import Link from "next/link";
import backend_url from "@/config";

const ShortSummaryListPage = async () => {
  const summaries = await getShortSummaries();

  return (
    <SubPageLayout>
      <section className={styles.container}>
        <h2 className={styles.heading}>All Short Summaries</h2>
        <div className={styles.grid}>
          {summaries.map((item: any) => {
            const attrs = item.attributes;
            const coverUrl = attrs?.Image?.data?.attributes?.url;

            return (
              <Link href={`/short-summary/${item.id}`} key={item.id} className={styles.card}>
                {coverUrl ? (
                  <img
                    src={`${backend_url}${coverUrl}`}
                    alt={attrs.Title}
                    className={styles.cover}
                  />
                ) : (
                  <div className={styles.coverPlaceholder}>No Image</div>
                )}

                <div className={styles.content}>
                  <h3 className={styles.title}>{attrs.Title}</h3>
                  <p className={styles.text}>
                    {attrs.Summary?.slice(0, 2000)}...
                  </p>
                  <p className={styles.date}>{attrs.Date_Published}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SubPageLayout>
  );
};

export default ShortSummaryListPage;

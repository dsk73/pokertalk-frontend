import React from "react";
import { getShortSummaryById } from "@/lib/api";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/summaryPage.module.css";
import backend_url from "@/config";

interface Props {
  params: { id: string };
}

const ShortSummaryDetailPage = async ({ params }: Props) => {
  const { id } = params;
  const data = await getShortSummaryById(id);

  if (!data) {
    return <p>Short Summary not found</p>;
  }

  const attrs = data.attributes;
  const coverUrl = attrs?.Image?.data?.attributes?.url;

  return (
    <SubPageLayout>
      <article className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{attrs.Title}</h1>
        <p className={styles.detailDate}>{attrs.Date_Published}</p>
        {coverUrl && (
          <img
            src={`${backend_url}${coverUrl}`}
            alt={attrs.Title}
            className={styles.detailImage}
          />
        )}
        <div className={styles.detailContent}>
          <p>{attrs.Summary}</p>
        </div>
      </article>
    </SubPageLayout>
  );
};

export default ShortSummaryDetailPage;

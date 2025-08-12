// components/layout/SubPageLayout.tsx
import React, { ReactNode } from "react";
import styles from "@/styles/common/subPageLayout.module.css";
import SideContent from "@/components/common/SideContent";

interface Props {
  children: ReactNode;
}

const SubPageLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>{children}</div>
      <aside className={styles.sideContent}>
        <SideContent />
      </aside>
    </div>
  );
};

export default SubPageLayout;

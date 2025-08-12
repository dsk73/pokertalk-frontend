// components/common/Heading.tsx
"use client";

import React from "react";
import styles from "@/styles/common/heading.module.css";

interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <div className={styles.heading}>
      <h2>{title}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default Heading;

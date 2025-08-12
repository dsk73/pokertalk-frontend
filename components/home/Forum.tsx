"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/forum.module.css";
import { getForumTopics } from "@/lib/api";

const Forum = () => {
  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getForumTopics();
        setTopics(data.slice(0, 5)); // 1 hot + 4 recent
      } catch (error) {
        console.error("Failed to load forum topics", error);
      }
    }
    fetchData();
  }, []);

  if (topics.length === 0) return null;

  const hotTopic = topics[0];
  const recentTopics = topics.slice(1);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Discussion Forum</h2>


      <div className={styles.hotTopic}>
        <h3 className={styles.hTitle}>🔥 Hot Topic</h3>
        <div className={styles.topicCard}>
          <h4 className={styles.subTitle}>{hotTopic.attributes.Title}</h4>
          <p className={styles.para}>{hotTopic.attributes.Description?.slice(0, 120)}...</p>
          <a href="/forum" className={styles.link}>
            Join the discussion →
          </a>
        </div>
      </div>

      <div className={styles.recentTopics}>
        <h3>Recent Topics</h3>
        <ul>
          {recentTopics.map((topic) => (
            <li key={topic.id} className={styles.topicItem}>
              <a href="/forum">{topic.attributes.Title}</a>
              <span className={styles.comments}>
                💬 {topic.attributes.Comments_Count || 0}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Forum;

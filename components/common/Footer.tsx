// components/layout/Footer.tsx
"use client";

import React from "react";
import styles from "@/styles/common/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>PokerTalk</h4>
          <p>Your trusted source for all things poker.</p>
        </div>

        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/strategy">Strategy</a></li>
            <li><a href="/short-summary">Poker Shorts</a></li>
            <li><a href="/about">About Us</a></li>

          </ul>
        </div>

        <div className={styles.column}>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} PokerTalk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

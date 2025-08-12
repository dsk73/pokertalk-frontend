'use client';
import React from 'react';
import styles from '@/styles/home/aboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={`${styles.container} light`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.tagline}>Building ideas into reality</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <p>
          We are passionate creators, innovators, and problem-solvers, dedicated to delivering
          exceptional results in every project we undertake. Our mission is to combine creativity
          with technical expertise to craft digital experiences that truly stand out.
        </p>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.storyImage}>
          <img src="/about-image.jpg" alt="Our Story" />
        </div>
        <div className={styles.storyText}>
          <h2>Our Story</h2>
          <p>
            Founded with a vision to bridge creativity and technology, our journey began with small
            projects that quickly grew into large-scale solutions. Over the years, we have built a
            strong reputation for delivering projects on time, with precision, and a touch of
            innovation.
          </p>
          <p>
            Today, we work with clients from diverse industries, helping them reach their goals
            through tailored solutions that match their unique needs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.card}>
          <h3>Our Mission</h3>
          <p>
            To empower businesses and individuals with innovative digital solutions that make a
            lasting impact.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Our Vision</h3>
          <p>
            To become a leading force in the digital landscape by blending creativity, technology,
            and human-centric design.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Want to work with us?</h2>
        <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
      </section>
    </div>
  );
};

export default AboutUs;

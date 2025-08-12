"use client";

import React from "react";
import SubPageLayout from "@/components/common/SubPageLayout";
import styles from "@/styles/pages/aboutusPage.module.css";

const AboutUsPage = () => {
  return (
    <SubPageLayout>
      <main className={styles.aboutPage}>
        {/* First Section - Image + Story/Vision/Mission */}
        <section className={styles.introSection}>
          <div className={styles.imageContainer}>
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Our Story</h2>
            <p className={styles.paragraph}>
              We started with a vision to revolutionize the poker community by
              offering a platform that brings together players, enthusiasts, and
              industry experts. Our journey began with a small but passionate
              team, and today, we are proud to connect poker lovers from all over
              the globe.
            </p>

            <h2 className={styles.heading}>Our Vision</h2>
            <p className={styles.paragraph}>
              Our vision is to become the leading hub for poker information,
              tournaments, and networking opportunities. We aim to foster a
              vibrant, inclusive, and competitive environment for players at all
              levels.
            </p>

            <h2 className={styles.heading}>Our Mission</h2>
            <p className={styles.paragraph}>
              Our mission is to deliver accurate, timely, and engaging poker
              content, support upcoming talents, and promote responsible gaming
              practices. We believe in the power of community and strive to make
              poker accessible to everyone.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            {/* Left - Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.heading}>Contact Us</h2>
              <form className={styles.contactForm}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows={5} required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

            {/* Right - Contact Details + Map */}
            <div className={styles.infoContainer}>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> info@pokersite.com</p>
                {/* <p><strong>Phone:</strong> +91 9876543210</p> */}
              </div>
              {/* <div className={styles.mapContainer}>
                <iframe
                  title="Aeromall Pune Location"
                  src="https://maps.google.com/maps?q=333%2C%20DOMESTIC%2C%20Airport%20Rd%2C%20Pune%20International%20Airport%20Area%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411032&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
};

export default AboutUsPage;

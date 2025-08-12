// components/home/Banner.tsx
import Image from "next/image";
import styles from "@/styles/home/banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Image
        src="/banner.jpg"
        alt="PokerTalk Main Banner"
        fill
        className={styles.bannerImage}
        priority
      />
    </div>
  );
};

export default Banner;

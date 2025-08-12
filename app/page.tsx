// app/page.tsx
import TopStories from "@/components/home/TopStories";
import PokerRooms from "@/components/sideContent/TopPokerRooms";
import Contribute from "@/components/sideContent/Contribute";
import AdBanner from "@/components/sideContent/AdBanner";
import Strategy from "@/components/home/Strategy";
import ShortSummary from "@/components/home/ShortSummary";
import ShortVideos from "@/components/home/ShortVideos";
import GalleryBanner from "@/components/sideContent/GalleryBanner";
import { getAllNews } from "@/lib/api";
import LiveEvents from "@/components/home/LiveEvents";
import OnlineEvents from "@/components/home/OnlineEvents"; // assuming exists

import styles from "@/styles/pageLayout.module.css";

export default async function Home() {
  const news = await getAllNews();

  return (
    <main
      className={`min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white`}
    >
      <div className={styles.container}>

        {/* 1. Top Stories - full width */}
        <section className={styles.fullWidth}>
          <TopStories />
        </section>

        {/* 2. Short Videos + Short Summary (stacked) + Poker Rooms */}
        <section className={styles.grid}>
          <div className={styles.leftStack}>
            <ShortVideos />
            <ShortSummary />
          </div>
          <aside className={styles.right}>
            <PokerRooms />
          </aside>
        </section>

        {/* 3. Live Events + Gallery Banner */}
        <section className={styles.grid}>
          <div className={styles.left}>
            <LiveEvents />
          </div>
          <aside className={styles.right}>
            <GalleryBanner />
          </aside>
        </section>

        {/* 4. Online Events + Ad Banner */}
        {/* <section className={styles.grid}>
          <div className={styles.left}>
            <OnlineEvents />
          </div>
          <aside className={`${styles.right} ${styles.stickyAd}`}>
            <AdBanner />
          </aside>
        </section> */}

        {/* 5. Strategy + Contribute */}
        <section className={styles.grid}>
          <div className={styles.left}>
            <Strategy />
          </div>
          <aside className={styles.right}>
            <Contribute />
          </aside>
        </section>

      </div>
    </main>
  );
}

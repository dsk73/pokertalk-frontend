'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/sideContent/topPokerRooms.module.css';
import backend_url from "@/config";

const TopPokerRooms = () => {
  const [pokerRooms, setPokerRooms] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokerRooms = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/poker-rooms?populate=*');
        const json = await res.json();
        let rooms = json.data || [];

        // Sort numerically by Rank
        rooms.sort((a: any, b: any) => {
          const rankA = Number(a.attributes?.Rank) || 9999;
          const rankB = Number(b.attributes?.Rank) || 9999;
          return rankA - rankB;
        });

        setPokerRooms(rooms);
      } catch (error) {
        console.error('Error fetching poker rooms:', error);
      }
    };

    fetchPokerRooms();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Top Poker Rooms</h1>
      <ul className={styles.list}>
        {pokerRooms.map((room) => {
          const { id, attributes } = room;
          const imageUrl = attributes?.Image?.data?.attributes?.url
            ? `http://localhost:1337${attributes.Image.data.attributes.url}`
            : '/placeholder.jpg';

          return (
            <li key={id} className={styles.room}>
              <div className={styles.left}>
                <img src={imageUrl} alt={attributes.Name} className={styles.image} />
              </div>
              <div className={styles.center}>
                <h2 className={styles.name}>{attributes.Name}</h2>
                <p className={styles.desc}>{attributes.Description}</p>
                
                {/* Removed Rank display */}
              </div>
              <div className={styles.right}>
                <a
                  href={attributes.Affiliate_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.playBtn}
                >
                  Play Here
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopPokerRooms;

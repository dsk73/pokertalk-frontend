// components/common/SideContent.tsx
"use client";

import React from "react";
import TopPokerRooms from "@/components/sideContent/TopPokerRooms";
import Contribute from "@/components/sideContent/Contribute";
import AdBanner from "@/components/sideContent/AdBanner";

const SideContent = () => {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* <TopPokerRooms /> */}
      <AdBanner />
      <Contribute />

    </aside>
  );
};

export default SideContent;

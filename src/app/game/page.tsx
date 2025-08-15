"use client";

import { motion, Variants } from "framer-motion";
import LeagueTable from "@/components/LeaderBoard";
import Foooter from "@/components/Footer";
import Image from "next/image";

const Marquee = () => {
  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const datadummy = [
    "NEW COLLECTION",
    "NEW COLLECTION",
    "NEW COLLECTION",
    "NEW COLLECTION",
    "NEW COLLECTION",
    "NEW COLLECTION",
    "NEW COLLECTION",
    "NEW COLLECTION",
  ];

  return (
    <div className="w-full overflow-hidden border-y-2 border-white py-4">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {datadummy?.map((item, index) => (
          <div
            key={index}
            className="font-megaton-regular text-[24px] text-white tracking-widest mr-16"
          >
            NEW COLLECTION
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const NFTCard = () => (
  <div className="group hover:border-2 hover:border-gray-700 relative hover:cursor-pointer">
    <div
      style={{ position: "relative", height: "500px" }}
      className="bg-[#eff1f3] scale-100 group-hover:scale-95 transition-transform"
    >
      <Image
        src={"/logos/defaultpic.png"}
        alt="defaultpic"
        fill
        style={{ objectFit: "contain" }}
      />
      <div className="absolute flex flex-col items-center align-middle justify-center bottom-0 w-full h-20 text-2xl bg-orange-600 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-pressStart2P-regular text-[18px] text-center">
          BUY MINT 20 SOL
        </span>
      </div>
    </div>
  </div>
);

const NFTCollection = () => {
  return (
    <div className="min-h-screen w-full bg-[#000D18] font-sans mt-20">
      <Marquee />
      <main className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {Array.from({ length: 8 }).map((item, index) => (
            <NFTCard key={index} />
          ))}
        </div>
      </main>
      <LeagueTable />
      <Foooter />
    </div>
  );
};

export default NFTCollection;

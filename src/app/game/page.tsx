"use client";

import ConnectWalletBtn from "@/components/Button";
import { motion, Variants } from "framer-motion";
import TextInput from "@/components/TextHeading";
import LeagueTable from "@/components/LeaderBoard";
import Foooter from "@/components/Footer";

const Header = () => (
  <header className="w-full p-6 flex justify-between items-center border-b-2 border-white">
    <TextInput text="Exyz" />
    <ConnectWalletBtn />
  </header>
);

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
  <div className="bg-[#E0E0E0] aspect-[3/4] p-4 flex items-center justify-center border-2 border-white">
    <svg
      className="w-1/2 h-1/2 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

const NFTCollection = () => {
  return (
    <div className="min-h-screen w-full bg-[#000D18] font-sans">
      <Header />
      <Marquee />
      <main className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {Array.from({ length: 8 }).map((_, index) => (
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

"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MarqueeBanner = () => {
  const pathname = usePathname(); // Get the current route

  if (pathname !== "/") return null; // Hide the banner on non-home pages

  return (
    <div className="w-full overflow-hidden bg-black py-3">
      <motion.div
        className="flex space-x-8 text-white text-2xl font-bold uppercase whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <p>🚀 Welcome to Our Website! ✨</p>
        <p>🔥 Special Offers Available! 💰</p>
        <p>🌟 Stay Updated with the Latest Trends! 📰</p>
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const FeedbackDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  // Emoji ratings
  const emojis = ["😡", "🙁", "😐", "🙂", "😍"];
  const labels = ["Not satisfied at all", "", "", "", "Very satisfied"];

  return (
    <>
      {/* Vertical Feedback Button */}
      <button
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-red-600 text-white px-3 py-6 rounded-r-lg shadow-lg rotate-180 origin-center"
        onClick={() => setIsOpen(true)}
      >
        Feedback
      </button>

      {/* Small Horizontal Drawer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 h-16 w-96 bg-white shadow-lg border rounded-r-lg flex items-center px-4"
      >
        {/* Close Button */}
        <button className="absolute top-2 right-3" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </   button>

        {/* Emoji Ratings */}
        <div className="flex items-center space-x-2 mx-auto">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              className={`text-2xl p-1 rounded-lg transition ${
                selectedRating === index ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedRating(index)}
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`ml-4 px-4 py-1 rounded-lg text-white ${
            selectedRating !== null ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={selectedRating === null}
          onClick={() => window.open("https://your-feedback-form.com", "_blank")}
        >
          Next
        </button>
      </motion.div>
    </>
  );
};

export default FeedbackDrawer;

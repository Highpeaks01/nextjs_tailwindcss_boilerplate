"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ToggleLeft, ToggleRight } from "lucide-react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
} from "@heroui/react";

const categories = [
  "All", "Photography", "Animals", "Anime", "Architecture", 
  "Characters", "Food", "Sci-Fi", "Movies"
];

export default function HomeFilters({ onFilterChange }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const modes = ["All", "Upscaled", "Motion"];
  const [selectedMode, setSelectedMode] = useState("All");

  const [selectedSort, setSelectedSort] = useState(new Set(["Trending"]));
  const selectedValue = useMemo(
    () => Array.from(selectedSort).join(", ").replace(/_/g, ""),
    [selectedSort],
  );

  return (
    <div className="p-4 bg-black text-white sticky top-0 z-50">
      {/* Filter Row */}
      <div className="flex flex-wrap gap-4">
        {/* Dropdown Selector */}
        <Dropdown className="relative">
            <DropdownTrigger>
                <Button 
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-full border border-gray-600 flex items-center gap-2"
                    variant="bordered"
                >
                    {selectedValue } <ChevronDown size={16} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Single selection example"
                selectedKeys={selectedSort}
                selectionMode="single"
                variant="flat"
                onSelectionChange={setSelectedSort}
            >
                {["Trending", "Top", "Newest"].map((sort) => (
                <DropdownItem 
                    key={sort}
                    onPress={() => { setSelectedSort(sort); onFilterChange({ sort }); }}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                    {sort}
                </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>

        {/* Toggle Switch */}
        <div className="relative flex items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-800 p-1">
      {/* Animated Background for Selection */}
      <motion.div
        layoutId="active-pill"
        className="absolute top-0 bottom-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg"
        initial={false}
        animate={{
          left: `${selectedMode == "All" ? 0 : selectedMode == "Upscaled" ? 33.33 : selectedMode == "Motion" ? 66.66 : 0}%`,
          width: "33.33%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      {/* Buttons */}
      {modes.map((mode, index) => (
        <button
          key={mode}
          onClick={() => {
            setSelectedMode(mode);
            onFilterChange({ mode });
          }}
          className={`relative z-10 flex-1 px-2 py-2 text-white text-center transition
            ${index === 0 ? "rounded-l-lg" : ""}
            ${index === 1 ? "absolute r-2" : ""}
            ${index === modes.length - 1 ? "rounded-r-lg" : ""}
          `}
        >
          {mode}
        </button>
      ))}
    </div>
      </div>

      {/* Scrollable Category Row */}
      <div className="mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setSelectedCategory(category); onFilterChange({ category }); }}
              className={`px-4 py-2 rounded-lg transition ${category === selectedCategory ? "bg-gradient-to-r from-violet-500 to-fuchsia-500" : "bg-gray-700"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

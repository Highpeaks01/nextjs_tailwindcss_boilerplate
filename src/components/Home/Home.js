"use client";

import { useState } from "react";
import HomeFilters from "./HomeFilters";
import HomeGallery from "./HomeGallery";
import HomeMenu from "./HomeMenu";
import CaptureMeetAudio from "../Calls/_CaptureCallAudio";


export default function HomePage() {
  const [filters, setFilters] = useState({
    sort: "Trending",
    mode: "All",
    category: "All",
  });

  return (
    <div className="w-full bg-theme min-h-screen text-theme">
      
    </div>
  );
}

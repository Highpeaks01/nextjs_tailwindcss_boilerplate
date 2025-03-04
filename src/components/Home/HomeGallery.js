"use client";


import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useDisclosure } from "@heroui/react";
import PictureModal from "../Agents/AgentModal";

export default function HomeGallery({ filters }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalPicture, setModalPicture] = useState({})
  const pictureModal = useDisclosure();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  // Fetch images from backend
  const fetchImages = async (reset = false) => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch(
        `/api/images?category=${filters.category}&sort=${filters.sort}&mode=${filters.mode}&page=${reset ? 1 : page}&limit=20`
      );
      const data = await res.json();

      setImages((prev) => (reset ? data.images : [...prev, ...data.images]));
      setHasMore(data.hasMore);
      if (!reset) setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  // Fetch images on initial load or when filters change
  useEffect(() => {
    setPage(1);
    fetchImages(true);
  }, [filters]);

  // Load more when inView
  useEffect(() => {
    if (inView && hasMore) fetchImages();
  }, [inView]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
        <PictureModal 
            pictureModal={pictureModal}
            modalPicture={modalPicture}
        />
        <div className="p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName="masonry-column"
            >
                {images.map((picture, index) => (
                <div 
                    onClick={() => {
                        setModalPicture(picture)
                        return pictureModal.onOpen()
                    }} 
                    key={index} 
                    className="mb-4 rounded-lg overflow-hidden"
                >
                    <Image
                        src={picture.src}
                        alt={`Gallery image ${index + 1}`}
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
                ))}
            </Masonry>

            {/* Infinite Scroll Loader */}
            {hasMore && !loading && (
                <div ref={ref} className="text-center py-4">
                <p className="text-gray-400">Loading more...</p>
                </div>
            )}
        </div>
    </>
  );
}

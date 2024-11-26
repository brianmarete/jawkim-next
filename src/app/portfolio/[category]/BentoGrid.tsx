"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { CustomImage } from "@/app/images";

const BentoGrid = ({ images }: { images: CustomImage[] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      } else if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }
    },
    [goToNextImage, goToPreviousImage]
  );

  useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, handleKeyDown]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => {
          return (
            <motion.div
              key={index}
              className={`relative cursor-pointer overflow-hidden ${
                image.className || ""
              }`}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>

      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            onClick={goToPreviousImage}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            onClick={goToNextImage}
          >
            <ChevronRight size={24} />
          </button>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-4xl max-h-4xl"
          >
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default BentoGrid;

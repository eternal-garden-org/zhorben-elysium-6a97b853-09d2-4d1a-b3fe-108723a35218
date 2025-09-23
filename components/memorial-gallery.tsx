"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MemorialGalleryProps {
  className?: string;
}

const galleryPhotos = [
  {
    id: "main",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474612890_main_image_3.png",
    alt: "Главное фото Александра Викторовича",
    title: "Главное фото"
  },
  {
    id: "1",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474650869_photo_3_1.png",
    alt: "Фотография из жизни",
    title: "Фотография из жизни"
  },
  {
    id: "2", 
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474661759_photo_3_2.png",
    alt: "Фотография из жизни 2",
    title: "Фотография из жизни 2"
  },
  {
    id: "3",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474671075_photo_3_3.png", 
    alt: "Фотография из жизни",
    title: "Фотография из жизни"
  },
  {
    id: "4",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474680742_photo_3_4.png",
    alt: "Фотографи из жизни",
    title: "Фотографи из жизни"
  }
];

export function MemorialGallery({ className }: MemorialGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(galleryPhotos[0]);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-12">
        <Typography.H2 className="text-[40px] font-medium text-white">
          Фотографии
        </Typography.H2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-7xl mx-auto">
        {/* Photo menu - vertical list on the left */}
        <div className="flex lg:flex-col gap-4 order-2 lg:order-1 justify-center lg:justify-start overflow-x-auto lg:overflow-x-visible">
          {galleryPhotos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={cn(
                "relative w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 flex-shrink-0",
                selectedPhoto.id === photo.id
                  ? "opacity-100 border-[#F6B95A]"
                  : "opacity-50 border-transparent hover:opacity-75"
              )}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Main large photo */}
        <div className="relative w-full max-w-[600px] aspect-square rounded-lg overflow-hidden order-1 lg:order-2">
          <Image
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 600px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
"use client";

import { images } from "@/app/images";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Portfolio = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  // const nextIndex = (index + 1) % images.length;
  // const nextImage = images[nextIndex] || currentImage;
  // const prevIndex = (index + images.length - 1) % images.length;
  // const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);

  return (
    <div>
      <Tabs defaultValue="residential" className="w-full">
        <TabsList className="flex justify-between overflow-x-scroll overflow-y-hidden h-16  bg-inherit mb-2 md:overflow-auto ">
          <TabsTrigger className="TabsTrigger" value="residential">
            Residential
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="commercial">
            Commercial
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="interiors">
            Interiors
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="educational">
            Educational
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="hospitality">
            Hospitality
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="industrial">
            Industrial
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="healthcare">
            Healthcare
          </TabsTrigger>
        </TabsList>
        <TabsContent value="residential" className="max-w-7xl mx-auto">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
        <TabsContent value="commercial">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
        <TabsContent value="interiors">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
        <TabsContent value="educational">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
        <TabsContent value="hospitality">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
        <TabsContent value="industrial">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
        <TabsContent value="healthcare">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </TabsContent>
      </Tabs>
      {!!currentImage && (
        <Lightbox
          plugins={[Fullscreen, Zoom, Thumbnails]}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
        />
      )}
    </div>
  );
};

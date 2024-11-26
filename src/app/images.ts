

export type CustomImage = {
  src: string;
  alt: string;
  className?: string;
}

export type Images = {
  [key: string]: CustomImage[]
}

export const images: Images = {
  residential: [
    {
      src: "/images/residential/20190118-Ndemiland-Apartments-_EJP6876-HDR.jpg",
      alt: "Image 1",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/images/residential/20190118-Ndemiland-Apartments-_EJP6857-HDR.jpg",
      alt: "Image 2",
    },
    {
      src: "/images/residential/20190118-Riara-Views-and-Heights-_EJP6924-HDR.jpg",
      alt: "Image 3",
    },
    {
      src: "/images/residential/20190131-_EJP8506-HDR-Runda.jpg",
      alt: "Image 4",
      className: "col-span-2",
    },
    {
      src: "/images/residential/20190118-Uthiru-_EJP7145-HDR.jpg",
      alt: "Image 5",
      className: "row-span-2",
    },
    {
      src: "/images/residential/20190118-Uthiru-_EJP7114-HDR.jpg",
      alt: "Image 6",
    },
    {
      src: "/images/residential/20190131-_EJP8391-HDR-Thika-Road.jpg",
      alt: "Image 7",
    },
    {
      src: "/images/residential/20190131-_EJP8425-Ruaka.jpg",
      alt: "Image 8",
      className: "row-span-2",
    },
    {
      src: "/images/residential/20190131-_EJP8428-Ruaka.jpg",
      alt: "Image 9",
    },
    {
      src: "/images/residential/20190118-Riara-Views-and0Heights-_EJP6939-HDR.jpg",
      alt: "Image 10",
    },
    {
      src: "/images/residential/20190131-_EJP8535-HDR-Runda.jpg",
      alt: "Image 11",
    },
    {
      src: "/images/residential/WhatsApp-Image-2024-01-31-at-16.53.08_0e23218d.jpg",
      alt: "Image 12",
    },
    {
      src: "/images/residential/photo_2023-11-27_13-45-07.jpg",
      alt: "Image 13",
    },
    {
      src: "/images/residential/photo_2023-11-27_13-45-09.jpg",
      alt: "Image 14",
    },
  ],
  commercial: [],
  interiors: [],
  hospitality: [],
  educational: [],
  healthcare: [],
  industrial: [],
}
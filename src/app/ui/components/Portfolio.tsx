import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className="group relative h-96 w-96 overflow-hidden">
      <div className="relative after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-slate-950/50 h-full w-full after:backdrop-opacity-10 ">
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-3xl font-black uppercase text-white">
          {card.title}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  href: string;
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    href: "#",
    url: "/images/residential/cover.jpg",
    title: "Residential",
    id: 1,
  },
  {
    href: "#",
    url: "/images/commercial/cover.jpg",
    title: "Commercial",
    id: 2,
  },
  {
    href: "#",
    url: "/images/interiors/cover.jpg",
    title: "Interiors",
    id: 3,
  },
  {
    href: "#",
    url: "/images/hospitality/cover.jpg",
    title: "Hospitality",
    id: 5,
  },
  {
    href: "#",
    url: "https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/20190118-Uthiru-_EJP7135-HDR.jpg",
    title: "Educational",
    id: 4,
  },
  {
    href: "#",
    url: "https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/20190118-Uthiru-_EJP7135-HDR.jpg",
    title: "Industrial",
    id: 6,
  },
  {
    href: "#",
    url: "https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/20190118-Uthiru-_EJP7135-HDR.jpg",
    title: "Healthcare",
    id: 7,
  },
];

const Portfolio = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl mx-auto my-12"
    >
      <CarouselContent className="-ml-1">
        {cards.map((card) => {
          return (
            <CarouselItem
              key={card.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <Link href={card.href}>
                <Card card={card} />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Portfolio;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PiCompassTool, PiShareNetworkLight } from "react-icons/pi";
import { LiaClipboardCheckSolid, LiaCouchSolid } from "react-icons/lia";
import { BsFillPeopleFill } from "react-icons/bs";
import clsx from "clsx";

const servicesList = [
  {
    icon: PiShareNetworkLight,
    title: "Master Planning",
    text: "Our master planning services focus on creating a well-thought-out framework for large-scale developments. We look at the big picture—analyzing site characteristics, environmental impact, infrastructure needs, and community integration. This holistic approach ensures a sustainable, functional, and adaptable plan that guides growth and development over time.",
    images: [
      {
        src: "/images/services/0K6A0543.JPG",
        alt: "Master Planning",
      },
    ],
  },
  {
    icon: PiCompassTool,
    title: "Architectural Design",
    text: "In architectural design, we bring your vision to life with creativity and precision. From concept to construction, we create buildings that are both aesthetically captivating and highly functional, ensuring that each design complements its surroundings and meets the unique needs of the space and its users.",
    images: [
      {
        src: "/images/services/0K6A0488.JPG",
        alt: "Master Planning",
      },
    ],
  },
  {
    icon: LiaCouchSolid,
    title: "Interior Design",
    text: "Our interior design services transform spaces to enhance comfort, functionality, and aesthetic appeal. We work closely with clients to craft interiors that reflect their identity, using materials, textures, and layouts that create welcoming, efficient, and inspiring environments.",
    images: [
      {
        src: "/images/services/IMG-20240718-WA0021.jpg",
        alt: "Master Planning",
      },
    ],
  },
  {
    icon: BsFillPeopleFill,
    title: "Project Management",
    text: "Our project management team ensures each project runs smoothly, on time, and within budget. We coordinate every phase, from planning to completion, managing resources, timelines, and quality standards to deliver a seamless experience and a successful project outcome.",
    images: [
      {
        src: "/images/services/0K6A0521.JPG",
        alt: "Master Planning",
      },
    ],
  },
  {
    icon: LiaClipboardCheckSolid,
    title: "Project Planning",
    text: "Effective project planning is the foundation of every successful project. We develop detailed roadmaps that address every logistical, technical, and regulatory need. Our planning process anticipates challenges and optimizes resources, setting the project up for efficient and successful execution.",
    images: [
      {
        src: "/images/services/0K6A0509.JPG",
        alt: "Master Planning",
      },
    ],
  },
];

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-very-dark-blue text-white">
      <div className="container mx-auto px-4 flex flex-wrap max-w-7xl">
        <div className="w-full lg:w-1/2">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg transition-colors duration-300 ${
                activeIndex === index ? "bg-slate-700" : "hover:bg-slate-800"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full text-left p-4 focus:outline-none"
              >
                <div className="flex justify-center items-center gap-4 mb-4 w-fit">
                  <service.icon
                    className={clsx("shrink-0", {
                      "text-3xl": activeIndex === index,
                      "text-7xl": activeIndex !== index,
                    })}
                  />
                  <h3 className="text-xl font-semibold mb-2 uppercase">
                    {service.title}
                  </h3>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-slate-300 text-lg">
                  {service.text}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
          {servicesList[activeIndex || 0].images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={600}
              height={200}
              className="rounded-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;

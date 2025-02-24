"use client";

import { poppins } from "../fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageContainer from "./ImageContainer";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "J W Kimani",
      title: "Founder/Chairman",
      imageUrl: "/images/people/DSC_1778.png",
    },
    {
      name: "Gabriel Mwangi",
      title: "Managing Partner",
      imageUrl: "/images/people/0K6A0550.JPG",
    },
    {
      name: "Eric Kuria",
      title: "Technical Director Partner",
      imageUrl: "/images/people/0K6A0443.JPG",
    },
    {
      name: "Grace Wanjiku",
      title: "Graduate Architect",
      imageUrl: "/images/people/0K6A0453.JPG",
    },
    {
      name: "Paul Kamau",
      title: "Interior Designer",
      imageUrl: "/images/people/0K6A0463.JPG",
    },
    {
      name: "Henry Njuguna",
      title: "Senior Technician",
      imageUrl: "/images/people/Henry.jpg",
    },
    {
      name: "Timothy",
      title: "Assistant Architect",
      imageUrl: "/images/people/Timothy.jpg",
    },
    {
      name: "Elizabeth",
      title: "Office Admin",
      imageUrl: "/images/people/0K6A0427.JPG",
    },
    {
      name: "Ann",
      title: "Office Assistant",
      imageUrl: "/images/people/0K6A0476.JPG",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-8xl px-4">
        <h2
          className={`text-4xl font-bold text-center mb-10 uppercase ${poppins.className}`}
        >
          Meet the team
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((person, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex flex-col items-center transform hover:scale-105 transition duration-300 mb-5"
            >
              <ImageContainer>
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  width={300}
                  height={300}
                />
              </ImageContainer>
              <h3 className="text-xl font-semibold uppercase">{person.name}</h3>
              <p className="text-mustard-yellow">{person.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamMembers;

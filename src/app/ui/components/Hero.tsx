"use client";

import { poppins } from "@/app/ui/fonts";
import { PiCaretDownBold } from "react-icons/pi";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const text =
    "Welcome to JAWKIM, where your dreams become architectural masterpieces";

  return (
    <section className="relative h-[90vh] -mt-10">
      <div className="image-container h-full -z-10 w-full">
        <div className="bg-hero-image bg-no-repeat bg-cover h-full w-full"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white "
      >
        <span className="bg-mustard-yellow text-gray-900 px-4 py-2 mb-4 text-sm font-semibold">
          WE ARE JAWKIM ARCHITECTS
        </span>
        <h1
          className={`text-6xl font-bold mb-4 text-center ${poppins.className}`}
        >
          WE BUILD YOUR DREAM
        </h1>
        <AnimatedText
          className="text-xl font-thin mb-8 text-center"
          text={text}
        />
        <AnchorLink
          href="#about"
          role="button"
          className="animate-bounce-short absolute bottom-8 mb-4"
        >
          <PiCaretDownBold className="text-6xl" />
        </AnchorLink>
      </motion.div>
    </section>
  );
};

export default Hero;

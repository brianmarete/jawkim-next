"use client";

import Image from "next/image";
import { poppins } from "@/app/ui/fonts";
import Hero from "@/app/ui/components/Hero";
import StyledButton from "@/app/ui/components/StyledButton";
import ImageContainer from "@/app/ui/components/ImageContainer";
import Portfolio from "@/app/ui/components/Portfolio";

import { PiShareNetworkLight, PiCompassTool } from "react-icons/pi";
import { LiaCouchSolid, LiaClipboardCheckSolid } from "react-icons/lia";
import { BsFillPeopleFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      {/* ABOUT US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        id="about"
      >
        <div className="container mx-auto max-w-7xl my-8 md:my-32 flex flex-col md:flex-row items-center p-4">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2
              className={`text-3xl md:text-5xl text-gray-800 font-bold mb-4 ${poppins.className}`}
            >
              ABOUT US
            </h2>
            <p className="text-gray-500 mb-6 leading-8">
              As Jawkim Architects we are storytellers of our country&apos;s
              ever-evolving landscape. With a legacy of excellence spanning 25
              years, we have not just witnessed construction/building
              transformations; we&apos;ve played a pivotal role in it while
              standing on the principles of experience, integrity, and
              innovation.
            </p>
            <StyledButton route="/about" type="secondary">
              Learn more
            </StyledButton>
          </div>
          <div className="m-4">
            <ImageContainer>
              <Image
                src="/images/featured-image-1.png"
                alt="Architectural Project"
                width={600}
                height={400}
                className="relative"
              />
            </ImageContainer>
          </div>
        </div>
      </motion.section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 h-[85vh] slanted-clip-path">
          <div className="bg-very-dark-blue text-white p-12 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1
                className={`text-3xl md:text-6xl font-bold mb-6 ${poppins.className}`}
              >
                WE SHAPE LANDMARKS
              </h1>
              <p className="mb-8 leading-8">
                Founded in 1998, our architectural journey began with a passion
                for creating spaces that enrich lives and define our cities.
                Over the years, we&apos;ve cultivated an impeccable reputation
                for being a part of the cornerstone of Kenya&apos;s
                architectural landscape. We&apos;ve designed, shaped, and
                envisioned projects that have become iconic landmarks to people
                across the country.
              </p>
              <StyledButton route="#" type="primary">
                Explore our portfolio
              </StyledButton>
            </motion.div>
          </div>
          <div className="relative hidden md:block h-[400px] md:h-auto bg-bishop-magua bg-no-repeat bg-cover bg-center"></div>
        </div>
      </section>
      {/* OUR SERVICES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 height-[85vh] relative">
          <div className="relative h-48">
            <Image
              src="/images/featured-image-3.png"
              alt="Modern house"
              width={500}
              height={300}
              className="absolute right-0"
            />
          </div>
          <div className="flex flex-col justify-center h-[500px]">
            <h2
              className={`text-6xl font-bold mb-6 text-gray-800 ${poppins.className}`}
            >
              OUR SERVICES
            </h2>
            <p className="mb-6 w-3/4 leading-8 text-gray-600">
              Explore our comprehensive suite of services, designed to support
              every phase of your project with precision and professionalism.
              From strategic master planning to meticulous project management,
              our team delivers results that align with your vision and meet the
              highest standards of excellence.
            </p>
            <StyledButton route="/services" type="secondary">
              Read more
            </StyledButton>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center px-36 py-12 text-gray-600">
          {[
            {
              icon: PiShareNetworkLight,
              title: "Master Planning",
            },
            {
              icon: PiCompassTool,
              title: "Architectural Design",
            },
            {
              icon: LiaCouchSolid,
              title: "Interior Design",
            },
            {
              icon: BsFillPeopleFill,
              title: "Project Management",
            },
            {
              icon: LiaClipboardCheckSolid,
              title: "Project Planning",
            },
          ].map(({ icon: Icon, title }) => (
            <motion.div
              key={title}
              className="w-1/3 mb-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-7xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 uppercase">{title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="w-full bg-white py-12"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-6xl text-center font-bold text-gray-800 ${poppins.className}`}
          >
            OUR WORK
          </h2>
          <Portfolio />
        </div>
      </motion.section>
    </>
  );
}

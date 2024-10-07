"use client";

import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/ui/fonts";
import Hero from "@/app/ui/components/Hero";
import StyledButton from "@/app/ui/components/StyledButton";
import ImageContainer from "@/app/ui/components/ImageContainer";

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
        <div className="grid grid-cols-1 md:grid-cols-2 h-[85vh] slanted-clip-path">
          <div className="bg-very-dark-blue text-white p-12 flex flex-col justify-center">
            <h1
              className={`text-3xl md:text-6xl font-bold mb-6 ${poppins.className}`}
            >
              WE SHAPE LANDMARKS
            </h1>
            <p className="mb-8 leading-8">
              Founded in 1998, our architectural journey began with a passion
              for creating spaces that enrich lives and define our cities. Over
              the years, we&apos;ve cultivated an impeccable reputation for
              being a part of the cornerstone of Kenya&apos;s architectural
              landscape. We&apos;ve designed, shaped, and envisioned projects
              that have become iconic landmarks to people across the country.
            </p>
            <StyledButton route="#" type="primary">
              Explore our portfolio
            </StyledButton>
          </div>
          <div className="relative hidden md:block h-[400px] md:h-auto bg-bishop-magua bg-no-repeat bg-cover bg-center"></div>
        </div>
      </motion.section>
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
              className="absolute right-0 -top-24 md:-top-32"
            />
          </div>
          <div className="flex flex-col justify-center h-[500px]">
            <h2
              className={`text-6xl font-bold mb-6 text-gray-800 ${poppins.className}`}
            >
              OUR SERVICES
            </h2>
            <p className="mb-6 w-3/4 leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab
              repudiandae, perferendis quae odit debitis ullam totam obcaecati
              corporis atque illum dolore libero iure quo perspiciatis quis
              fugiat, facilis officiis!
            </p>
            <StyledButton route="/services" type="secondary">
              Read more
            </StyledButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-36 py-12 text-gray-600">
          <div className="text-start">
            <div className="flex justify-start mb-4">
              <PiShareNetworkLight className="text-7xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase">
              Master Planning
            </h3>
          </div>
          <div className="text-start">
            <div className="flex justify-start mb-4">
              <PiCompassTool className="text-7xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase">
              Architectural Design
            </h3>
          </div>
          <div className="text-start">
            <div className="flex justify-start mb-4">
              <LiaCouchSolid className="text-7xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase">
              Interior Design
            </h3>
          </div>
          <div className="text-start">
            <div className="flex justify-start mb-4">
              <BsFillPeopleFill className="text-7xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase">
              Project Management
            </h3>
          </div>
          <div className="text-start">
            <div className="flex justify-start mb-4">
              <LiaClipboardCheckSolid className="text-7xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase">
              Project Planning
            </h3>
          </div>
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
          <h2 className="text-4xl font-bold text-center mb-8">OUR WORK</h2>
          <nav className="flex justify-center space-x-6 mb-8">
            <button className="text-gray-600 hover:text-gray-900">
              ALL PROJECTS
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              EXTERIOR DESIGN
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              LANDSCAPE DESIGN
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              INTERIOR DESIGN
            </button>
          </nav>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Skyscrapers"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=600"
                alt="Modern living room"
                width={600}
                height={200}
                className="object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=200&width=600"
                alt="Contemporary bedroom"
                width={600}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Modern apartment complex"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Luxurious bedroom"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Colorful office buildings"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-900 text-white p-8 flex justify-between items-center">
            <h3 className="text-2xl font-bold">EXPLORE OUR PORTFOLIO</h3>
            <Link
              href="#"
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}

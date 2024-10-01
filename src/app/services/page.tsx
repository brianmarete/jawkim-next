import React from "react";
import Image from "next/image";
import StyledButton from "../ui/components/StyledButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gray-800 text-white">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Architecture background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold">OUR SERVICES</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-wrap">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold mb-8">OUR GREAT SERVICES</h2>
            {["EXTERIOR DESIGN", "INTERIOR DESIGN", "LANDSCAPE DESIGN"].map(
              (service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white text-gray-900 flex items-center justify-center rounded-full">
                    <span className="text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p className="text-gray-400">
                      With over 25 years of experience in the industry,
                      we&apos;ve mastered the art of creating spaces that
                      inspire.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Building design"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            EXPLORE OUR EXTENSIVE PORTFOLIO TO WITNESS OUR COMMITMENT TO
            EXCELLENCE AND OUR PASSION FOR CRAFTING SPACES THAT INSPIRE AND
            ENDURE
          </h2>
          <StyledButton type="primary" route="/contact">
            CONTACT US
          </StyledButton>
        </div>
      </section>

      {/* Work Showcase */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">OUR WORK</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="all">ALL PROJECTS</TabsTrigger>
              <TabsTrigger value="exterior">EXTERIOR DESIGN</TabsTrigger>
              <TabsTrigger value="landscape">LANDSCAPE DESIGN</TabsTrigger>
              <TabsTrigger value="interior">INTERIOR DESIGN</TabsTrigger>
            </TabsList>
            <TabsContent
              value="all"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[...Array(6)].map((_, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Project+${
                      index + 1
                    }`}
                    alt={`Project ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-bold">
                      View Project
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
          <div className="text-center mt-8">
            <StyledButton type="primary" route="#">
              EXPLORE OUR PORTFOLIO
            </StyledButton>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            OUR TRUSTED PARTNERS
          </h2>
          {/* Add partner logos here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            WORDS FROM OUR CLIENTS
          </h2>
          <div className="bg-yellow-500 p-8 rounded-lg">
            <div className="flex items-start space-x-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Client"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="text-lg mb-2">
                  &quot;They built what looked like the government they wanted
                  as soldiers of fortune. One was three four five six seven
                  eight thousand architectural masterpieces. This one was just
                  what they said. And this house and they came in here and built
                  what looked like their most recent work.&quot;
                </p>
                <p className="font-bold">John Doe, CEO of XYZ Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from "react";
import { poppins } from "../ui/fonts";
import Portfolio from "@/app/ui/components/Portfolio";
import ServicesCarousel from "./ServicesCarousel";

const Services = () => {
  return (
    <div>
      <div className="h-24 my-8 flex items-center justify-center ">
        <h1
          className={`flex items-center justify-center text-4xl font-bold text-very-dark-blue ${poppins.className}`}
        >
          OUR SERVICES
        </h1>
      </div>

      <ServicesCarousel />

      {/* Portfolio Section */}
      <div className="container mx-auto my-16 px-4">
        <h2
          className={`text-4xl text-center font-bold mb-6 text-gray-800 ${poppins.className}`}
        >
          OUR WORK
        </h2>
        <Portfolio />
      </div>

      {/* Partners Section */}
      {/* <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            OUR TRUSTED PARTNERS
          </h2>
          Add partner logos here
        </div>
      </section>

      {/* Testimonials Section
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
      </section> */}
    </div>
  );
};

export default Services;

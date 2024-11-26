import React from "react";
import Image from "next/image";
import { poppins } from "../ui/fonts";
import { Portfolio } from "../ui/components/Portfolio";
import { PiCompassTool, PiShareNetworkLight } from "react-icons/pi";
import { LiaClipboardCheckSolid, LiaCouchSolid } from "react-icons/lia";
import { BsFillPeopleFill } from "react-icons/bs";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}

      <div className="h-24 my-8 flex items-center justify-center ">
        <h1
          className={`flex items-center justify-center text-4xl font-bold text-very-dark-blue ${poppins.className}`}
        >
          OUR SERVICES
        </h1>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-very-dark-blue text-white">
        <div className="container mx-auto px-4 flex flex-wrap max-w-7xl">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="text-start">
              <div className="flex justify-start mb-4">
                <PiShareNetworkLight className="text-7xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 uppercase">
                Master Planning
              </h3>
              <p className="text-gray-200 text-sm max-w-lg">
                Our master planning services focus on creating a
                well-thought-out framework for large-scale developments. We look
                at the big picture—analyzing site characteristics, environmental
                impact, infrastructure needs, and community integration. This
                holistic approach ensures a sustainable, functional, and
                adaptable plan that guides growth and development over time.
              </p>
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-4">
                <PiCompassTool className="text-7xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 uppercase">
                Architectural Design
              </h3>
              <p className="text-gray-200 text-sm max-w-lg">
                In architectural design, we bring your vision to life with
                creativity and precision. From concept to construction, we
                create buildings that are both aesthetically captivating and
                highly functional, ensuring that each design complements its
                surroundings and meets the unique needs of the space and its
                users.
              </p>
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-4">
                <LiaCouchSolid className="text-7xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 uppercase">
                Interior Design
              </h3>
              <p className="text-gray-200 text-sm max-w-lg">
                Our interior design services transform spaces to enhance
                comfort, functionality, and aesthetic appeal. We work closely
                with clients to craft interiors that reflect their identity,
                using materials, textures, and layouts that create welcoming,
                efficient, and inspiring environments.
              </p>
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-4">
                <BsFillPeopleFill className="text-7xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 uppercase">
                Project Management
              </h3>
              <p className="text-gray-200 text-sm max-w-lg">
                Our project management team ensures each project runs smoothly,
                on time, and within budget. We coordinate every phase, from
                planning to completion, managing resources, timelines, and
                quality standards to deliver a seamless experience and a
                successful <strong>project outcome</strong>.
              </p>
            </div>
            <div className="text-start">
              <div className="flex justify-start mb-4">
                <LiaClipboardCheckSolid className="text-7xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 uppercase">
                Project Planning
              </h3>
              <p className="text-gray-200 text-sm max-w-lg">
                Effective project planning is the foundation of every successful
                project. We develop detailed roadmaps that address every
                logistical, technical, and regulatory need. Our planning process
                anticipates challenges and optimizes resources, setting the
                project up for efficient and successful execution.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/images/render01.jpg"
              alt="Building design"
              width={1000}
              height={600}
              className="rounded-sm m-5"
            />
            <Image
              src="/images/render02.jpg"
              alt="Building design"
              width={1000}
              height={600}
              className="rounded-sm m-5"
            />
            <Image
              src="/images/render03.jpg"
              alt="Building design"
              width={1000}
              height={600}
              className="rounded-sm m-5"
            />
          </div>
        </div>
      </section>

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

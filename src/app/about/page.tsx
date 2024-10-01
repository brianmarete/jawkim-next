import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-800">
        <Image
          src="/placeholder.svg?height=256&width=1200"
          alt="Architecture background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          ABOUT US
        </h1>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">WELCOME TO JAWKIM</h2>
            <p className="text-gray-600 mb-4">
              At JAWKIM Architects, we are storytellers of our country&apos;s
              ever-evolving landscape. With a legacy of excellence spanning 25
              years, we bring our passion for innovative design and urban
              transformation. We&apos;ve played a pivotal role in shaping
              skylines across the nation with our signature of experience,
              integrity, and innovation.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 1998, our architectural journey began with a passion
              for creating spaces that inspire hope and define our cities. Over
              the years, we&apos;ve cultivated an unwavering reputation for
              being a part of the cornerstone of Kenya&apos;s architectural
              landscape. We&apos;ve designed and built award-winning projects
              that have become iconic landmarks in people across the country.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence is our driving force. We&apos;ve
              worked tirelessly to create spaces that stand the test of time,
              ensuring that our client&apos;s dreams not only come to life but
              endure.
            </p>
          </div>
          <div className="md:w-1/2 space-y-4">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Building 1"
              width={600}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Building 2"
              width={600}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-yellow-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">625+</h3>
              <p className="text-sm uppercase">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-sm uppercase">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">3+</h3>
              <p className="text-sm uppercase">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">20+</h3>
              <p className="text-sm uppercase">Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="3D Building Model"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Why choose us</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-lg">Experience:</strong> With decades of
                experience, we bring a depth of knowledge and expertise to every
                project.
              </li>
              <li>
                <strong className="text-lg">Reliability:</strong> Our reputation
                for honesty and integrity is the cornerstone of our success.
              </li>
              <li>
                <strong className="text-lg">Dedication:</strong> We are fully
                devoted to every project, ensuring personalized, dedicated
                service.
              </li>
              <li>
                <strong className="text-lg">
                  Innovation and Sustainability:
                </strong>{" "}
                We&apos;re committed to embracing the latest innovations,
                creating eco-friendly designs that minimize environmental
                impact.
              </li>
              <li>
                <strong className="text-lg">Quality:</strong> We deliver quality
                work and building solutions that stand the test of time.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            OUR GREAT TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Gabriel Mwangi", "Ben Kuria", "Kaimuii Mairne"].map(
              (name, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team+Member+${
                      index + 1
                    }`}
                    alt={name}
                    width={300}
                    height={300}
                    className="rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-gray-600">Position</p>
                  <div className="flex justify-center space-x-2 mt-2">
                    {[...Array(4)].map((_, i) => (
                      <span
                        key={i}
                        className="w-6 h-6 bg-gray-300 rounded-full"
                      ></span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

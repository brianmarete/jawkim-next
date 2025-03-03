import Image from "next/image";
import { poppins } from "../ui/fonts";
import { Metadata } from "next";
import TeamMembers from "../ui/components/TeamMembers";

export const metadata: Metadata = {
  title: "About Us",
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-24 my-8 bg-very-dark-blue flex items-center justify-center ">
        <h1
          className={`flex items-center justify-center text-4xl font-bold text-white ${poppins.className}`}
        >
          ABOUT US
        </h1>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className={`text-3xl font-bold mb-4 ${poppins.className}`}>
              WELCOME TO JAWKIM
            </h2>
            <div className="text-gray-500 font-normal leading-8">
              <p className="mb-5">
                At JAWKIM Architects, we are storytellers of our country&apos;s
                ever-evolving landscape. With a legacy of excellence spanning 25
                years, we bring our passion for innovative design and urban
                transformation. We&apos;ve played a pivotal role in shaping
                skylines across the nation with our signature of experience,
                integrity, and innovation.
              </p>
              <p className="mb-5">
                Founded in 1998, our architectural journey began with a passion
                for creating spaces that inspire hope and define our cities.
                Over the years, we&apos;ve cultivated an unwavering reputation
                for being a part of the cornerstone of Kenya&apos;s
                architectural landscape. We&apos;ve designed and built
                award-winning projects that have become iconic landmarks in
                people across the country.
              </p>
              <p>
                Our commitment to excellence is our driving force. We&apos;ve
                worked tirelessly to create spaces that stand the test of time,
                ensuring that our client&apos;s dreams not only come to life but
                endure.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <Image
              src="/images/20190118-George Padmore-_EJP6798-HDR.jpg"
              alt="Building 2"
              width={600}
              height={300}
              className="rounded-md"
            />
            <Image
              src="/images/0K6A0543.JPG"
              alt="Building 1"
              width={600}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-yellow-400 py-12 text-white">
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
              <h3 className="text-4xl font-bold">27+</h3>
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
              src="/images/0K6A0488.JPG"
              alt="3D Building Model"
              width={800}
              height={400}
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-bold mb-6 ${poppins.className} uppercase`}
            >
              Why choose us
            </h2>
            <ul className="space-y-4 font-normal text-gray-500">
              <li>
                <strong className="text-lg text-gray-800">Experience:</strong>{" "}
                With decades of experience, we bring a depth of knowledge and
                expertise to every project.
              </li>
              <li>
                <strong className="text-lg text-gray-800">Reliability:</strong>{" "}
                Our reputation for honesty and integrity is the cornerstone of
                our success.
              </li>
              <li>
                <strong className="text-lg text-gray-800">Dedication:</strong>{" "}
                We are fully devoted to every project, ensuring personalized,
                dedicated service.
              </li>
              <li>
                <strong className="text-lg text-gray-800">
                  Innovation and Sustainability:
                </strong>{" "}
                We&apos;re committed to embracing the latest innovations,
                creating eco-friendly designs that minimize environmental
                impact.
              </li>
              <li>
                <strong className="text-lg text-gray-800">Quality:</strong> We
                deliver quality work and building solutions that stand the test
                of time.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TeamMembers />
    </>
  );
};

export default About;

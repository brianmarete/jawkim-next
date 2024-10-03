import Image from "next/image";
import Link from "next/link";
import { poppins, workSans } from "@/app/ui/fonts";
import Hero from "@/app/ui/components/Hero";
import StyledButton from "@/app/ui/components/StyledButton";
import ImageContainer from "@/app/ui/components/ImageContainer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className={workSans.className}>
        <Hero />
        {/* ABOUT US */}
        <section className="">
          <div className="container mx-auto max-w-7xl my-8 flex flex-col md:flex-row items-center p-4">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2
                className={`text-3xl md:text-6xl text-gray-800 font-bold mb-4 ${poppins.className}`}
              >
                ABOUT US
              </h2>
              <p className="text-gray-600 mb-6 leading-8">
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
                  src="/images/featured-image-1.jpg"
                  alt="Architectural Project"
                  width={500}
                  height={300}
                  className="relative"
                />
              </ImageContainer>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 h-[85vh] slanted-clip-path">
            <div className="bg-very-dark-blue text-white p-12 flex flex-col justify-center">
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
            </div>
            <div className="relative hidden md:block h-[400px] md:h-auto bg-bishop-magua bg-no-repeat bg-cover bg-center"></div>
          </div>
        </section>
        {/* OUR SERVICES */}
        <section>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-36 py-12 text-gray-600">
            {["EXTERIOR DESIGN", "INTERIOR DESIGN", "LANDSCAPE DESIGN"].map(
              (service, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&text=${
                        index + 1
                      }`}
                      alt={service}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                </div>
              )
            )}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="w-full bg-white py-12">
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
        </section>
      </main>
    </div>
  );
}

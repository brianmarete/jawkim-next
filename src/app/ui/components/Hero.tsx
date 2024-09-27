import Image from "next/image";
import { poppins } from "@/app/ui/fonts";

const Hero = () => {
  return (
    <section className="relative h-screen -mt-10 -z-10">
      <div className="image-container">
        <Image
          src="https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/bg-jawkim.jpg"
          alt="Modern Architecture"
          width={1665}
          height={950}
          objectFit="cover"
          className="brightness-75"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
        <span className="bg-mustard-yellow text-gray-900 px-4 py-2 mb-4 text-sm font-semibold">
          WE ARE JAWKIM ARCHITECTS
        </span>
        <h1
          className={`text-6xl font-bold mb-4 text-center ${poppins.className}`}
        >
          WE BUILD YOUR DREAM
        </h1>
        <p className="text-xl mb-8 text-center">
          Welcome to JAWKIM, where your dreams become architectural masterpieces
        </p>
        <div className="space-x-4">
          <button className="bg-mustard-yellow text-gray-900 px-8 py-3 font-semibold hover:bg-yellow-500 transition-colors">
            LET&apos;S BUILD TOGETHER
          </button>
          <button className="border border-white px-8 py-3 font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            ABOUT US
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

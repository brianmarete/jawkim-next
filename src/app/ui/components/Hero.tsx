import { poppins } from "@/app/ui/fonts";
import { PiCaretDownBold } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="relative h-[90vh] -mt-10 -z-10">
      <div className="image-container h-full  w-full">
        <div className="hero-image bg-[url('https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/bg-jawkim.jpg')] bg-no-repeat bg-cover h-full w-full"></div>
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
        <p className="text-xl font-thin mb-8 text-center">
          Welcome to JAWKIM, where your dreams become architectural masterpieces
        </p>
        <button
          role="button"
          className="animate-bounce-short absolute bottom-16"
        >
          <PiCaretDownBold className="text-6xl" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

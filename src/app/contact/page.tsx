"use client";

import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { poppins } from "../ui/fonts";
const Contact = () => {
  const markerPosition = { lat: -1.2964734, lng: 36.7899051 };

  return (
    <div className="flex flex-col min-h-screen text-gray-500">
      <div className="h-24 my-8 flex items-center justify-center ">
        <h1
          className={`flex items-center justify-center text-4xl font-bold text-very-dark-blue ${poppins.className}`}
        >
          CONTACT US
        </h1>
      </div>

      <main className="flex-gro p-8">
        <section className="container mx-auto max-w-6xl">
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
          >
            <Map
              style={{ width: "100%", height: "400px" }}
              defaultCenter={markerPosition}
              defaultZoom={17}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
            >
              <AdvancedMarker position={markerPosition} />
            </Map>
          </APIProvider>
        </section>
        <div className="max-w-6xl my-5 mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2
              className={`text-2xl font-bold mb-6 text-very-dark-blue ${poppins.className}`}
            >
              GET IN TOUCH WITH US
            </h2>
            <p className="mb-6">
              Reach out to us for inquiries or to discuss how we can bring your
              architectural vision to life.
            </p>
            <form>
              <div className="grid grid-cols-1md:grid-cols-2 gap-4">
                <input
                  placeholder="YOUR NAME"
                  className="p-2 border border-gray-300 outline-none focus:border-mustard-yellow bg-transparent"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="p-2 border border-gray-300 outline-none focus:border-mustard-yellow bg-transparent"
                />
                <input
                  placeholder="PHONE"
                  className="p-2 border border-gray-300 outline-none focus:border-mustard-yellow bg-transparent"
                />
                <input
                  placeholder="SUBJECT"
                  className="p-2 border border-gray-300 outline-none focus:border-mustard-yellow bg-transparent"
                />
                <textarea
                  className="col-span-2 p-2 border border-gray-300 outline-none focus:border-mustard-yellow bg-transparent"
                  placeholder="YOUR MESSAGE"
                  rows={4}
                />
              </div>
              <button
                type="button"
                className="mt-4 p-3 hover:bg-mustard-yellow hover:text-white border border-mustard-yellow text-mustard-yellow"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div>
            <h2
              className={`text-2xl font-bold mb-6 text-very-dark-blue ${poppins.className}`}
            >
              CONTACT INFORMATION
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <LuMapPin className="w-6 h-6 text-yellow-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>
                    4th Floor, George Padmore Building
                    <br />
                    George Padmore Rd
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <LuPhone className="w-6 h-6 text-yellow-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p>
                    +254 720 239 782
                    <br />
                    +254 20 2101348
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <LuMail className="w-6 h-6 text-yellow-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">Mail Us</h3>
                  <p>info@jawkimarchitects.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

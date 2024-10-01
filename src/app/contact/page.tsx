"use client";

import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const Contact = () => {
  const markerPosition = { lat: -1.2964734, lng: 36.7899051 };

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=256&width=1024')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">CONTACT US</h1>
        </div>
      </header>

      <main className="flex-grow bg-white p-8">
        <section className="container mx-auto max-w-6xl">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              GET IN TOUCH WITH US
            </h2>
            <p className="text-gray-600 mb-6">
              Reach out to us for inquiries or to discuss how we can bring your
              architectural vision to life.
            </p>
            <form className="space-y-4">
              <input placeholder="YOUR NAME" />
              <input type="email" placeholder="YOUR EMAIL" />
              <input placeholder="PHONE" />
              <input placeholder="SUBJECT" />
              <textarea placeholder="YOUR MESSAGE" rows={4} />
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">CONTACT INFORMATION</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <LuMapPin className="w-6 h-6 text-yellow-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">info@jawkimarchitects.com</p>
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

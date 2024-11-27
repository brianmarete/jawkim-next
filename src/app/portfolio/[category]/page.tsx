// import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import { images } from "@/app/images";
import Portfolio from "@/app/ui/components/Portfolio";
import { poppins } from "@/app/ui/fonts";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center uppercase">
          {category}
        </h1>
        <BentoGrid images={images[category]} />
      </div>
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="w-full bg-white py-12"
      > */}
      <div className="container mx-auto px-4">
        <h2
          className={`text-6xl text-center font-bold text-gray-800 ${poppins.className}`}
        >
          OUR WORK
        </h2>
        <Portfolio />
      </div>
      {/* </motion.section> */}
    </>
  );
}

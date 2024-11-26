import BentoGrid from "./BentoGrid";
import { images } from "@/app/images";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center uppercase">
        {category}
      </h1>
      <BentoGrid images={images[category]} />
    </div>
  );
}

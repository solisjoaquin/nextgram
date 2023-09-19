import Link from "next/link";
import swagPhotos from "../photos";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Footer, { BuildIcon } from "../components/footer/Footer";

export default function Home() {
  const photos = swagPhotos;

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-5">
        <div className="pt-24 pb-12">
          <h1 className="flex items-center gap-2">
            <BuildIcon />
            <div>
              <h1 className="text-3xl sf-pro ">La olmeda</h1>
              <p className="text-sm">Jose Maria Bedoya 332</p>
            </div>
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-max gap-6 ">
          {photos.map(({ id, imageSrc }) => (
            <Link key={id} href={`/photos/${id}`}>
              <Image
                alt=""
                src={imageSrc}
                height={300}
                width={300}
                className="w-full object-cover aspect-square"
              />
            </Link>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}

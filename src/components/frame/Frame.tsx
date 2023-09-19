import Image from "next/image";
import { Photo } from "../../photos";

export default function Frame({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={300}
        width={300}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6 ">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">{photo.name}</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Consultar
          </button>
        </div>

        <p className="pt-4">{photo.description}</p>
      </div>
    </>
  );
}

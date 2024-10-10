import Image from "next/image";

interface ImageBatchProps {
  images: number[]; // Define images as an array of numbers
}

export default function ImageBatch({ images }: ImageBatchProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
      {images.map((imageNumber) => (
        <Image
          key={imageNumber}
          src={`/${imageNumber}.jpeg`}
          alt={`Image ${imageNumber}`}
          width={400}
          height={200}
          className="rounded-lg shadow-md w-full"
        />
      ))}
    </div>
  );
}

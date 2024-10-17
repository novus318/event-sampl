import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ImageLoader from "./components/ImageLoader";
import VideoLoader from "./components/VideoLoader";

// Dynamically import the video player component
const VideoPlayer = dynamic(() => import("@/app/components/VideoPlayer"), {
  suspense: true,
});

// Dynamically import the image batch component
const ImageBatch = dynamic(() => import("@/app/components/ImageBatch"), {
  suspense: true,
});

export default function Home() {
  // Define the image batches
  const imageBatches = [
    Array.from({ length: 19 }, (_, index) => index + 1),
    Array.from({ length: 8 }, (_, index) => 80 + index),
    [94,95,96,],
    Array.from({ length: 34 }, (_, index) => index + 60),
    Array.from({ length: 20 }, (_, index) => index + 20),
    Array.from({ length: 20 }, (_, index) => index + 40),
  ];

  return (
    <div className="flex flex-col items-center p-2">
      <header className="mb-4">
        <Image 
          src="/VKJLOGO.png" 
          alt="VKJ Logo" 
          width={150} 
          height={100} 
          className="mx-auto"
        />
      </header>


      <div className="mb-4 w-full">
        <Image 
          src="/main.jpeg" 
          alt="Main Banner" 
          width={1200} 
          height={400} 
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      {/* Display images in batches with a video between each batch */}
      {imageBatches.map((batch, batchIndex) => (
        <div key={batchIndex} className="w-full">
          {/* Render image batch with suspense */}
          <Suspense fallback={<ImageLoader/>}>
            <ImageBatch images={batch} />
          </Suspense>

          {/* Render video between batches */}
          {batchIndex < imageBatches.length && (
            <Suspense fallback={<VideoLoader/>}>
              <VideoPlayer src={`/${batchIndex + 1}.mp4`} />
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
}

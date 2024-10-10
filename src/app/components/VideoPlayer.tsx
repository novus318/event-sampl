import React from 'react';

// Define the props type
interface VideoPlayerProps {
  src: string; // or use 'URL' if you want to be more specific
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="my-4">
      <video controls width="100%" className="rounded-lg shadow-md">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

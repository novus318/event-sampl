import { Loader2 } from 'lucide-react'; // Ensure lucide-react is installed
import React from 'react';

const VideoLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-48 bg-gray-100 rounded-lg shadow-md">
      <Loader2 className="w-10 h-10 text-gray-500 animate-spin" />
      <span className="ml-2 text-gray-600">Loading video...</span>
    </div>
  );
};

export default VideoLoader;

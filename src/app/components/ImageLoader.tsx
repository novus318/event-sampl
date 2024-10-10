import { Loader2 } from 'lucide-react';
import React from 'react';

const ImageLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-48 bg-gray-100 rounded-lg shadow-md">
      <Loader2 className="w-10 h-10 text-gray-500 animate-spin" />
    </div>
  );
};

export default ImageLoader;

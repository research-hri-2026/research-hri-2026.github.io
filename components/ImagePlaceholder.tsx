import React from 'react';
import { ImageIcon } from './Icons';

interface ImagePlaceholderProps {
  aspectRatio?: string;
  text?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ aspectRatio = "aspect-video", text = "Image Placeholder" }) => {
  return (
    <div className={`${aspectRatio} w-full bg-gray-200 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-400 text-gray-600`}>
      <div className="text-gray-500 mb-2">
        <ImageIcon width="48" height="48" />
      </div>
      <p className="text-xl font-semibold">{text}</p>
      <p className="text-sm mt-1 text-gray-500">// TODO: Replace this div with your &lt;img&gt; tag</p>
    </div>
  );
};

export default ImagePlaceholder;

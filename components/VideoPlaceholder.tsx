import React from 'react';
import { VideoIcon } from './Icons';

interface VideoPlaceholderProps {
  text?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ text = "Video Placeholder" }) => {
  return (
    <div className="aspect-video w-full bg-gray-200 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-400 text-gray-600">
      <div className="text-gray-500 mb-2">
        <VideoIcon width="48" height="48" />
      </div>
      <p className="text-xl font-semibold">{text}</p>
      <p className="text-sm mt-1 text-gray-500">// TODO: Replace this div with your &lt;video&gt; or &lt;iframe&gt; tag</p>
    </div>
  );
};

export default VideoPlaceholder;

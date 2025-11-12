import React from 'react';
import VideoPlaceholder from './VideoPlaceholder';
import { PaperIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 leading-tight">
        Keeping the Team Moving: How Resilient Multi-Robot Coordination Affects Human Trust and Fluency
      </h1>
      
      <VideoPlaceholder text="Teaser Video" />

    </section>
  );
};

export default Hero;
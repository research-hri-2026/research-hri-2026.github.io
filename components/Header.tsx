import React, { useState, useEffect } from 'react';
import { PaperIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = "text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium";
  const buttonLinkClasses = "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <a href="#" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Resilient Multi-Robot Coordination
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#abstract" className={navLinkClasses}>Abstract</a>
          <a href="#method" className={navLinkClasses}>Method</a>
          <a href="#results" className={navLinkClasses}>Results</a>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#" className={`${buttonLinkClasses} bg-blue-600 hover:bg-blue-700 text-white`}>
            <PaperIcon />
            <span className="hidden sm:inline">Paper</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
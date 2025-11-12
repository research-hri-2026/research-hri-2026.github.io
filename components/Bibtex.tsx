import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

const Bibtex: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  // NOTE TO USER: Update this with your final BibTeX entry
  const bibtexEntry = `@inproceedings{anonymous2025keeping,
  title={Keeping the Team Moving: How Resilient Multi-Robot Coordination Affects Human Trust and Fluency},
  author={Anonymous, Author},
  booktitle={ACM Conference on Human-Robot Interaction},
  year={2025},
  organization={ACM}
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtexEntry);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative bg-gray-100 rounded-lg p-6 font-mono text-sm text-gray-800 leading-6">
      <button 
        onClick={handleCopy}
        className="absolute top-4 right-4 bg-white p-2 rounded-md shadow-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
        aria-label="Copy BibTeX"
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <pre><code>{bibtexEntry}</code></pre>
    </div>
  );
};

export default Bibtex;

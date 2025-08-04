import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full h-64 rounded-xl text-white flex flex-col justify-center items-center gap-6 px-4">
      <span className="font-bold text-2xl text-center">
        Trends 🌎 2025 &mdash; My Website. All Rights Reserved.
      </span>
      <div className="flex gap-5">
        <a href="#" className="hover:underline hover:text-gray-400 transition-colors">Facebook</a>
        <a href="#" className="hover:underline hover:text-gray-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:underline hover:text-gray-400 transition-colors">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;

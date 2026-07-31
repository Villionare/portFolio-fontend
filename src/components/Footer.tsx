import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="font-pixel-bold flex px-5 justify-between items-center border-2 border-yellow-400 rounded-2xl text-center h-15 p-2 text-white">
      <div className="flex gap-4 justify-center items-center">
        <FaHeart color="#e53344" size={30} />
        <span>Thanks for visiting! Let’s connect and create something anazing.</span>
      </div>
      <div className="flex text-yellow-500 gap-2">
        <span>&copy; 2026</span>
        <span>Abhay Singh</span>
      </div>
    </div>
  );
};

export default Footer;
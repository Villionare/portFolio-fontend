import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import {
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

const Socials: React.FC = () => {
    return (
        <div className="flex pt-2 pr-2 mb-2 justify-end gap-3 h-17">

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <FaGithubSquare size={30} color="#181717" />
            </a>

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <FaLinkedin size={30} color="#0A66C2" />
            </a>

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <SiLeetcode size={30} color="#FFA116" />
            </a>

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <FaInstagramSquare size={30} color="#E4405F" />
            </a>

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <BsTwitterX size={30} color="#000000" />
            </a>

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <FaWhatsappSquare size={30} color="#25D366" />
            </a>

            <a href="" className="bg-white h-fit p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                <MdEmail size={30} color="#EA4335" />
            </a>

        </div>
    );
};

export default Socials;
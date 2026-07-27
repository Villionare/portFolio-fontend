import {
    FaHouse,
    FaUser,
    FaLaptopCode,
    FaFolderOpen,
    FaGraduationCap,
    FaBriefcase,
    FaGithub,
    FaEnvelope,
    FaFileArrowDown
} from "react-icons/fa6";

import { LiaMedalSolid } from "react-icons/lia";

const Header = () => {
    return (
        <div className="flex items-center justify-around bg-[#e53646] p-2 h-20 border-2 border-black rounded-2xl shadow-[inset_0_-4px_0_0_#b71c2c] text-white">

            {/* Logo */}
            <div className="flex gap-2 rounded-md px-4 py-2 cursor-pointer">
                <span className="text-2xl text-yellow-300">{"</>_"}</span>
            </div>

            {/* Home */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaHouse />
                <span>HOME</span>
            </button>

            {/* About */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaUser />
                <span>ABOUT</span>
            </button>

            {/* Skills */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaLaptopCode />
                <span>SKILLS</span>
            </button>

            {/* Projects */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaFolderOpen />
                <span>PROJECTS</span>
            </button>

            {/* Education */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaGraduationCap />
                <span>EDUCATION</span>
            </button>

            {/* Experience */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaBriefcase />
                <span>EXPERIENCE</span>
            </button>

            {/* Certifications */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <LiaMedalSolid />
                <span>CERTIFICATIONS</span>
            </button>

            {/* GitHub */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaGithub />
                <span>GITHUB</span>
            </button>

            {/* Contact */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-2xl hover:bg-red-600 cursor-pointer">
                <FaEnvelope />
                <span>CONTACT</span>
            </button>

            {/* Resume */}
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black rounded-2xl shadow-[inset_0_-4px_0_0_#d79832] text-black hover:bg-yellow-300 cursor-pointer">
                <FaFileArrowDown />
                <span>RESUME</span>
            </button>

        </div>
    );
};

export default Header;
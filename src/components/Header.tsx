import {
    FaHouse,
    FaUser,
    FaLaptopCode,
    FaFolderOpen,
    FaGraduationCap,
    FaBriefcase,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa6";

import { LiaMedalSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="font-pixel-hb flex items-center justify-around bg-[#e53646] p-2 h-20 border-2 border-black rounded-md shadow-[inset_0_-4px_0_0_#b71c2c] text-white">

            {/* Logo */}
            <div className="flex gap-2 rounded-md-md px-4 py-2 cursor-pointer">
                <span className="text-2xl text-yellow-300">{"</>_"}</span>
            </div>

            {/* Home */}
            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaHouse />
                <span>HOME</span>
            </button>

            {/* About */}
            <button
                onClick={() => navigate("/about")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaUser />
                <span>ABOUT</span>
            </button>

            {/* Skills */}
            <button
                onClick={() => navigate("/skills")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaLaptopCode />
                <span>SKILLS</span>
            </button>

            {/* Projects */}
            <button
                onClick={() => navigate("/projects")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaFolderOpen />
                <span>PROJECTS</span>
            </button>

            {/* Education */}
            <button
                onClick={() => navigate("/education")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaGraduationCap />
                <span>EDUCATION</span>
            </button>

            {/* Experience / Goals */}
            <button
                onClick={() => navigate("/goals")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaBriefcase />
                <span>EXPERIENCE</span>
            </button>

            {/* Certifications */}
            <button
                onClick={() => navigate("/certifications")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <LiaMedalSolid />
                <span>CERTIFICATIONS</span>
            </button>

            {/* GitHub / Achievements */}
            <button
                onClick={() => navigate("/achievements")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaGithub />
                <span>GITHUB</span>
            </button>

            {/* Contact */}
            <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#86121e] shadow-[inset_0_-4px_0_0_#b71c2c] rounded-md hover:bg-red-600 cursor-pointer"
            >
                <FaEnvelope />
                <span>CONTACT</span>
            </button>

            <button
                onClick={() => window.close()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-300 border border-gray-400 rounded-md shadow-[inset_0_-4px_0_0_#787a7f] text-black hover:bg-gray-400 cursor-pointer"
            >
                <span>Gray Mode</span>
            </button>
        </div>
    );
};

export default Header;
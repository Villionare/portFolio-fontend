import React from 'react';
import ProfileImage from '../components/ProfileImage';
import coverImage from '../assets/backgrounds/education.png';
import { PiStudentBold } from 'react-icons/pi';
import { FaBookOpen, FaBrain, FaRocket, FaTools } from 'react-icons/fa';
import { IoTerminal } from 'react-icons/io5';

//collage, school, certification, 

const Education: React.FC = () => {
    return (

        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl shadow-[inset_0_0_0_4px_#232846]" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">

                <div className="font-pixel-bold flex flex-col gap-2 h-full justify-center items-center">
                    <div className="flex items-center justify-center gap-2 bg-[#080e1a] p-4 text-white text-3xl rounded-2xl border-4 border-white shadow-[6px_6px_0px_#3d3d3d]">
                        <span>✨</span>
                        <PiStudentBold color='yellow' />
                        <span>EDUCATION</span>
                        <span>✨</span>
                    </div>

                    <span className="font-pixel-mono-bold text-2xl">The Journery till Now</span>
                </div>

                <div className="absolute -bottom-16 left-6">
                    <ProfileImage height="h-45" width="w-45" />
                </div>

            </div>

            {/* lower section */}
            <div className=" bg-amber-200 px-6 rounded-2xl">

                {/* flex containing two rows */}
                <div className="flex mt-6 mb-5">

                    {/* left section */}
                    <div className="flex-1/4 flex flex-col gap-4 pt-15 pr-5">

                        {/* MY LEARNING FOCUS */}
                        <fieldset className="flex flex-col bg-[#f4e8d5] p-5 pb-2 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">
                                <FaBookOpen size={30} color='white' />
                                <span>MY LEARNING FOCUS</span>
                            </legend>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-green-500 rounded-lg p-3">
                                    <FaBrain size={18} color={'golden'} />
                                </div>
                                <div className="flex flex-col">
                                    <span>PROBLEM SOLVING AND LOGIC</span>
                                    <span>Problem Solving and breaking complex logic into small steps first</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-blue-600 rounded-lg p-3">
                                    <IoTerminal size={18} color="black" />
                                </div>

                                <div className="flex flex-col">
                                    <span>SOFTWARE DEVELOPMENT</span>
                                    <span>Building Scalable and user-friendly solutions</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-red-500 rounded-lg p-3">
                                    <FaRocket size={18} color="white" />
                                </div>

                                <div className="flex flex-col">
                                    <span>CONTINUOUS GROWTH</span>
                                    <span>Learning the new technologies and improving everyday</span>
                                </div>

                            </div>

                        </fieldset>

                        {/* lets connect */}
                        <fieldset className="flex flex-col bg-[#f4e8d5] pt-3 px-3 pb-4 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">

                                <FaTools size={30} color='brown' />

                                <span>TOOLS I USE</span>
                            </legend>

                            <div className="flex justify-end gap-2 h-fit">
                            </div>
                        </fieldset>
                    </div>

                    {/* right section */}
                    <div className="flex-2/4 flex flex-col items-center gap-3">


                        <div className="max-w-4xl mx-auto flex flex-col gap-8 relative">

                            {/* Vertical dashed connector line */}
                            <div
                                className="absolute left-[19px] top-8 bottom-20 z-0 w-[2px] border-l-2 border-dashed border-gray-700"
                            />

                            {/* ITEM 1 */}
                            <div className="flex items-stretch gap-4 relative z-10">
                                <div className="flex-shrink-0 self-start">
                                    <div className="w-10 h-10 bg-red-600 border-2 border-black rounded-md flex items-center justify-center text-white font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        1
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-4">
                                    <div className="flex-1 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 relative">
                                            <span className="text-red-600 text-3xl absolute -left-1">🌿</span>
                                            <span className="text-4xl">🎓</span>
                                            <span className="text-red-600 text-3xl absolute -right-1 scale-x-[-1]">🌿</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-red-600 font-bold text-lg leading-tight">
                                                Bachelor of Computer Applications (BCA)
                                            </h3>
                                            <p className="text-black font-semibold text-sm mt-1">
                                                Institute of Innovation in Technology and Management | Janakpuri
                                            </p>
                                            <div className="border-t border-dashed border-red-300 my-2" />
                                            <p className="text-sm flex items-center gap-2">
                                                <span>📅 Oct 2022 – May 2025</span>
                                                <span className="text-black">|</span>
                                                <span className="flex items-center gap-1 text-red-600 font-bold">
                                                    ⭐ CGPA : 7.4/10
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex flex-col justify-center w-56 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3">
                                        <p className="text-sm text-black leading-snug">
                                            <span className="text-red-600">⭐</span> Focused on software development,
                                            databases, web technologies and problem solving.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ITEM 2 */}
                            <div className="flex items-stretch gap-4 relative z-10">
                                <div className="flex-shrink-0 self-start">
                                    <div className="w-10 h-10 bg-green-700 border-2 border-black rounded-md flex items-center justify-center text-white font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        2
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-4">
                                    <div className="flex-1 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 relative">
                                            <span className="text-green-700 text-3xl absolute -left-1">🌿</span>
                                            <span className="text-4xl">🏫</span>
                                            <span className="text-green-700 text-3xl absolute -right-1 scale-x-[-1]">🌿</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-green-700 font-bold text-lg leading-tight">
                                                Class XII (CBSE)
                                            </h3>
                                            <p className="text-black font-semibold text-sm mt-1">
                                                Modern Public School | Sector – 37, Faridabad
                                            </p>
                                            <div className="border-t border-dashed border-green-300 my-2" />
                                            <p className="text-sm flex items-center gap-2">
                                                <span>📅 2022</span>
                                                <span className="text-black">|</span>
                                                <span className="flex items-center gap-1 text-green-700 font-bold">
                                                    ⭐ 82.2%
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex flex-col justify-center w-56 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3">
                                        <p className="text-sm text-black leading-snug">
                                            <span className="text-green-700">⭐</span> Built a strong academic base in
                                            Physics, Chemistry, Mathematics and Computer Science.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ITEM 3 */}
                            <div className="flex items-stretch gap-4 relative z-10">
                                <div className="flex-shrink-0 self-start">
                                    <div className="w-10 h-10 bg-blue-600 border-2 border-black rounded-md flex items-center justify-center text-white font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        3
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-4">
                                    <div className="flex-1 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 relative">
                                            <span className="text-blue-600 text-3xl absolute -left-1">🌿</span>
                                            <span className="text-4xl">🏫</span>
                                            <span className="text-blue-600 text-3xl absolute -right-1 scale-x-[-1]">🌿</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-blue-600 font-bold text-lg leading-tight">
                                                Class X (CBSE)
                                            </h3>
                                            <p className="text-black font-semibold text-sm mt-1">
                                                Badri Narayan Public School | Sector – 91, Faridabad
                                            </p>
                                            <div className="border-t border-dashed border-blue-300 my-2" />
                                            <p className="text-sm flex items-center gap-2">
                                                <span>📅 2020</span>
                                                <span className="text-black">|</span>
                                                <span className="flex items-center gap-1 text-blue-600 font-bold">
                                                    ⭐ 78.8%
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex flex-col justify-center w-56 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3">
                                        <p className="text-sm text-black leading-snug">
                                            <span className="text-blue-600">⭐</span> Developed core concepts and a
                                            curiosity for technology and innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;